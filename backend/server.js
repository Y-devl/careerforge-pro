const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Backend is running!`);
  console.log(`🌐 Server listening on http://localhost:${PORT}`);
});