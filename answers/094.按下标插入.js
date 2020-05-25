const injectSections = (items, sections) => {
    sections.sort((a,b)=>b.index-a.index);
    for(let i=0;i<sections.length;i++){
      items.splice(sections[i].index,0,sections[i].content);
    }
    return items
  }