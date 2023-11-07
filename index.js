const express = require("express");
const app = express();
const PORT = 7777;
const { connectToDb } = require("./connection")
const userRouter = require("./routes/user");

connectToDb("mongodb://127.0.0.1:27017/RestAPIProject")
	.then(() => console.log("Mongo DB Connected!"))
	.catch((err) => console.log("Mongo DB Error: ", err));


app.use(express.urlencoded({ extended: false }));
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Listening at PORT ${PORT}`));
