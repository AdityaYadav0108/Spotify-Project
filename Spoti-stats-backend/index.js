const {
  generateRandomString,
} = require("../Spoti-stats-backend/helpers/helpers");

const dotenv = require("dotenv").config();
const cors = require("cors");
const querystring = require("querystring");
const express = require("express");
const app = express();

const client_id = "b6fd3365e8b64b14ade629687253d338";

app.use(express.json());
app.use(
  cors({
    origin: "localhost:5173",
    credentials: true,
  })
);

const redirect_uri = "localhost:3000/callback";

app.get("/login", (req, res) => {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        client_id: client_id,
        response_type: "code",
        redirect_uri: redirect_uri,
        state: state,
        scope: scope,
      })
  );
});

app.get("/callback", (req, res) => {
  const code = req.query.code;
  const state = req.query.state;

  console.log(state, code);

  return res.json({
    state: state,
    code: code,
  });
});

app.listen(3000, () => {
  console.log("The server is running");
});
