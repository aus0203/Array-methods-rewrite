//Array methods

/*--------------------------------------------------------------------------------------------------------*/

//.map 
//creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 2, 3, 4];

console.log(array1.map(x => x * 2))

//.map rewrite
function austinMap(array, austinFunction) {

    for (i = 0; i < array.length; i++) {
        array[i] = austinFunction(array[i]);
    }
}
austinMap(array1, x => x * 2);
console.log(array1);

/*--------------------------------------------------------------------------------------------------------*/

//.push 
//add new items to the end of an array.
const array2 = [1, 2, 3, 4];
/*array1.push(5);
console.log(array1)*/

//.push rewrite

function austinPush(array, x) {
    array[array.length] = x; // = means assign, == means equals
}

austinPush(array2, 5);
console.log(array2);

/*--------------------------------------------------------------------------------------------------------*/

//.pop
//removes (pops) the last element of an array.
const array3 = [1, 2, 3, 4, 5];

//.pop rewrite
function austinPop(array) {
    
    const lastItem = array[array.length-1];
    array.length = array.length - 1;
    return lastItem;
    
}

austinPop(array3);
console.log(array3)

/*--------------------------------------------------------------------------------------------------------*/

//.concat
//creates a new array by merging (concatenating) existing arrays.
const array4 = [2,3,4]
const array5 = [5,6]

const mergeArray = array4.concat(array5);
console.log(mergeArray);

//.concat rewrite

function austinConcat (array1, array2){

    //return [ ...array1, ...array2]; ... spread everything inside an array
    let newArray = [];
    for (i=0;i < array1.length;i++){
        newArray[newArray.length] = array1[i]
    }
    for (i=0;i < array2.length;i++){
        newArray[newArray.length] = array2[i]
    }
    return newArray
}

const array6 = austinConcat(array4,array5);
console.log(array6);

/*--------------------------------------------------------------------------------------------------------*/

//.indexOf
//returns the position of the first occurrence of a value in a string.

let slogan = "Welcome to my channel!"
//.indexOf rewrite
function austinIndexOf(text, x, startFrom = 0){   
    let textIndex = -1;
    let valueIndex = 0;
    for (i=startFrom;i<text.length;i++){

        if (text[i] == x[valueIndex]){
            if (textIndex == -1){
                textIndex = i
            }

            valueIndex++

            if(valueIndex == x.length){
                return textIndex;
            }
        } 

        else {
            textIndex = -1
        }


    }

    return textIndex;
}
const findIndex = austinIndexOf(slogan, "to", 6);
console.log(findIndex);

/*--------------------------------------------------------------------------------------------------------*/

//.findIndex
//executes a function for each array element.
const array7 = [3, 12, 16, 20]

//.findIndex rewrite

function austinFindIndex (array, austinFunction){

    for (i = 0; i < array.length; i++) {
        if (austinFunction(array[i])){
            return i
        }
    }

    return -1
}

console.log (austinFindIndex(array7, x => x > 10))

/*--------------------------------------------------------------------------------------------------------*/

//.forEach
//calls a function for each element in an array.

const array8 = ["apple", "orange", "lemon"]

//.forEach rewrite
function austinForEach (array, austinFunction){
    for(i=0; i<array.length; i++){
        austinFunction(array[i])
    }
}

function iLove(item){
    console.log("I love " + item +".")
}

austinForEach(array8, iLove);

/*--------------------------------------------------------------------------------------------------------*/

