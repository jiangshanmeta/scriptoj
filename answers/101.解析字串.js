const extractStr = (str) => {
    const result = [];
    let start = false;
    let startIndex = -1;
    for(let i=0;i<str.length;i++){
      if(str[i] === ':'){
        start = true;
        startIndex = i;
      }else if(str[i] === '.' && start){
  
          result.push(str.slice(startIndex+1,i));
          start = false;
      }
    }
    return result;
  }