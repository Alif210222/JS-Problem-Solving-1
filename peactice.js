//problem -1 
 
const height = [1,2,3,4,5,6,3,7];

function getMax (numbers) {
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num ;
        }   
    }
    return max ;

}

const max = getMax(height);
console.log("Max value is ",max)

