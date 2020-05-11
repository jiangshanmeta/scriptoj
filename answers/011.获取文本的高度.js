class Post extends Component {
    constructor(props){
      super(props);
      this.getHeight = this.getHeight.bind(this);
    }
    
    getHeight(){
      const dom = this.p;
      console.log(dom.clientHeight);
    }
    
    render () {
      return (<p onClick={this.getHeight} ref={(p)=>this.p=p}>{this.props.content}</p>)
    }
  }