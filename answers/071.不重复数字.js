const uniqueNums = (n) => {
    const list = new Array(31);
    for(let i=0;i<n;i++){
      list[i] = true;
    }
    shuffle(list);
    
    const result = [];
    for(let i=0;i<31;i++){
      list[i] && result.push(i+2);  
    }
    shuffle(result);
    return result;
  }
  
  function shuffle (list) {
      for (let i = 0; i < list.length; i++) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          const tmp = list[randomIndex];
          list[randomIndex] = list[i];
          list[i] = tmp;
      }
  }