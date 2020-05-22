const convertSymbolToNormalStr = (obj)=>{
    const keys = Object.getOwnPropertySymbols(obj);
    for(let i=0;i<keys.length;i++){
      const keyStr = keys[i].toString().slice(7,-1);
      obj[keyStr] = obj[keys[i]];
      delete obj[keys[i]]
    }
    return obj;
  }