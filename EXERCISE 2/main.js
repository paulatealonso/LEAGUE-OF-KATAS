

function removeEveryOther(arr){
    for (let i = 0; i < arr.length; i++) {
      if (arr !== arr.length[0]) {
        arr.splice(1, 2);
      }
    }
    return arr
}
  
console.log(removeEveryOther([2, 3, 4, 5]));


function removeEveryOther(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[0])
  }
  return newArr
}