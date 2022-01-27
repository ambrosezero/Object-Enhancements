// same keys and values
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}




//   computed property names
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite"
}






// object methods
var instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}


// create animal function

// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        },
    }
}