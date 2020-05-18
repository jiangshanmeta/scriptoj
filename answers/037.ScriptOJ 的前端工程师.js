/* socket 对象已经可以直接使用 */

function initNotification () {
    document.title = "ScriptOJ";
    socket.on('new notification',function(n){
      document.title = `（${n} 条消息）ScriptOJ`
    })
    
    document.getElementById("mark-read").addEventListener("click",function(){
      socket.emit('mark all read');
      document.title = 'ScriptOJ';
    })
  }
  