Returns appropriate status code depending on whether or not the connection was succesful

### Usage

```sh
node connect.js <jid> <password>
```

##### Sucessful: 

```bash
$ > node connect.js user@jabber.ccc.de Pa55w0rd
service is up
$ > echo $?
0
```

##### Failure:

```bash
$ > node connect.js user@jabber.ccc.de password
XMPP authentication failure
$ > echo $?
1
```
