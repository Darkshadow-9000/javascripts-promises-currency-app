const ConvertToRs=(dollar)=>{
    if(typeof dollar=="number")
    {
        return dollar*73.5;
    }
    else{
        throw Error("Amount needs to be a number and a not a string value");
    }
}
try {
    const MyValue=ConvertToRs('twenty-five');
     console.log(MyValue);

} catch (e) {
    console.log(e);
    
}
console.log("Please insert the correct format of currency");


