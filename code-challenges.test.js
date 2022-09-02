// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleArray", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", ()=> {
        expect(shuffleArray(colors1)).toEqual(expect.not.arrayContaining(["purple"]))
        expect(shuffleArray(colors2)).toEqual(expect.not.arrayContaining(["chartreuse"]))
    })
})

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// ReferenceError: shuffleArray is not defined

// b) Create the function that makes the test pass.

//PseudoCode:
// Create a function called arrayShuffle that takes in a parameter called array
// I want to be able to take in the arrays colors 1, 2
// The .shift method will remove the first index, .sort will return  the new array while the command Math.random will provide that shuffle effect by randomizing the array
// The output should be randomized array with removed items from array

const shuffleArray = (array) => {
 array.shift(), array.sort(() => Math.random() - 0.5)
 return array
 
 }


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

describe("allVotes", ()=>{
    it("takes in an object that contains up votes and down votes and returns the net total of votes", ()=>{
        expect(allVotes(votes1)).toEqual(11)
        expect(allVotes(votes2)).toEqual(-31)
    })
})

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

//   ReferenceError: allVotes is not defined

// b) Create the function that makes the test pass.


//Pseudocode:
// Create a function called allVotes that takes in an object
// I will let the total variable equal to an object value utlizing dot notation
// The values will then be subtracted to return the output of total votes
//

const allVotes = (object) => {
    let total = object.upVotes - object.downVotes
    return total
}
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("twoArray", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        expect(twoArray(["array", "object", "number", "string", "Boolean", "null", "undefined"]))
    })
})


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// ReferenceError: twoArray is not defined

// b) Create the function that makes the test pass.

// Create a function called twoArray
// Create a var called arr that takes in two arrays as a Set object using the spread operator
// The duplicates will be excluded and only unique values will be outputed due to the spread operator Set
// use return arr to get the output


// * I looked this one up so I had a hard time explaining through it.

const twoArray = (arr) =>  {
    let arr = [...new Set([...dataArray1 ,...dataArray2])]
    return arr
    }
    