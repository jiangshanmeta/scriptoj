const plusFor = function(name){
    let count = 1;
    return function(){
        return `为${name}+${count++}s`;
    }
}