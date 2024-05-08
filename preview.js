const express = require('express'),
    fs = require('fs'),
    path = require('path'),
    URL = require('url').URL;
const app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set('views', './');

// server URL that ends with a slash
app.get(/\/$/, (req, res) => {
    let url = new URL(req.url, 'https://' + req.headers.host);
    url = path.join('.', url.pathname);

    res.render(
        path.join(url, 'index.pug')
    )
});

// else deliver it as a static file
app.use('/', express.static('./'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})