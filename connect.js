import Client from 'node-xmpp-client'
const argv = process.argv;

if (argv.length < 4) {
    console.error('Usage: babel-node connect.js <jid> <password>');
    process.exit(1)
}

const jid = argv[2]
const password = argv[3]

const client = new Client({
    jid,
    password
});

client.on('error', (error) => {
    console.log(error)
    process.exit(1)
})

client.on('online', () => {
    console.log('connected to service')
    client.end()
    process.exit(0)
});

client.connection.socket.on('error', () => {
    console.error('disconnected')
})

client.end();