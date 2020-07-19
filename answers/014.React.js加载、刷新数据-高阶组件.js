// getData(url) 已经可以直接使用
// 本站的环境都可以使用 async/await

const loadAndRefresh = function(url){
    return function(C){
      return class H extends Component{
        constructor(props){
          super(props);
          this.state = {
            loading:true,
            content:''
          }
          this.refresh = this.refresh.bind(this);
          this.refresh();
        }
        
        async refresh(){
          this.setState({
            loading:true,
          });
          const content = await getData(url);
          this.setState({
            loading:false,
            content,
          });
          
        }
        
        render(){
          return (<C  content={this.state.loading?'数据加载中...':this.state.content} refresh={this.refresh} {...this.props}/>)
        }
        
        
      }
    }
  }