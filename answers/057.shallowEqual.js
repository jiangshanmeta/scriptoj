const shallowEqual = (x, y) => {
    if(Object.is(x,y)){
      return true;
    }
    if(typeof x === 'object' && typeof y === 'object'){
      if(!x || !y){
        return false;
      }
      const keysX = Object.keys(x);
      const keysY = Object.keys(y);
      if(keysX.length !== keysY.length){
        return false;
      }
      for(let i=0;i<keysX.length;i++){
        if(keysX[i] !== keysY[i]){
          return false;
        }
        if(!Object.is(x[keysX[i]],y[keysY[i]]   )   ){
          return false;
        }
      }
      return true;
    }
    return false;
  }