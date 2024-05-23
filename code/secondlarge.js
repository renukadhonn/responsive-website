
 const input1 = [4,6,9,1,12,14];
const input2 = [2,4,6,7];

function secondlarge(arr){
    const desc = arr.sort((a,b) => b-a);
    return desc[1];

}
console.log(secondlarge(input1));
console.log(secondlarge(input2));