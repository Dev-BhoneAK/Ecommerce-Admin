const mongoose = require('mongoose');

exports.connect = async () => {
    try{
       const connection =  await mongoose.connect(process.env.MONGODB_URI, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
       });
       console.log('MongoDB connected!')
    }catch (err) {
        console.log(err);
    }
}

