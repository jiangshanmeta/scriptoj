const tomy = new Proxy({},{
    get(){
      console.log("Don't Touch Me.")
    },
    set(){
      console.log("Don't Touch Me.")
    },
    deleteProperty(){
      console.log("Don't Touch Me.")
    }
  })