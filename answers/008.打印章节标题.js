class Lesson extends Component {
  
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
      console.log(`${this.props.index} - ${this.props.lesson.title}`)
    }
    
    render(){
      return (
        <div onClick={this.handleClick}>
          <h1>{this.props.lesson.title}</h1>
          <p>{this.props.lesson.description}</p>
        </div>
      )
    }
  }
  
  class LessonsList extends Component {
    render(){
      return (
        <div>  
          {this.props.lessons.map((lesson,index)=>{
            return (<Lesson
              key={index}
              index={index}
              lesson={lesson}
            />)
          })}
        </div>
      )
    }
  }