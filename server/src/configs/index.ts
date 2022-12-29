import cors from "cors";
import express from "express";
import { Application } from "../application";

export default (application: Application) => {
    application.server.use(cors())
    application.server.use(express.json())
    application.server.use(express.urlencoded({ extended: true }))

    
}