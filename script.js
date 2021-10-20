//input =12,25,17,16,23,10,5,15,21,11
//output=12,25,11.5, 16,23, 4.5,5, 15,21, 5.5

// please read README.md file


const zigZag=(arr)=>{
    let output=[]
    for(let i=0; i<=arr.length; i++){                 //looping throough array
        if(i==0){                                     // first tree will go as it is
            output.push(arr[i])
        }else if(arr[i-1]<arr[i] && arr[i-2]<arr[i-1]){ // if 2nd and 3rd tree are consecutively taller
            let newTree = arr[i]-arr[i-1];             //triming for third tree
            if(newTree>arr[i-1]){                       //re checking if trimm tree is still taller than 2nd tree
                output.push(newTree-5)
            }else{
                output.push(newTree)                   //storing third trimmed tree
            }
        }else if(arr[i-1]<arr[i]){                     //condition for storing 2nd tree if taller
            output.push(arr[i])
        }else if(arr[i-1]>arr[i]){                    // condition for 2nd tree if its shorter than 1st
            output.push(arr[i]) 
        }
    }
    return output;
}
const test=[12,25,17,16,23,10,5,15,21,11]
const test2=[8,6,16,10,15,20,13,14,25,21]
//output for test 2= 8,  6, 16, 10, 15,5, 13, 14, 11, 21
console.log(zigZag(test2))
//i hope you have read the readme file for better understanding of my doing
