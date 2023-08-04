// create an instance of the express framework
const express = require('express');
// crate an instance of app which enables us to make api request, initilize our server etc
const app = express();

const db = require('./models');
const postRouter = require('./routes/PostRoute');

// MIDDLEWARES
// ENABLE US PARSE REQUEST FROM THE CLIENT END EXAMPLE THUNDER CLIENT OR POSTMAN AND IN THE CASE OF THE WEB CLIENT SIDE ALSO
app.use(express.json());

// -------------ROUTERS---------------

// ---------post route---------
app.use('/api/posts', postRouter);

// GO INTO THE DB AND SYNCHRONIZE IF THE MODELS ALREADY EXIST, IF NOT MAKE THEM EXIST
db.sequelize.sync().then(() => {
  // THEN START THE SERVER
  // WHEN IS APP IS TO START SERVER
  app.listen(3001, () => {
    console.log(`server is running on port 3001`);
  });
});
