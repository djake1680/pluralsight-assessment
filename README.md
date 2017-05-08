# pluralsight-assessment

The program should accept an array of strings defining dependencies. Each string contains the name of a package followed by a colon and space, then any dependencies required by that package. For simplicity we’ll assume a package can have at most one dependency.

The program should output a comma separated list of package names in the order of install, such that a package’s dependency will always precede that package.

The program should reject as invalid a dependency specification that contains cycles.
