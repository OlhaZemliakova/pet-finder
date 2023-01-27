const express = require("express");
const axios = require("axios");

const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const baseUrl = "https://api.petfinder.com/v2";
const client_id = "hO3yRXLJSj9tpFXs5oucIojqJjB9wyRcpYhJUlcByNXAuHT3Jl";
const client_secret = "AdjGvwVAQhoSLZuOe28h4fyvNBQSKWLCPTbcKiY0";

app.get("/", async (req, res) => {
  const token = await axios.post(
    `${baseUrl}/oauth2/token`,
    {
      grant_type: "client_credentials",
      client_id: client_id,
      client_secret: client_secret,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  let animals = await axios(`${baseUrl}/animals`, {
    params: req.query,
    headers: {
      Authorization: `Bearer ${token.data.access_token}`,
    },
  });

  res.send(animals.data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
