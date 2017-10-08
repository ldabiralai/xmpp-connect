const Client = require('node-xmpp-client')

module.exports = (jid, password) => {
  return new Promise((resolve, reject) => {
    const client = new Client({
        jid,
        password
    })

    client.on('error', (error) => {
        reject(error)
    })

    client.on('online', () => {
        resolve('service is up')
    })
  })
}
