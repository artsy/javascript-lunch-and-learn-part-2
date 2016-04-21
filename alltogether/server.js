import React from 'react'
import express from 'express'
import browserify from 'browserify-dev-middleware'
import Body from './body.js'
import { renderToString } from 'react-dom/server'
import moment from 'moment'
import babelify from 'babelify'

const app = express()

app.use(browserify({ src: __dirname, transforms: [babelify] }))

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <div id='container'>${renderToString(<Body />)}</div>
        <script type="text/javascript" src="client.js"></script>
      </body>
    </html>
  `)
})

app.listen(5000, () => console.log('Listening on 5000'))
