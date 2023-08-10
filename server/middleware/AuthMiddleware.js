const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const accessToken = req.header('accessToken');

  if (!accessToken) {
    return res.json('user not loggedIn');
  }

  try {
    const validToken = verify(accessToken, 'importantsecrete');
    // setting the req.user to the data available on the encrypted validtoken
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports = { validateToken };
