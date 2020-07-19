// getPostData 已经可以直接使用
// 小提示：本系统可以直接 async/await

class Post extends Component {
    constructor(props){
      super(props);
      this.state = {
        data:'',
        loading:true,
      }
      this.fetchDate = this.fetchDate.bind(this);
      this.fetchDate()
      
    }
    
    async fetchDate(){
      this.setState({
        loading:true,
      })
      const postContent = await getPostData();
      this.setState({
        loading:false,
        data:postContent,
      });
      
    }
    
    render () {
      return (
        <div>
          <div className='post-content'>{this.state.loading?'数据加载中...':this.state.data}</div>
          <button onClick={this.fetchDate}>刷新</button>
        </div>
      )
    }
  }