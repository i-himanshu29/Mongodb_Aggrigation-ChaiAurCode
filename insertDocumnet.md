- Go to the Mongodb extension where we see all the dbs.
- go to particular db
- Create a folder- author , books, users
- choose any folder and right click then you see insert document option , just click on it and paste you data
- inertOne is replace by insert Many 
## co.
The current dataase to use
use('aggree');

db.getCollections('users').insertMany({
    // and past all the data
})