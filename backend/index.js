const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/github/token", async (req, res) => {
  const userId = req.query.userId;
  const provider = "github";

  if (!userId) {
    return res.status(400).json({ message: "User ID not provided" });
  }

  try {
    const response = await axios.get(
      `https://api.clerk.com/v1/users/${userId}/oauth_access_tokens/${provider}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.VITE_CLERK_API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    if (response.status === 200) {
      const data = response.data;
      const accessToken = data[0]?.token || "";
      res.json({ accessToken });
    } else {
      res.status(response.status).json({ message: "Failed to fetch access token" });
    }
  } catch (error) {
    console.error("Error fetching access token:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});