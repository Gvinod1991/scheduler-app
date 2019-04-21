Schema

User Schema
  {
      username:String,(Email)
      password:String
      mobile:String
  }

Task Schema
{
    taskName:String
    taskDescription:text,
    subTask:{
        subTaskName:String,
        dueDate:Date,
        status:String(Completed or pending)
    }
    dueDate:Date,
    taskType:String(oneTime or followup)
    status:String(Completed or pending)
    userName:String
    Priority:Number
}

Reminder Schema
{
    taskReferenceID:String,
    reminderMedium:String(Email,Message,Notificaion,Or WhatsApp)
    reminderTime:['Daily','Before 1 hour','Weekly']
}

taskFollowup
{
    taskReferenceId:String,
    followupMessage:text,
    progressStatus:String(Pending,OntheWay)
}
