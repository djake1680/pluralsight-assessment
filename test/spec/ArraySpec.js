describe("sortArray", function() {
  it("Sorts through array of dependencies and puts them in proper order of installation.  This test should run no errors.", function() {

var array = ['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser: KittenService','Fraudstream: Leetmeme','Ice: '];

var errorNumber = sortArray(array);

expect(errorNumber).toEqual(0);

  });
});

describe("sortArray", function() {
  it("Sorts through array of dependencies and puts them in proper order of installation.  This test should run an error with count of 2 because 2 dependencies require each other.", function() {

var array = ['KittenService: CamelCaser','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser: KittenService','Fraudstream: Leetmeme','Ice: '];

var errorNumber = sortArray(array);

expect(errorNumber).toEqual(2);

  	});
});

describe("sortArray", function() {
  it("Sorts through array of dependencies and sends error if there's any dependency loops.", function() {

var array = ['KittenService: CamelCaser','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser: Mustache','Mustache: KittenService','Fraudstream: Leetmeme','Ice: '];

var errorNumber = sortArray(array);

expect(errorNumber).toEqual(1);

  	});
});