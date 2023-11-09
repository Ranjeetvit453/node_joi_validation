const server = require("./server");
require('dotenv').config()
require('dotenv').config({path:process.env.ENV_MODE})

const port = process.env.PORT || 9999
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})