const proposeToMissHan = (isOK) => {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(isOK){
          resolve('ok');
        }else{
          reject('no')
        }
      },20+Math.floor(Math.random()*31));
    })
  }