const axios = require("axios");
const jose = require("jose");
const { IDP_BASE_URL, IDP_AUD_URL, CLIENT_ASSERTION_TYPE, PRIVATE_KEY } = require("./config");

const baseUrl = IDP_BASE_URL.trim();

const getTokenEndPoint = "/v1/esignet/oauth/v2/token";
const getUserInfoEndPoint = "/v1/esignet/oidc/userinfo";

console.log("Base Url: " + baseUrl);

const alg = "RS256";
const expirationTime = "1h";

const post_GetToken = async ({code, client_id, redirect_uri, grant_type}) => {
    let request = new URLSearchParams({
      code: code,
      client_id: client_id,
      redirect_uri: redirect_uri,
      grant_type: grant_type,
      client_assertion_type: CLIENT_ASSERTION_TYPE,
      client_assertion: await generateSignedJwt(client_id),
    });
    
    const endpoint = baseUrl + getTokenEndPoint;
    console.log("Endpoint: " + endpoint);
    const response = await axios.post(endpoint, request, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    console.log("Response Data: " + response.data);
    
    return response.data;
};

const get_GetUserInfo = async (access_token) => {
  const endpoint = baseUrl + getUserInfoEndPoint;
  const response = await axios.get(endpoint, {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });

  return response.data;
};


const generateSignedJwt = async (clientId) => {
  // Set headers for JWT
  var header = {
    alg: alg,
    typ: "JWT",
  };

  var payload = {
    iss: clientId,
    sub: clientId,
    aud: IDP_AUD_URL,
  };

  var decodeKey = Buffer.from(PRIVATE_KEY, 'base64')?.toString();
  const jwkObject = JSON.parse(decodeKey);
  const privateKey = await jose.importJWK(jwkObject, alg);
  
  const jwt = new jose.SignJWT(payload)
    .setProtectedHeader(header)
    .setIssuedAt()
    .setExpirationTime(expirationTime)
    .sign(privateKey);

  return jwt;

};

module.exports = {
  post_GetToken: post_GetToken,
  get_GetUserInfo: get_GetUserInfo,
};
