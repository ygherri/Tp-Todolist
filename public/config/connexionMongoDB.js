const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://admin:<admin>@cluster0.uua9ejg.mongodb.net/';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB établie avec succès'))
.catch(err => console.error('Erreur de connexion à MongoDB :', err));