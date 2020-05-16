const parseData = ({rows,metaData}) => {
    metaData = metaData.map(item=>item.name)
    
    return rows.map((recordList)=>{
      return metaData.reduce((obj,field,index)=>{
        obj[field] = recordList[index];
        return obj;
      },{});
    });
  }
  