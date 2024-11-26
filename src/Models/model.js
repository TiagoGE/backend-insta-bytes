import { ObjectId } from 'mongodb';
import 'dotenv/config' 
import connection from '../config/DBconfig.js';

const database = await connection(process.env.DB_CONNECTION);
export async function getAllPosts() {
    const db = database.db('Imersao-instabytes');
    const collection = db.collection('posts');
    return collection.find().toArray();
}

export async function createPost(newPost) {
    const db = database.db('Imersao-instabytes');
    const collection = db.collection('posts');
    return collection.insertOne(newPost);
}

export async function updatenewPost(id, newPost) {
    const db = database.db('Imersao-instabytes');
    const collection = db.collection('posts');
    const objID = ObjectId.createFromHexString(id);
    return collection.updateOne({ _id: new ObjectId(objID) }, { $set: newPost });
}

// export async function deleteAllPosts(){
//     const db = database.db('Imersao-instabytes');
//     const collection = db.collection('posts');
//     return collection.deleteMany({});
// }