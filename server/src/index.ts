import { Application } from './application'
import express from 'express'
import core from './core'
import config from './config'

const server = express()
const app = new Application(7070, server)

// modules
app.apply('config', config)
app.apply('core', core)

// start app
app.start()
