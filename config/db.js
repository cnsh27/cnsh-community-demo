

module.exports = (mongoose) => {
    mongoose.connect(process.env.MONGO_URL, {dbName: 'admin', useNewUrlParser: true, useUnifiedTopology: true}, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: true
    }).catch(err => {
        console.error(err);
    }).then(()=>{
        console.log('db success');
    });
        
};