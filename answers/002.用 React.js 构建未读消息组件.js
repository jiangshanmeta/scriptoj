class Notification extends Component {
    render () {
      const count = getNotificationsCount();
      if(count>0){
        return (<span>有({count})条未读消息</span>)
      }else{
        return (<span>没有未读消息</span>)
      }
    }
}