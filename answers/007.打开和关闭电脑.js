class Computer extends Component {
    constructor(props){
      super(props);
      this.state = {
        status:'off',
      }
      this.toggleStatus = this.toggleStatus.bind(this);
    }
    
    toggleStatus(){
      this.setState({
        status:this.state.status === 'off'?'on':'off'
      });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.toggleStatus}>开关</button>
          <Screen showContent={this.state.status === 'on'?'显示器亮了':'显示器关了'}/>
        </div>
      )
    }
  }
  
  class Screen extends Component {
    render () {
      return (
        <div className='screen'>{this.props.showContent}</div>
      )
    }
  }
  Screen.defaultProps = {
    showContent:'无内容'
  }
  