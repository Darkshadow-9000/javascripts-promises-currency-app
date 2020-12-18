const CleanTheRoom= new Promise((resolve,reject)=>{
    const isClean=false;
    if(isClean){
        resolve('Clean');
    }
    else{
        reject('not clean');
    }
});
CleanTheRoom.then((fromResolve)=>{
console.log("The room is" + fromResolve);
}).catch((fromReject)=>{
console.log('The room is' + fromReject);
});