import app from './app'

import './config/db'


const server = app.listen(8080, () => {
    console.log(`Server ir running at http://localhost:8080/`)
})

server.timeout = 1000;