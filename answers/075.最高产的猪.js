const findMostProductivePigChildrenCount = (dom) => {
    const result = [];
    dfs(dom,result,0);
    return result;
  }
  
  function dfs(dom,result,level){
    const children = dom.children;
    const L = children.length;
    if(level === result.length){
      result.push(0);
    }
    result[level] = Math.max(result[level],L);
    level++;
    for(let i=0;i<L;i++){
      dfs(children[i],result,level);
    }
  }