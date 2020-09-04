import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";

//app config
const app = express();
const port = process.env.PORT || 9000;

//DB config
const connection_url =
  "mongodb+srv://admin:yV8jtPJucL6HY9K5@cluster0.5g2u8.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-control-Allow-Origin", "*"),
    res.setHeader("Access-control-Allow-Headers", "*"),
    next();
});

//app endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

//Endpoint to get all the available videos in the Collection
app.get("/v1/posts", (req, res) => {
  res.status(200).send(Data);
});

//Endpoint to get all the available videos in the Collection from MongoDB
app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Endpoint to put the video into the Collection in MongoDB
app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
