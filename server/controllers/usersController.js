const db = require('../models');
const Users = db.Users;
const bcrypt = require('bcryptjs');

const { sign } = require('jsonwebtoken');

// CREATE USERS
const createUsers = async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const userData = await Users.create({
    username: username,
    password: passwordHash,
  });
  res.status(200).send(userData);
};

// LOGIN
const login = async (req, res) => {
  const { username, password } = req.body;

  const findUser = await Users.findOne({ where: { username: username } });

  if (!findUser) {
    return res.json({ error: 'User not found' });
  }

  const checkPassword = await bcrypt.compare(password, findUser.password);

  if (checkPassword) {
    const accesToken = sign(
      { username: findUser.username, id: findUser.id },
      'importantsecrete'
    );
    res.json({
      token: accesToken,
      username: findUser.username,
      id: findUser.id,
    });
  }
};

// CONFRIM TOKEN TO BE CORRECT
const actualToken = (req, res) => {
  // this is the only guy that an throw the req.user from the authMiddleware
  res.json(req.user);
};
module.exports = {
  createUsers,
  login,
  actualToken,
};
