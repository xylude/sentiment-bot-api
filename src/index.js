import express from 'express'
const app = express()

import users from './routes/users'

app.get('/users', users)

app.listen(3300, () => console.log('Example app listening on port 3300!'))