const mongoose = require('mongoose')

const DB = 'mongodb+srv://<YOUR USERNAME>:<YOUR PASSWORD>@cluster0.zozv5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})