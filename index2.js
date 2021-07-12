const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: trye
    },
    age: {
        type: String,
        required: true
    }
});

const Users = mongoose.model('Users', UsersSchema);

app.post('/', (req, res) => {
    Users.create({
        name: 'nn',
        age: '1'
    })
        .then((user) => res.send(user))
        .catch(err => res.send(err));
});

app.get('/', (req, res) => {
    Users.find()
        .then(users => res.send(users))
        .catch(err => res.send(err));
})
