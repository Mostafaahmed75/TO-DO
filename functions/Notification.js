const notifier = require('node-notifier');
const Todo=require('../models/Todo')
var isEmpty = require('is-empty');





 function  SendNotification(Data,id){
  hours=!isEmpty(Data.hours)? Data.hours: 0;
  minutes=!isEmpty(Data.minutes)? Data.minutes: 0;
  seconds=!isEmpty(Data.seconds)?Data.seconds:0;
  if ( hours > 0  ||  minutes>0 || seconds>0) {
    if (id){
    const {timeobj}= Todo.find({_id:id});
    if({timeobj}) clearTimeout({timeobj});
    }
   timeobjout=setTimeout(notify,calculate_millie_secondes(hours,minutes,seconds));
return timeobjout;
}
}

function notify(){
  notifier.notify({
      title: 'My notification',
      message: 'Hello, there!',
      time: 2000,
      sound: true
    });
  
  }

  function calculate_millie_secondes(hours,minutes,seconds){
    console.log(seconds);
    return (hours*60*60+minutes*60+seconds)*1000;
    }
 module.exports = SendNotification;