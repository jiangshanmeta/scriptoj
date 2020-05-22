class Box {
    constructor(list){
      this.list = list;
    }
    [Symbol.iterator](){
      let index = 0;
      const _this = this;
      return {
        next(){
          if(index<_this.list.length){
            return {
              done:false,
              value:_this.list[index++],
            }
          }else{
            return {
              done:true,
            }
          }
        }
      }
    }
  }
  