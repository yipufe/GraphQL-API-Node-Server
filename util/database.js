import mongodb from 'mongodb'
//const MongoClient = mongodb.MongoClient

//let _db

//Username: thatoneguy
//Password: 12345xyz
/*
export const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://thatoneguy:12345xyz@dgm-cluster-fu5qw.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected')
            _db = client.db()
            callback(client)
        }).catch(err => {
            console.log(err)
            throw err
        })
}
*/
/*
export const getDb = () => {
    if(_db) {
        return _db
    }
    throw 'No database found!'
}*/