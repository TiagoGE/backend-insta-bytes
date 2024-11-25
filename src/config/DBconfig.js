import { MongoClient, ReturnDocument } from "mongodb";

export default async function connection(stringConnection) {
    let mongoClient;

    try{
        mongoClient = new MongoClient(stringConnection);
        console.log('Connecting to cluster of database...');
        await mongoClient.connect();
        console.log('Successfully connected to Mongo Atlas!')

        return mongoClient;

    }catch(error){
        console.error("Fail to connect to DB!",  error);
        process.exit();
    }
    
}