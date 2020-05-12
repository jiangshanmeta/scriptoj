function renderFatCats (cats) {
    cats.sort((a,b)=>b.weight-a.weight);
    document.getElementById('cats-list').innerHTML = cats.map((cat)=>{
      return `<div class='cat'><span class='cat-name'>${cat.name}</span><span class='cat-weight'>${cat.weight}</span></div>`
    }).join('');
  }