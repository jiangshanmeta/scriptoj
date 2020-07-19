Map.prototype.filterKeys = function(fn){
    const newMap = new Map();
    for (let [key, value] of this) {
      if(fn(key)){
        newMap.set(key,value)
      }
    }
    return newMap;
  }
  Map.prototype.filterValues = function(fn){
    const newMap = new Map();
    for (let [key, value] of this) {
      if(fn(value)){
        newMap.set(key,value)
      }
    }
    return newMap;
  }