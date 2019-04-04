import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import compress from 'compression'
import cors from 'cors'
import Template from './../template'

// modules for server side rendering
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import MainRouter from './../client/MainRouter'
// import StaticRouter from 'react-router-dom/StaticRouter'

const app = express()

//app.use(express.static(path.join(CURRENT_WORKING_DIR, 'public')))
//app.use(express.static('public'))
//end

//comment out before building for production
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()


//comment out before building for production
devBundle.compile(app)

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

app.use(express.static(path.join(CURRENT_WORKING_DIR, 'public')))
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))


app.get('*', (req, res) => {
   // const context = {}
   // const markup = ReactDOMServer.renderToString(
   //    <StaticRouter location={req.url} context={context}>
   //            <MainRouter/>
   //    </StaticRouter>
   //   )
   //  if (context.url) {
   //    return res.redirect(303, context.url)
   //  }
    res.status(200).send(Template());
})

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }
})

export default app
