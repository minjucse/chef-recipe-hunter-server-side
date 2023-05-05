
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const allData = require('./data/recipeData.json');
const detailData = require('./data/detailData.json');

app.get('/', (req, res) =>{
    res.send('Api is ruuning');
});

app.get('/chef', (req, res) =>{
    res.send(allData);
});
app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    const selectedChef = allData.find(n => n.id == id);
    res.send(selectedChef)
    
});
app.get('/chefDetail/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(allData)
    }
    else {
        const detail = detailData.filter(n => parseInt(n.chef_id) === id);
        res.send(detail)
    }
});

app.listen(port, () => {
    console.log(`API is running on port: ${port}`)
})
