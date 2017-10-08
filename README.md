Returns appropriate status code depending on whether or not the connection was succesful

### Usage

```sh
$ > xmpp-connect user@jabber.ccc.de Pa55w0rd
service is up # or XMPP authentication failure
$ > echo $?
0 # or 1 on failure
```

```js
import xmppConnect from 'xmpp-connect'

try {
  await xmppConnect({
    jid: 'user@jabber.ccc.de',
    password: 'Pa55w0rd'
  })
  
  success()
} catch (e) {
  failure()
}
```
