const centerPad = (str, len, pad) => {
    len -= str.length;
    if(len <= 0){
      return str;
    }
    const restChar = len%(pad.length*2);
    const count = (len-restChar)/(pad.length*2);
  
    const prefix = restChar >>> 1;
    const suffix = restChar - prefix;
    console.log(restChar,prefix,suffix);
    
    return `${pad.repeat(count)}${pad.slice(0,prefix)}${str}${pad.repeat(count)}${pad.slice(0,suffix)}`;
  }
  