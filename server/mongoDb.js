const { MongoClient } = require("mongodb");
async function connectDB() {
  let codeschema = null;
  if (codeschema === null) {
    const client = new MongoClient("mongodb://localhost:27017");
    await client
      .connect()
      .then(console.log("MongoDb connected"))
      .catch((err) => {
        console.log("error while connecting mongo", err);
      });
    const db = client.db("Gmeet");
    codeschema = db.collection("meetingcodes");
    return codeschema;
  }
  else return codeschema
}
const checkCode=(meetingcode)=>{
    const codes=connectDB()
    if(codes.length>0){
        codes.forEach((code) => {
            if(meetingcode==code)
                {
                    createMeetingId()
                }
                else{
                    return meetingcode
                }
        });
    }
 }

module.exports = connectDB;
