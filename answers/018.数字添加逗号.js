function commafy (num) {
    /* TODO */
    let prefix = '';
    if(num<0){
        prefix = '-';
        num = -num;
    }
    const numStr = num.toString();
    const dotIndex = numStr.indexOf('.');
    const suffix = dotIndex !== -1? numStr.slice(dotIndex):'';
    let index = dotIndex === -1?numStr.length-1:dotIndex-1;
    const result = [];
    while(index>-1){
      let count = 0;
      const stack = [];
      while(count<3 && index>-1){
        stack.push(numStr[index--]);
        count++;
      }
      result.push(stack.reverse().join(''));
    }
    return `${prefix}${result.reverse().join(',')}${suffix}`;
}