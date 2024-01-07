const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// FOR EACH:

myArray.forEach((element, index) => {
    console.log(index, element)
});

myArray.reverse().forEach((element, index) => {
    console.log(index, element)
});



/* // FOR PADRÃO:

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

// FOR OFF:

for (let item of myArray) {
    
    console.log(item)
} */