// Create a script with a function named lowerCaseWords that takes a mixed array as input.
// The function will do the following.
//    - return a promise that is resolved or rejected
//    - filter the non-strings and lower case the remaining words

const mixedArray = ["Pizza", 10, true, 25, false, "Wings"];

const lowerCaseWords = (mixedArray) =>
  new Promise((resolve, reject) => {
    if (Array.isArray(mixedArray))
      resolve(
        mixedArray.filter((arr) => isNaN(arr)).map((word) => word.toLowerCase())
      );
    else reject("Input is invalid");
  });

lowerCaseWords(mixedArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
