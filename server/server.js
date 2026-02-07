import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("Contact Manager API Running ✅");
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
