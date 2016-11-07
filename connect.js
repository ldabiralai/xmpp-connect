const Client = require('node-xmpp-client')
const argv = process.argv;

if (argv.length < 4) {
    console.error('Usage: node connect.js <jid> <password>');
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
    console.log('service is up')
    process.exit(0)
});