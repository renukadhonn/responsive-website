const mypromise = new Promise((resolve,rejeact) =>{
    setTimeout(() =>{
        const success = true;
        if(success){
            resolve("Data fetched successfully");
        }
        else{
            rejeact("Error :Unable to fetch data");

        }
    },2000);
})
mypromise
.then((res)=>{
    console.log(res);
})
.catch((err) => {
    console.error(err);
});