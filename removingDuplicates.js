// Removing duplicates of an array and returning an array of only unique elements
let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]

function uniqueArray (array) {
  let hashmap = {};
  let unique = [];

  for (let i = 0; i < array.length; i++) {
     // If key returns undefined (unique), it is evaluated as false.

     if(!hashmap.hasOwnProperty(array[i])) {
           hashmap[array[i]] = 1;
           unique.push(array[i]);
         }
       }

       return unique;
     }

     console.log(uniqueArray(array));
