var depend = ['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser: KittenService','Fraudstream: Leetmeme','Ice: '];
var newArray = [];
var finalArray = [];
var errors = 0;

// function splits the array into an array of arrays.
// each new array consists of a dependency and required dependency, if any
for (var i = 0; i < depend.length; i++) {
  var arrayItem = depend[i].split(':');
  delete depend[i];
  //console.log(arrayItem);
  arrayItem[0] = arrayItem[0].trim();
  arrayItem[1] = arrayItem[1].trim();
  newArray.push(arrayItem);
}

//iterate through each array and see if any 1st and 2nd
//indexes require each other.  If they do, throw an error
for (var i = 0; i < newArray.length; i++) {
  var iteration = i;
  for(var j = 0; j < newArray.length; j++) {
    if(iteration === j) {
      continue;
    }
    else {
      if(newArray[iteration][0] === newArray[j][1]) {
        //console.log(newArray[iteration][0]);
        //console.log(newArray[j][1]);
        if(newArray[j][0] === newArray[iteration][1]) {
          console.log("Error.  Dependencies cannot require each other");
          errors++;
          break;
        }
        else {
          console.log("No dependencies rely on each other");
        }
      }
    }
  }
}

// function pulls out any dependencies that do not require others and 
// place them in the final array
for(var i = 0; i < newArray.length; i++) {
  if(newArray[i][1] === "") {
    finalArray.push(newArray[i][0]);
    newArray.splice([i], 1);
    i++;
  }
}

//console.log(newArray);
//console.log(finalArray);

// function takes remaining dependencies that require others, and sorts
// them into the final array in the right order
if(errors === 0) {
  var loops = 0;
  arrayLength = newArray.length;
while(newArray.length !== 0) {
  // if loops is greater than arrayLength, it means there's a loop and will not complete sorting order
  if (loops > arrayLength) {
    console.log("Big error");
    errors++;
    break;
  }
for(var i = 0; i < newArray.length; i++) {
  var temp = [];
  for(var j = 0; j < finalArray.length; j++) {
    if (newArray.length !== 0) {
      if(newArray[i][1] === finalArray[j]) {
      temp.push(newArray[i][0]);
      //finalArray.unshift(newArray[i][0]);
      newArray.splice([i], 1);
      //j--;
    }
    }
    else {
      break;
    }
  }
  //console.log("temp is " + temp);
  finalArray = finalArray.concat(temp);
}
loops++;
}
}
console.log(newArray);
console.log(finalArray);