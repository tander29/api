const express = require('express')
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 8000);
app.use(cors());

app.use(express.json());

app.get('/login', (req, res) => {
    res.send({ stuff: 'working from here??' })
});

app.listen(8000, () => {
    console.log('app listening on port 3000!')
});
