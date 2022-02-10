const express = require('express');
const PORT = 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Time-Tracking-Dashboard Backend!');
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})