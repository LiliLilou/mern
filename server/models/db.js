/* const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo; */

//druga varijanta

/* const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/todolist', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, err => {
    if(err) console.log(`Error in DB Connection ${err}`)
    console.log('MongoDB Connection Succeeded')
}) */


const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://mongo:dongo@cluster0.hzj0ftf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb://root:example@localhost"


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
