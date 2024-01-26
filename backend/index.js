const express = require("express");
const cors = require('cors');
const { connectToMongoDb } = require("./src/config/connect");
const app = express();
const URL = require("./src/models/url");


const urlRouter = require("./src/routes/urlRouter");
const PORT = 3000;

connectToMongoDb("mongodb://127.0.0.1:27017/EncurtadorUrl").then(
  console.log("Mongodb connected")
);
app.use(cors());
app.use(express.json());

app.use("/url", urlRouter);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  console.log("Short ID:", shortId);

  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  console.log("Entry:", entry);

  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Servidor Rodando na porta: ${PORT}`);
});
