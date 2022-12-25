import express from 'express'
import cors from 'cors'

import api from './api'

const app = express()

process.env.NODE_ENV = "dev"

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', api)

app.listen(7070, () => console.log('Server listen port 7070\n'))