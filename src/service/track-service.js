const { apiHost, auth } = require("../config");
const logger = require("../util/logger");
const axios = require("axios");

/**
 * To authenticate the simulator and return authentication token
 * @returns
 */
async function authenticate() {
  const data = JSON.stringify({
    email: auth.userName,
    password: auth.password,
  });

  const config = {
    method: "post",
    url: `${apiHost}/auth`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    if (response.data && response.data.token) {
      return response.data.token;
    } else {
      throw new Error("Invalid Token");
    }
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
}

/**
 * To long poll the track result and store it in database
 * Handele token expiry and recreate the token
 * @param {*} token
 * @param {*} saveTrack
 */
async function getResult(token, saveTrack) {
  try {
    if (!token) {
      token = await authenticate();
    }

    let config = {
      method: "get",
      url: `${apiHost}/results`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let response = await axios(config);
    logger.info(response.data);
    await saveTrack(response);
    if ((response.status = 200 || response.status == 204)) {
      await getResult(token, saveTrack);
    }
  } catch (error) {
    logger.error(error.message);
    if (error && error.response && error.response.status == 401) {
      const token = await authenticate();
      await getResult(token, saveTrack);
    }
  }
}

module.exports = { getResult, authenticate };
