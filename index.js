// problem 1    ===>  Reverse a String

const world = "hello";   // input string from user 

function reverse(str){     // decl. the function
    let reverse = "";

    for(let i = str.length - 1 ; i >= 0 ; i-- ){       // execute the loop for print whole string reversed
         reverse += str[i];                            // push one by one value in reverse variable 
        }
        return reverse;

}
const reversed =  reverse(world);     // call the function

console.log(reversed)    // ===>> olleh





// problem -2    ====>>>> Count Vowels in a String

const input = "Programming";
const vowels = ["a","e","i","o","u"];

function countVowel(word){                  // write function for this problem 
    let count = 0 ;

    for (let char of word) {                // using for...of  loop  for execute this operation on the input  
    char = char.toLowerCase();              // convert all the letter to lowercase

    if (vowels.includes(char)) {            // check one by one  and cont vowel  how many times in this input .  
      count++;
    }
  }
    return count;

}
 const count = countVowel(input)              // call this function and give the input value 
 console.log("Total number of vowel in this word : ",count)




// problem - 3    ==>>>> Check for Palindrome
function Palindrome(word){

     word = word.toLowerCase();

     let result = "";

    for(let i = 0 ; i < word.length/2 ; i++){
        if(word[i] != word[word.length - 1 - i]){
            return "not palindrome";
        }
       
    }
    return "palindrome"; 

}
 console.log(Palindrome("madam"))
 console.log(Palindrome("lucky"))





 // problem - 4  ====>>>  Find the Maximum Number of this array

 const numbers = [23,54,12,54,67,876]

function getMax(numbers){                  // call the function 
      let max = numbers[0];                // assume temporary value 

      for(let num of numbers){             // using loop for get the array index value
        if(num > max){                     // compare between temp max & new number 
            max= num;                      // set new value 
        }
      }
      return max;
}

console.log(getMax(numbers))




//problem-5    ==>>>>  Remove duplicate value from this array

const arr = [1,2,2,3,4,4,5,8,9,9];

function newArray(numbers){                     // write a function for this problem 
    const uniqueArray = [];                     // lets assume a empty array

    for(let num of numbers){                    // write a loop for get all the array value one by one 


         if(!uniqueArray.includes(num)){        // compare ....this num is already exsit or not 
            uniqueArray.push(num);              // if not exsist the push this num in new array 
         }
    }
     return uniqueArray;

}

const result = newArray(arr)
console.log(result)





//problem 6    ===>> sum of all number 

const number = [4,3,9,6,5,53]

function sumAll (numbers){
       let sum = 0 ;

         for(let num of numbers){             // get array value one by one 
             sum = sum + num;                // sum with new num number 
         }
         return sum;
}

const res = sumAll(number)
console.log(res)




// problem 7  ===>> find even number  

const array = [2,3,4,5,6,7,8,9,10]

function findEven(numbers){                         // write a function for this problem 
         
    const evenArray = [];
        
for(let num of numbers){                             //  using loop for get all the array value one by one 

    if(num % 2 == 0){                                // check the value is even or odd 
        evenArray.push(num);                          // if value is even then push the value in new array 
    }
}
return evenArray;

}

const newArray = (findEven(array))
console.log(newArray)




// problem 8  =====> capitalize first latter of each letter 

   function capitalize(sentence){

         let words = sentence.split(" ");                         // devide each word by space 
         let result = "";

         for(let i=0; i<words.length ; i++){
            let word = words[i];                                   // declear a variable and store words by index

             if (word.length === 0) continue;                      // if  sentence have any extra space then ignore it 

            let capitalWord = word[0].toUpperCase() + word.slice(1) ;      // capitalize the first latter ans add others letter 
            result += capitalWord + " ";                                // add new modifide word in the new sentence 


         }
         return result ;
            
   }

   console.log(capitalize("i love bug "))




   // problem 9  ====>> find factorial; 

const a = 5 ;

function factorial(number){

    let multiple = 1 ;
   
    for( i = 1 ; i <= number; i++){

        multiple  *= i;
        
    } 
    return multiple;

}
console.log(factorial(a))





// problem -10    ===>> pingPong challenge  

const value = 20;

function pingPong(number){

      const array = [];

       for(let i = 1 ; i <= number ; i++){
                 
           if(i%3 == 0 && i%5 == 0 ){
                array.push("pingPong")
            }
           else if(i%3==0){
            array.push("ping")
          }
            else if(i%5==0){
            array.push("pong")
          }
          else{
            array.push(i)
          } 
       
         
       }
       return array;

}

 const result = (pingPong(value))
console.log(result)