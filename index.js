const express = require("express");

const {connectMongoDb} = require("./connection");
const {logReqRes} = require("./middlewares/index");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// Connection
connectMongoDb('mongodb://127.0.0.1:27017/project-1')
    .then(() => console.log("Mongo DB Connected"))
    .catch((err) => console.log("Mongo error",err));

// Express Middleware
app.use(express.urlencoded({extended : false}));
app.use(logReqRes("log.txt"));

// Routes
app.use('/api/user',userRouter); 

app.listen(PORT, () => {console.log(`Server started at PORT ${PORT}`);});