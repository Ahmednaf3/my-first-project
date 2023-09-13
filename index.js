import express from 'express'
import { databaseconn } from './dbconnection/dbconnection.js'
import getallusers from './src/modules/users/user.routing.js'
const app = express()
const port = 3000
databaseconn()




app.use(express.json())
app.use('/users',getallusers)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))