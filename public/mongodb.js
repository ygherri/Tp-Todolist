const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb+srv://admin:admin@cluster0.uua9ejg.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connexion à MongoDB établie avec succès');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB :', error);
  }
}

async function getAllTasks() {
  const database = client.db('Cluster0');
  const tasksCollection = database.collection('tasks');
  return tasksCollection.find().toArray();
}

async function addTask(task) {
  const database = client.db('Cluster0');
  const tasksCollection = database.collection('tasks');
  return tasksCollection.insertOne(task);
}

async function deleteTask(taskId) {
  const database = client.db('Cluster0');
  const tasksCollection = database.collection('tasks');
  return tasksCollection.deleteOne({ _id: ObjectId(taskId) });
}

async function markTaskAsCompleted(taskId) {
  const database = client.db('Cluster0');
  const tasksCollection = database.collection('tasks');
  return tasksCollection.updateOne({ _id: ObjectId(taskId) }, { $set: { completed: true } });
}

module.exports = {
  connect,
  getAllTasks,
  addTask,
  deleteTask,
  markTaskAsCompleted
};
