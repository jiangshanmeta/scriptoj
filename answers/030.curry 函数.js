const curry = (fn) => {
    function helper(...args){
      if(args.length === fn.length){
        return fn(...args);
      }else{
        return helper.bind(null,...args);
      }
    }
    return helper;
  }