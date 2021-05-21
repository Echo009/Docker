// mongo localhost:27017/admin
// use admin
// db.auth('root','root')
// use alpine
db.createUser({
    "user": "Echo009",
    "pwd": "ironman",
    "roles": [
        "dbOwner"
    ]
});