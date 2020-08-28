const express = require('express');
const app = express();
const port = 3000;

function getarg(req, name, defaultValue) {
    // query parameter
    if (req.query.hasOwnProperty(name)) {
        return req.query[name];
    }
    // body property
    if (req.body.hasOwnProperty(name)) {
        return req.body[name];
    }
    // default value
    return defaultValue;
}

function execute(req, res) {
    // handle headers
    const headers = getarg(req, headers);
    if (headers) {
        res.headers(headers);
    }

    // handle status
    const status = getarg(req, 'status');
    if (status) {
        res.status(status);
    }

    // handle body
    const body = getarg(req, 'body');
    if (body) {
        res.send(body)
    }
}

app.use(express.json());
app.all('/', (req, res) => {
    const timeout = getarg(req, 'timeout')
    if (timeout) {
        setTimeout(() => execute(req, res), timeout);
    } else {
        execute(req, res);
    }
});

app.listen(port);