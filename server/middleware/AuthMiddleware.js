const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const accessToken = req.header('accessToken');

  if (!accessToken) {
    return res.json('user not loggedIn');
  }

  try {
    const validToken = verify(accessToken, 'importantsecrete');
    if (validToken) {
      return next();
    }
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports = { validateToken };
