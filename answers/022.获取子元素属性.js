const getChildAttributes = (el,attr)=>{
    const children = el.children;
    const result = [];
    const L = children.length;
    for(let i=0;i<L;i++){
      result[i] = children[i].getAttribute(attr);
    }
    return result;
}
  