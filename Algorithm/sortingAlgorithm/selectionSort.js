// selection sort
// O(N^2)
const selectionSort = (arr) => {
      for(let i = 0; i < arr.length; i++){
          for(let j = i + 1; j < arr.length; j++){
              if(arr[j] < arr[i]){
                 let min = arr[j]
                 arr[j] = arr[i]
                 arr[i] = min
              }
          }
      }
      return arr
}