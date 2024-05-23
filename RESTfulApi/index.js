const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/momo', (req, res) => {
    res.status(200).send({
        momo: 'momo'
    });
});

app.post('/momo/:plate', (req, res) => {
    const { plate } = req.params;
    const { stuffing } = req.body;
    
    if (!stuffing) {
        return res.status(400).send({
            error: 'stuffing is required'
        });
    }

    res.send({
        momo: `momo is ${stuffing} and no of ${plate}`
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
