const getPageTags = ()=>{
    const doms = Array.from(document.getElementsByTagName("*"));
    const tags = doms.map(item=>item.tagName);
    return [...new Set(tags)]
  }