import Surreal from "surrealdb.js"

export const db: Surreal = new Surreal('http://127.0.0.1:8000/rpc');

const connect = async (db: Surreal) => {
    try {
        // sign in
        await db.signin({
            user: 'root', pass: 'root'
        })
        // use specific namespace / database
        await db.use('test', 'test')
        return db
    } catch (err) {
        console.error('error', err)
    }
}

connect(db).then(() => {
    console.log('Connected successfully')
})

