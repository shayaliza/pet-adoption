const express = require("express");
const server = express();

server.get("/api/data", (req, res) => {
  // Handle your API logic here
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
