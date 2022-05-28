const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Success!");
});

app.use("/api/auth", authRoute);
app.use("/api/users", require("./routes/users"));
app.use("/api/upload", require("./routes/upload"));
app.use("/api/products", require("./routes/product"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/checkout", require("./routes/stripe"));
app.use("/api/wishlist", require("./routes/wishlist"));

app.listen(PORT, () => {
	console.log("Server is running");
});
