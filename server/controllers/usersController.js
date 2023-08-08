const db = require('../models');
const Users = db.Users;
const bcrypt = require('bcryptjs');

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
// const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const finduser = await Users.findOne({ where: { username: username } });
//     if (!finduser) {
//       res.status(404).send('user not found');
//     } else {
//       const checkPasword = bcrypt.compare(password, finduser.password);
//       if (checkPasword) {
//         res.json('You loggedIn');
//       } else {
//         res.status(404).send('invalid login credentials');
//       }
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const findUser = await Users.findOne({ where: { username: username } });

    if (!findUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    const checkPassword = await bcrypt.compare(password, findUser.password);

    if (checkPassword) {
      res.json({ message: 'You are logged in' });
    } else {
      res.status(401).json({ error: 'Invalid login credentials' });
    }
  } catch (error) {
    next(error); // Pass the error to the error handler middleware
  }
};

module.exports = {
  createUsers,
  login,
};
