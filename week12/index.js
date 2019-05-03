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

console.log(firstUniqChar('loveleetcode'));