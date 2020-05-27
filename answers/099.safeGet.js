const safeGet = (data, path) => {
    path = path.split('.');
    for(let i=0;i<path.length;i++){
      data = data[path[i]];
      if(data === undefined){
        return undefined;
      }
    }
    return data;
}