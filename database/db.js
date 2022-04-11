const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose
        .connect(
            "mongodb+srv://root:admin@todolist.6km5k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        .then(() => console.log("MongoDB Atlas CONECTADO"))
        .catch((err) => console.log(err))
}

module.exports = connectToDb