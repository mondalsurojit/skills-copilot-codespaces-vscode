// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '/comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', function(req, res) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send('Something went wrong');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.post('/comments', function(req, res) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send('Something went wrong');
            return;
        }
        var comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile(filePath, JSON.stringify(comments), function(err) {
            if(err) {
                console.log(err);
                res.status(500).send('Something went wrong');
                return;
            }
            res.json(comments);
        });
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
```

###