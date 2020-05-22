const clz32 = (num) => {
    num = +num;
    if(Number.isNaN(num)){
      return 32;
    }
    num >>>= 0;
    let result = 32;
    while(num){
      num >>>= 1;
      result--;
    }
    return result;
  }
  