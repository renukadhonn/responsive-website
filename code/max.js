let max = (num)=>{
    return num.reduce((acc,cur)=>
    {
        return acc > cur ? acc :cur
    },num)

}
console.log(max(1,2,75,35));