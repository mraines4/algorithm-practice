// Frequency Pattern Exercise 1
// Given two arrays write a function to find out if two arrays have the same frequency of digits.


function frequencyOfDigits (arr1, arr2) {
    // check the lengths of the 2. If they arent the same, return false
    if (arr1.length !== arr2.length) {
        return false;
    }
    // set up 2 objects to hold the frequencies of each array
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // loop through values in first array
    for (let val of arr1) {
        // this check to see if the value is a key in the frequencyCounter1
        // if it is, increase the value of that key by 1
        if (frequencyCounter1[val]) {
            frequencyCounter1[val]+=1
        } else {
            // if its not, add the key and set it to 1
            frequencyCounter1[val] = 1
        }
    }
    // loop through the second array
    for (let val of arr2) {
        // this does the same as above, but much smoother
        // it check to see if value is in counter, if it is remain teh same, 
        // if not sets it to zero,
        // THEN, increases by one.
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    // loop through keys inside first object
    for (let key in frequencyCounter1) {
        // if that key isnt in the second object, return false.
        if (!(key in frequencyCounter2)) {
            return false
        }
    }
    // all the falses have been weeded out, return true
    return true;
}

// console.log(frequencyOfDigits([1,2,3,4], [1,2,3,4]));
// console.log(frequencyOfDigits([1,2,3,4], [1,4,5,6]));
// console.log(frequencyOfDigits([1,2,3,4], [1,4,4,2]));
// console.log(frequencyOfDigits([1,2,3,4], [1,4,3,2]));
// console.log(frequencyOfDigits([1,2,3,4,5], [1,2,3,4]));

/////////////////////////////////////////////////////////////////////

// Frequency Pattern Exercise 2
// Given two arrays write a function to determine if each value in our first array contains a corrsponding value to the second power in the second array.

function correspondingVal(arr1, arr2) {
    // check to see if the lengths match
    if (arr1.length !== arr2.length) {
        return false;
    }
    // create 2 dictionaries to hold 
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // loop through each value in array 1
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        // if that key isnt in the second object, return false.
        if (!((key**2) in frequencyCounter2)) {
            return false;
        }
    }
    // all falsey are gone, return true
    return true;
}


// console.log(correspondingVal([1,2,3,4], [1,4,9,16]));
// console.log(correspondingVal([1,2,3,4], [1,4,5,6]));
// console.log(correspondingVal([1,2,3,4], [1,4,4,2]));
// console.log(correspondingVal([1,2,3,4], [1,16,9,4]));
// console.log(correspondingVal([1,2,3,4,5], [1,2,3,4]));

/////////////////////////////////////////////////////////////////////

// Frequency Pattern Exercise 3
// Given two positive integers write a function to find out if two numbers have the
// same frequency of digits.

function freqNum(num1, num2) {
    // convert to string first(to make it have indexes)
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) {
        return false
    }
    let freqCount1 = {};
    let freqCount2 = {};
    for (let val of str1) {
        freqCount1[val] = (freqCount1[val] || 0) + 1;
    }
    for (let val of str2) {
        freqCount2[val] = (freqCount2[val] || 0) + 1;
    }
    for (let key in freqCount1) {
        if (!(key in freqCount2)) {
            return false;
        }
    }
    return true;
}

// console.log(freqNum(123,123));
// console.log(freqNum(123,221));
// console.log(freqNum(123,231));
// console.log(freqNum(123,1234));

/////////////////////////////////////////////////////////////////////

// Frequency Pattern Exercise 4
// Create a function that accepts two strings and checks if they are valid anagrams.

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let freq1 = {};
    let freq2 = {};
    for (let val of str1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }
    for (let val of str2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }
    for (let key in freq1) {
        if (!(key in freq2)) {
            return false;
        }
    }
    return true;
}

console.log(anagram('pie', 'eip'));
console.log(anagram('pie', 'pie'));
console.log(anagram('pie', 'pies'));
console.log(anagram('pie', 'pwe'));