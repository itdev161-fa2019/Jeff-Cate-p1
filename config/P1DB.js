import mongoose from 'mongoose';
import config from 'config';

//Get db name/address from config/default.json
const P1Db = config.get('Project1URI');

//Connection to db here
const connectP1Database = async () => {
    try {
        await mongoose.connect(P1Db, {
            useUnifiedTopology: true
        });
        console.log('Project 1 connected to MongoDB.');
    } catch (error) {
        console.error(error.message);

        //Return Error code after Failed attempt
        process.exit(1);
    }
};

export default connectP1Database;
