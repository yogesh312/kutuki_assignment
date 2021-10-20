//input =12,25,17,16,23,10,5,15,21,11
//output=12,25,11.5, 16,23, 4.5,5, 15,21, 5.5

// please read README.md file


const zigZag=(arr)=>{
    
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = (sum / arr.length) || 0; // here i have taken the average of all the values/tree height present in the array
    // console.log(avg)
    let output=[]
    for(let i=0; i<=arr.length; i++){ //looping through the array
        if(i==0){                     //first index will be stored without any changes
            output.push(arr[i])
        }if(arr[i-1]<arr[i]){  
            
            output.push(arr[i])
        }else if(arr[i-1]<arr[i] || arr[i-2]<arr[i-1]){ // only if three trees are consecutively increasing
            let newTree = arr[i]-avg+10;      // deducting average and adding idol height of tree
            output.push(newTree)

        }else if(arr[i-1]>arr[i]){ 
            output.push(arr[i]) 
           
        }

    }
    return output;
    
}
const test=[12,25,17,16,23,10,5,15,21,11]
console.log(zigZag(test))
//i hope you have read the readme file for better understanding of my doing
