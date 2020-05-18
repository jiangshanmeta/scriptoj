/* drive 函数已经可以直接使用 */

const driveCustomers = (...fns) => {
    const result = [];
    Promise.all(fns.map((fn)=>{
      return new Promise((resolve)=>{
        fn((val)=>{
          result.push(val);
          resolve();
        })
      })
    })).then(()=>{
      drive(result)
    })
    
  }
  