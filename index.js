
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.listen(port, () => {
    console.log(`API is running on port: ${port}`)
})
