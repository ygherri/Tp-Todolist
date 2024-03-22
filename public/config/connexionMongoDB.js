(async () => {
    const { MongoClient } = await import('mongodb');
  
  
    const uri = 'mongodb+srv://admin:admin@cluster0.uua9ejg.mongodb.net/';
    
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    try {
      await client.connect();
      console.log('Connexion à MongoDB établie avec succès');
    } catch (error) {
      console.error('Erreur de connexion à sMongoDB :', error);
    } finally {
      await client.close();
    }
  })();