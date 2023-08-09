// create an instance of the express framework
const express = require('express');
// crate an instance of app which enables us to make api request, initilize our server etc
const app = express();
const cors = require('cors');
const db = require('./models');
const postRouter = require('./routes/PostRoute');
const commentRouter = require('./routes/CommentRoute');
const userRouter = require('./routes/UsersRoute');
const errorHandler = require('./middleware/errorhandler');
// MIDDLEWARES
// ENABLE US PARSE REQUEST FROM THE CLIENT END EXAMPLE THUNDER CLIENT OR POSTMAN AND IN THE CASE OF THE WEB CLIENT SIDE ALSO
app.use(express.json());

// BODY PARSER
var corOptions = {
  // allows us to make request from ALL kind of server aside from its own server side
  origin: '*',
};
app.use(cors(corOptions));

// -------------ROUTERS---------------

// ---------post route---------
app.use('/api/posts', postRouter);

// ---------comment route---------
app.use('/api/comments', commentRouter);

// ---------users route---------
app.use('/api/auth', userRouter);

// error handling
app.use(errorHandler);

// GO INTO THE DB AND SYNCHRONIZE IF THE MODELS ALREADY EXIST, IF NOT MAKE THEM EXIST
db.sequelize.sync().then(() => {
  // THEN START THE SERVER
  // WHEN IS APP IS TO START SERVER
  app.listen(3001, () => {
    console.log(`server is running on port 3001`);
  });
});
