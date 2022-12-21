const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ewm5nbc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    console.log("db connected");
    const nameCollection = client.db("Nikahul-muslim").collection("name");
    const simpleDataCollection = client
      .db("Nikahul-muslim")
      .collection("simple-data");
    const addressCollection = client.db("Nikahul-muslim").collection("address");
    const educationCollection = client
      .db("Nikahul-muslim")
      .collection("education");
    const familyDetailsCollection = client
      .db("Nikahul-muslim")
      .collection("familyDetails");
    const personalDocsCollection = client
      .db("Nikahul-muslim")
      .collection("personalDocs");
    const aboutWeddingCollection = client
      .db("Nikahul-muslim")
      .collection("aboutWedding");
    const etcDocsCollection = client.db("Nikahul-muslim").collection("etcDocs");

    app.post("/addName", async (req, res) => {
      const name = req.body;
      const result = await nameCollection.insertOne(name);
      res.json(result);
    });
    app.post("/simpleData", async (req, res) => {
      const simpleData = req.body;
      const result = await simpleDataCollection.insertOne(simpleData);
      res.json(result);
    });
    app.post("/address", async (req, res) => {
      const address = req.body;
      const result = await addressCollection.insertOne(address);
      res.json(result);
    });
    app.post("/education", async (req, res) => {
      const education = req.body;
      const result = await educationCollection.insertOne(education);
      res.json(result);
    });
    app.post("/familyDetails", async (req, res) => {
      const familyDetails = req.body;
      const result = await familyDetailsCollection.insertOne(familyDetails);
      res.json(result);
    });
    app.post("/personalDocs", async (req, res) => {
      const personalDocs = req.body;
      const result = await personalDocsCollection.insertOne(personalDocs);
      res.json(result);
    });
    app.post("/aboutWedding", async (req, res) => {
      const aboutWedding = req.body;
      const result = await aboutWeddingCollection.insertOne(aboutWedding);
      res.json(result);
    });
    app.post("/etcDocs", async (req, res) => {
      const etcDocs = req.body;
      const result = await etcDocsCollection.insertOne(etcDocs);
      res.json(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello From Nikahul Muslim");
});

app.listen(port, () => {
  console.log(`Nikahul Muslim listening on port ${port}`);
});
