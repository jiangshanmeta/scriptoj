class Dog extends Component {
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
      this.bark();
      this.run();
    }
    
    bark () {
      console.log('bark')
    }
    
    run () {
      console.log('run')
    }
    
    render () {
      return (<div onClick={this.handleClick}>DOG</div>)
    }
  }