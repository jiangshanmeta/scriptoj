const compose = (...fns) => {
    return function(val){
        for(let i=fns.length-1;i>-1;i--){
            val = fns[i](val);
        }
        return val;
    }
}