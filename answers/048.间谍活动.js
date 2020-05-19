const spy = (fn) => {
    const newFn = function(...args){
      const result = fn.apply(this,args);
      newFn.calls.push({
        args,
        result,
      });
    }
    newFn.calls = [];
    return newFn;
  }