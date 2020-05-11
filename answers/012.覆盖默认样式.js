const getDefaultStyledPost = (defaultStyle) => {
    return function({style={}}){
      const realStyle = Object.assign({},defaultStyle,style)
      return (<p style={realStyle}></p>)
    }
  }