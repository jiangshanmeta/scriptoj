class Dog extends Component {
    constructor (props) {
      super(props)
      this.state = {
        isRunning:false,
        isBarking:false,
      };
      this.handleClick = this.handleClick.bind(this)
      this.stop = this.stop.bind(this);
    }
    
    handleClick(){
      this.bark();
      this.run();
      setTimeout(this.stop,20+Math.floor(Math.random()*31))
    }
    
    stop(){
      this.setState({
        isBarking:false,
        isRunning:false,
      })
    }
    
    bark () {
      this.setState({
        isBarking:true,
      })
    }
    
    run () {
      this.setState({
        isRunning:true,
      })
    }
   
    render () {
      return (<div onClick={this.handleClick}>DOG</div>)
    }
  }
  