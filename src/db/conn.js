const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/4kdownloader")
.then(()=>{
console.log('mongobd connected');
})
.catch((err) => {
  console.error(`Unable to connect to the server: ${err}`);
});

