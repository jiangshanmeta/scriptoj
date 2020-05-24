const flikerProps = (obj) => {
    keys = Object.getOwnPropertyNames(obj);
    keys.forEach((prop)=>{
      const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      const newDescriptor = {...descriptor}
      newDescriptor.enumerable = !descriptor.enumerable;
      Object.defineProperty(obj,prop,newDescriptor)
      
    });
  }
  