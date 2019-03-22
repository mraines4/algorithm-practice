// Write a function that returns an array of sequential digits from lowest value to highest in the inital array
function doTheThing(array) {
    let output = [];
    for (let i = array[0]; i <= array[array.length-1]; i++) {
        output.push(i);
    }
    return output;
};


// console.log(doTheThing([1,3,5,6,7,8])); // expect [1,2,3,4,5,6,7,8]

///////////////////////////////////////////////////
///////////////////////////////////////////////////

// Write a function that predicts the number of years it will take a population to meet its goal given a % growth and net immigration
function nb_year(p0, percent, aug, p){
    let per = percent * .01;
    let year = 0;
    while (p0 < p){
        p0 = ((p0*per)+p0+aug);
        year++;
    }
    return year;
}

// console.log(nb_year(1500, 5, 100, 5000)); // expect 15 years
// console.log(nb_year(1500000, 2.5, 10000, 2000000)); // expect 10

///////////////////////////////////////////////////
///////////////////////////////////////////////////

// Write a function which accepts an array of integers and n as a number. The function should calculate the maximum sum of 
// n of consecutive elements in an array
// ([1,2,4,2,8,1,5],2) = 10
// ([1,2,4,2,8,1,5,1],4) = 17
// ([4,2,1,6,2],4) = 13
// ([],4) = null

function doIt(array, number) {
    if (array.length < number) {
        return null;
    };
    let highestSum;
    for (let i = 0; i < (array.length - number); i++) {
        let sum = array[i];
        for (let j = (i+1); j < (i + number); j++) {
            sum += array[j];
        }
        if (i === 0) {
            highestSum = sum;
        } else if (highestSum < sum) {
            highestSum = sum;
        }
    }
    return highestSum;
}

// console.log(doIt([1,2,4,2,8,1,5],2));
// console.log(doIt([1,2,5,2,8,1,5,1],4));
// console.log(doIt([4,2,1,6,2],4));
// console.log(doIt([],4));

//////////////////////////////////////////////

function linearSearch (array, number) {
    for (let i = 0; i < array.length; i++) {    
        if (array[i] === number) {
            return i;
        }
    }
    return -1;
}

function linearSearch2 (array, number) {
    // if (array.includes(number)) {
        return array.indexOf(number);
    // }
    // return -1;
}

// console.log(linearSearch2([1,2,3,5,7,8,10], 8));


function binarySearch(array, number) {
    let middle = Math.floor(array.length / 2);
    let end = array.length -1;
    let start = array[0];
    while (!(number === array[middle])) {
        if (number > array[middle]) {
            start = middle + 1;
        } else {
            end = middle -1;
        }
        middle = Math.floor((start + end)/2)
    }
    if (number === array[middle]){
        return middle;
    }
}

console.log(binarySearch([1,2,3,5,7,8,10], 8));