const exchange = (a, b) => {
    const aProto = Object.getPrototypeOf(a);
    Object.setPrototypeOf(a,Object.getPrototypeOf(b))
    Object.setPrototypeOf(b,aProto)
  }