const express = require("express");
const mongoose = require("mongoose");
const ATLAS_URI = require("./config");
const app = express();
const port = process.env.PORT || 3001
const usersRoute = require("./routes/usersRoute");
const paymentRoute = require("./routes/paymentRoute");
const checkoutRoute = require("./routes/checkoutRoute");
const ordersRoute = require("./routes/orderRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const uploadToS3 = require("./controllers/uploadToS3");
var sign_s3 = require('./controllers/uploadToS3');
const uploadRecipeRoute = require("./routes/uploadRecipeRoute");
const pantryRoute = require("./routes/pantryRoutes");
const myOrdersRoute = require("./routes/myOrdersRoute");
const adminRecipeRequests = require("./routes/adminRecipeRequestsRoute")

const offerRoute = require("./routes/offerRoute");
const cors = require("cors");

const recipesRoute = require("./routes/recipesRoute");
const cartManagementRoute = require("./routes/cartManagementRoute");

app.use(express.json());
app.use(cors());

mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", () => {
    console.log("Error while connecting to the database");
});

db.once('open', () => {
    console.log("Database connected");
});

app.use("/users", usersRoute);
app.use("/checkout", paymentRoute);
app.use("/api", checkoutRoute);
app.use("/orders", ordersRoute);
app.use("/complaints", complaintRoutes);
app.use('/uploadToS3', uploadToS3.sign_s3);
app.use("/recipes", recipesRoute);
app.use("/cart", cartManagementRoute);
app.use("/uploadRecipe", uploadRecipeRoute);
app.use("/pantry",pantryRoute)
app.use("/myOrders", myOrdersRoute);
app.use("/offers", offerRoute);
app.use("/adminRecipeRequests", adminRecipeRequests);

app.listen(port, () => {
    console.log("App is listening on port " + port);
});


module.exports = app;