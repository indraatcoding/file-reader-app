console.log('My New Project');

const express = require('express');

const fs = require('fs');

const app = express();

const port = 4000;

app.get('/send/:data', (req, res) => {
    const data = req.params.data;

    fs.writeFileSync('test.txt', data);
    res.json({
        message: 'Your data is saved',
    })
})

app.listen(port, (err) => {
    console.log(`App is listening at port ${port}`);
})