const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello from my over over smarty t-shirt!!auto restart")
});

const users = [
    { id: 1, name: "sabana", email: "sabana@gmail.com", phone: '01788888888' },
    { id: 2, name: "sabnoor", email: "sabnoor@gmail.com", phone: '01788888882' },
    { id: 3, name: "mousumi", email: "mousumi@gmail.com", phone: '01788888880' },
    { id: 4, name: "compa", email: "compa@gmail.com", phone: '01788888885' },
    { id: 5, name: "dithi", email: "dithi@gmail.com", phone: '01788888884' },
    { id: 6, name: "sucorita", email: "sucorita@gmail.com", phone: '01788888889' },
    { id: 7, name: "bobita", email: "bobita@gmail.com", phone: '01788888588' }
]

app.get('/users', (req, res) => {
    //filter by search query parameters
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }


});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange']);
});
app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor')
});
app.listen(port, () => {
    console.log('listening to port', port)
})