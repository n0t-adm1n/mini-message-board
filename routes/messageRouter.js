const {Router} = require('express')

const router = Router()


// dummy data
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
// ---- dummy data end

router.get('/new', (req, res) => {
    res.render('form')
})

router.post('/new', (req, res) => {
    console.log('req received')
    
    const {name, message} = req.body;

    messages.push({user: name, text: message, added: new Date()});

    res.render('form')
})

router.get('/', (req, res) => {
    res.render('index', {messages: messages})
})

module.exports = router