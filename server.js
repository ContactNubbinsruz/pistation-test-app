const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("PiStation Test App is running");
});

app.get("/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
});

app.listen(8080, "0.0.0.0", () => {
    console.log("Test app listening on port 8080");
});
