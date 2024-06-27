const {connectDB}=require('./mongoDb')
const createMeetingId=()=>{
    let meetingcode=Math.floor(Math.random()*100000000)
    const code=checkCode(meetingcode)
    return code;
    // if(code!==null){
    // }
}
