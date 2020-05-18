class EventEmitter {
    constructor(){
      this.events = {};
    }
    on(eventName,func){
      if(!this.events[eventName]){
        this.events[eventName] = []
      }
      this.events[eventName].push(func);
    }
    emit(eventName,...args){
      const fns = this.events[eventName];
      if(!fns){
        return;
      }
      fns.forEach((fn)=>{
        fn(...args);
      })
    }
    off(eventName,fn){
      const fns = this.events[eventName];
      if(!fns){
        return;
      }
      for(let i=fns.length-1;i>-1;i--){
        if(fns[i] === fn){
          fns.splice(i,1);
          break;
        }
      }
      
    }
    
    
  }
  