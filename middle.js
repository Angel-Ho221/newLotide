
// implement a function that returns the middle element
const middle = function(array) {
  let midpoint = null;
  let midElements = [];
  if (array.length <= 2) {  
    // if there's an array that has only 1 or 2 elements, no middle, then return an empty array
    return midElements;
  } else {
    
      // console.log(array[i])
      if (array.length % 2 === 0) {
        midpoint = array.length / 2;
        let midIndex = midpoint - 1;
        let midIndex2 = midpoint;
        midElements.push(array[midIndex], array[midIndex2]); 
        return midElements
   // if there's an array with even number of elements, return the middle two elements       
        
      } else if (array.length % 2 === 1) {
        midpoint = Math.ceil(array.length / 2);
        let midIndex = midpoint - 1;
        midElements.push(array[midIndex]);
        return midElements;
 // if there's an array with odd number of elements, return the middle element
      }
    
  }
}

module.exports = middle;
