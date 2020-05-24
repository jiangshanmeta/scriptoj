const singletonify = (OriginalClass) => {
    class ChildClass extends OriginalClass{
      static instance = null;
      constructor(props){
        if(ChildClass.instance){
          return ChildClass.instance
        }
        super(props);
        ChildClass.instance = this;
      }
    }
    
    return ChildClass;
  }