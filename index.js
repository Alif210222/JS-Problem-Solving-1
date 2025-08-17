// problem -1 
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

// problem -2 