import { Application } from './application'
import express from 'express'
import core from './core'
import configs from './configs'

const server = express()
const app = new Application(7070, server)

// modules

app.apply(configs)
app.apply(core)
