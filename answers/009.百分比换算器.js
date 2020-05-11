class Input extends Component {
    render () {
      return (
        <div>
          <input type='number' onChange={this.props.onChange} value={this.props.value}/>
        </div>
      )
    }
  }
  
  class PercentageShower extends Component {
    render () {
      return (
        <div>{(this.props.value*100).toFixed(2)}%</div>
      )
    }
  }
  
  class PercentageApp extends Component {
    constructor(props){
      super(props)
      this.state = {
        value:0,
      }  
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
      this.setState({
        value:+e.target.value,
      })
    }
    
    render () {
      return (
        <div>
          <Input value={this.state.value} onChange={this.handleChange}/>
          <PercentageShower value={this.state.value}/>
        </div>
      )
    }
  }
  