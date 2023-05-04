
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const allData = require('./data/recipeData.json');

app.get('/', (req, res) =>{
    res.send('Api is ruuning');
});

app.get('/chef', (req, res) =>{
    res.send(allData);
});



app.listen(port, () => {
    console.log(`API is running on port: ${port}`)
})
