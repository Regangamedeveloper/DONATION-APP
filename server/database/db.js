const { MongoClient } = require("mongodb");
require("dotenv").config();
const url = process.env.API_KEY;

const client = new MongoClient(url);
const dbName = "Donation";
let db;

async function main() {
    try {
        // Connecting with MongoDB Atlas
        await client.connect();
        db = client.db(dbName);
        console.log("MongoDB Connected..");
    } catch (error) {
        console.error("Connection failed:", error);
        throw error; // Re-throw the error after logging it
    }
}

// Initialize the connection and export the client and db
main()
    .then(() => {
        module.exports = { client, db };
    })
    .catch((error) => {
        console.error("Error in connecting to MongoDB:", error);
    });
