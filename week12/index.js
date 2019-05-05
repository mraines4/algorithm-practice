var reverseString = function(s) {
    let array = s.split('');
    newArray = []
    let anotherArray = [...array]
    array.forEach(each => {
        let end = anotherArray.pop()
        newArray.push(end)
        // newArray.push(anotherArray)
    })
    return newArray
};

// console.log(reverseString('howdy partner'));

const mostCommon = function(arr) {
    let obj = {}
    let maxval = 0
    arr.forEach(num => {
        if (obj.hasOwnProperty(num)) {
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    })
    for (num in obj) {
        if (obj[num] > maxval){
            maxval = num
        }
    }
    return maxval


}

// console.log(mostCommon([1,2,2,2,4,6,7,1]));

var fizzBuzz = function(n) {
    let arr = []
    for (let i = 1; i <= n; i ++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
             arr.push('FizzBuzz')
        } else if (i % 3 === 0) {
            arr.push('Fizz')
        } else if (i % 5 === 0) {
            arr.push('Buzz')
        } else {
            arr.push(i.toString())
        }
    }
    return arr
};

// console.log(fizzBuzz(15));

var firstUniqChar = function(s) {
    const arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            return i
        }
    }
    return -1
};

// console.log(firstUniqChar('loveleetcode'));


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

const reverse = (string) => {
    return string.split('').reverse().join('')
    
}

function reverseTwo(string) {
    const arr = string.split('');
    const mutateArr = [...arr]
    const newArr = []
    arr.forEach(letter => {
        const end = mutateArr.pop();
        newArr.push(end);
    })
    return newArr.join('')
}

function reverse3(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i --) {
        newString += string[i]
    }
    return newString 
}


// console.log(reverse3("Hello World"));

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


function findMostCommon(arr) {
    let freqCounter = {};
    let mostCommon = 0;
    arr.forEach(num => {
        if (freqCounter.hasOwnProperty(num)) {
            freqCounter[num] += 1;
        } else {
            freqCounter[num] = 1
        }

        if (freqCounter[num] > mostCommon) {
            mostCommon = num;
        }
    })
    return mostCommon;
}

function mostCommon2(arr) {
    let obj = {};
    let mostCommon = 0;
    arr.forEach(num => {
        if (obj[num] === undefined) {
            obj[num] = 1;
        } else {
            obj[num] += 1;
        }

        if(obj[num] > mostCommon) {
            mostCommon = num;
        }
    })
    return mostCommon;
}

// console.log(mostCommon2([1,2,3,5,6,7,7,8,8,7,9]));

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function findAvg(arr) {
    let total = 0
    arr.forEach(item => {
        total += item
    })
    return (total / arr.length)
}

// console.log(findAvg([1,2,3,5]));


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

