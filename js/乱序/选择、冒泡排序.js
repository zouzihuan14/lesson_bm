let arr1=[1,2,7,3,3,4,5]
// console.log(arr.sort((a,b) => a-b))
function selection_sort(arr)
{
    let i,j;
    let temp;

    for (i = 0; i < arr.length-1; i++)
        for (j = i + 1; j < arr.length; j++)
            if (arr[i] < arr[j])
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
return arr;
}
console.log(selection_sort(arr1)) 

function bubblelSort(arr){
    let length=arr.length;
    for(let i=0;i<length;i++){
        for(let j=0 ;j<length-i-1;j++){
            if(arr[j]>arr[j+1])
            {
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubblelSort(arr1)) 

// Math.random()  [0 ,1 ) 左闭右开

function shuffle(arr){
    return arr.sort(()=>Math.random()-0.5)
}