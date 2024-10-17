const express = require("express");
const { PORT } = require("./config");
const { post_GetToken, get_GetUserInfo } = require("./idpService");

var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to OIDC REST APIs!!");
});

app.post("/fetchUserInfo", async (req, res) => {
  //console.log("Req: ", req.body)
  
  try {
    const tokenResponse = await post_GetToken(req.body);
    console.log("Token Response: ", tokenResponse.access_token)
 
    res.send(await get_GetUserInfo(tokenResponse.access_token));

  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});

//PORT ENVIRONMENT VARIABLE
const port = PORT;
app.listen(port, () => console.log(`Listening on port ${port}..`));
