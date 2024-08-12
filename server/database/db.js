const {MongoClient} =require("mongodb");
require("dotenv").config();
const url="mongodb+srv://donation:donation@donation.2fex8.mongodb.net/?retryWrites=true&w=majority&appName=Donation"

const client =new MongoClient(url);
const dbName="Donation";
let db;

async function main() {
    //connecting with mongodb atlas
    await client.connect();
    db = client.db(dbName); 
}
main()
.then((value)=>{
    db=client.db(dbName)
    console.log("MongoDB Connected..");
})
.catch((error)=>{console.log(error)});

module.exports={client, db};