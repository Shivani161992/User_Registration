var arr = [1, 0 , 2, 0, 3];
const move_zeros = arr => {
    var idx= 0;
    var curr_idx=0;
    while (curr_idx < arr.length){
        if (arr[curr_idx] != 0){
            arr[idx]= arr[curr_idx]
            idx +=1;      
        }
        curr_idx +=1;
    }

    while (idx < arr.length){
        arr[idx]=0;
        idx +=1;   
     }

    return arr;

}

console.log(move_zeros(arr));

