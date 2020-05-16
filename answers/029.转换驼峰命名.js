const toCamelCaseVar = (variable) => /* TODO */
{
  return variable.replace(/_+[a-zA-Z]/g,(m, i) => {
  	if(i) return (m.match(/[a-zA-Z]/)[0].toUpperCase());
  	else return m;
  })
}