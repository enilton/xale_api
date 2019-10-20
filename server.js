const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
const cloudinary = require("cloudinary");

const app = express();
requireDir("./app/model");

// DATABASE{
const mongoDBURL =
  "mongodb://usuarioapi:impreza22@ds149557.mlab.com:49557/xale_desenvolvimento";
mongoose.connect(mongoDBURL, { useNewUrlParser: true });
// }

// MAIN APP{
app.use(express.json());
app.use(cors());
app.use("/api", require("./app/routes"));
// }

// CLOUDNARY{
cloudinary.config({
  cloud_name: "dksr8bmpf",
  api_key: "592291381789944",
  api_secret: "OfaZl7XTkI4TuPxwTk38WFrxBV0"
});
// }

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port 3000");
});
// }
