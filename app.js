const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('this will host the s3 load button page, timmy will be proud of this full CI/CD pipeline that I put in 2 hours'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
