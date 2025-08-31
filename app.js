const express = require("express");

const app = express();

app.get("/" , (req, res) => {
    res.json({
        FirstName: "Hadi"
    });
});

app.listen(999, () => {
console.log(`Server is Running on port ${999}`);
});