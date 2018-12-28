const path = require('path');

const express = require('express');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const router = require('./routes/route');

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.use('/', errorController.get404);

mongoose.connect(
  'mongodb+srv://leomotta121:db686330@cluster0-sud5s.mongodb.net/test?retryWrites=true', 
  { useNewUrlParser: true }
  )
  .then(result => {
    console.log('connected to database');

    app.listen(3000, () => {
      console.log('Listening on port 3000');
    });
  })
  .catch(err => console.log(err));
