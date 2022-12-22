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
    const qualificationCollection = client
      .db("Nikahul-muslim")
      .collection("qualification");
    const askingCollection = client.db("Nikahul-muslim").collection("asking");
    const contactNumberCollection = client
      .db("Nikahul-muslim")
      .collection("contactNumber");

    app.put("/addName/:email", async (req, res) => {
      const email = req.params.email;
      const name = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: name,
      };
      const result = await nameCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/simpleData/:email", async (req, res) => {
      const email = req.params.email;
      const simpleData = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: simpleData,
      };
      const result = await simpleDataCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/address/:email", async (req, res) => {
      const email = req.params.email;
      const address = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: address,
      };
      const result = await addressCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/education/:email", async (req, res) => {
      const email = req.params.email;
      const education = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: education,
      };
      const result = await educationCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/familyDetails/:email", async (req, res) => {
      const email = req.params.email;
      const familyDetails = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: familyDetails,
      };
      const result = await familyDetailsCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/personalDocs/:email", async (req, res) => {
      const email = req.params.email;
      const personalDocs = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: personalDocs,
      };
      const result = await personalDocsCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/aboutWedding/:email", async (req, res) => {
      const email = req.params.email;
      const aboutWedding = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: aboutWedding,
      };
      const result = await aboutWeddingCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/etcDocs/:email", async (req, res) => {
      const email = req.params.email;
      const etcDocs = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: etcDocs,
      };
      const result = await etcDocsCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/qualification/:email", async (req, res) => {
      const email = req.params.email;
      const qualification = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: qualification,
      };
      const result = await qualificationCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/asking/:email", async (req, res) => {
      const email = req.params.email;
      const asking = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: asking,
      };
      const result = await askingCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
    });
    app.put("/contactNumber/:email", async (req, res) => {
      const email = req.params.email;
      const contactNumber = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updatedDoc = {
        $set: contactNumber,
      };
      const result = await contactNumberCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send({ result });
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
