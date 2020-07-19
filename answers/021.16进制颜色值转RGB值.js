const map = {
    0:0,
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
    a:10,
    b:11,
    c:12,
    d:13,
    e:14,
    f:15,
  }
  
  const hexToRGB = (hex) => {
    if(!hex){
      return null;
    }
    if(hex.length !== 4 && hex.length !== 7){
      return null;
    }
    hex = hex.toLowerCase();
    for(let i=1;i<hex.length;i++){
      if(! (hex[i] in map)   ){
        return null
      }
    }
    if(hex.length === 4){
      return `rgb(${map[hex[1]]*17}, ${map[hex[2]]*17}, ${map[hex[3]]*17})`;
    }else{
      const a = map[hex[1]]*16+map[hex[2]];
      const b = map[hex[3]]*16+map[hex[4]];
      const c = map[hex[5]]*16+map[hex[6]];
      return `rgb(${a}, ${b}, ${c})`
    }
  }