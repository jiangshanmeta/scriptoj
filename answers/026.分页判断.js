const getPages = (total, itemsPerPage) => {
    if(itemsPerPage === 0){
      return 0;
    }
    return Math.ceil(total/itemsPerPage)
  }