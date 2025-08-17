//problem -1 
 
// const height = [1,2,3,4,5,6,3,7];

// function getMax (numbers) {
//     let max = numbers[0];
//     for(const num of numbers){
//         if(num > max){
//             max = num ;
//         }   
//     }
//     return max ;

// }

// const max = getMax(height);
// console.log("Max value is ",max)


// problem 1 

const world = "hello";

function reverse(str){

    let reverse = "";

    for(let i = str.length - 1 ; i >= 0 ; i-- ){
        reverse += str[i];
    }
    return reverse;

}

const reversed =  reverse(world);

console.log(reversed)


