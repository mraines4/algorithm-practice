// #1
function squareCube(array1, array2) {
    // Initialize variables
    let sumSquare = 0;
    let sumCube = 0;

    // Loop through each element within the array
    array1.forEach(function (num){
        // Squares the elements and adds it into the array
        sumSquare += Math.pow(num, 2);
    });
    array2.forEach(function (num) {
        // Cubes the elements and adds it into the array
        sumCube += Math.pow(num, 3);
    });
    // Compares the values.
    if (sumSquare > sumCube) {
        return true;
    } else {
        return false;
    }
}

console.log(squareCube([1,2,3], [4,5,6]))

// #2
function addAllLetters (str1, str2, str3) {
    let finalString = '';
    for (let i = 0; i < str1.length; i++) {
        finalString += str1[i] + str2[i] + str3[i];
    }
    return finalString;
}


console.log(addAllLetters('aa', 'bb', 'cc'))

// #3

function sumZero(sortedArray) {
    const array = []
    sortedArray.forEach(function(num) {
        if (sortedArray.includes(num * -1)) {
            array.push([num, num* -1]);
        };
    });
    return array[0];
}

console.log(sumZero([-7,-3,-2,-1,0,1,2,3,4,5,6]))

// #4

function countUniques(array) {
    let i = 0

    for (let j = 1; j <array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1
}

console.log(countUniques([-5, -4, -4, -3, -2, 0, 1, 2, 2, 2, 3, 4]))

