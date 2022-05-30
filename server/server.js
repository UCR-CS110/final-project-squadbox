// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const Profile = require('./models/profile');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

// Connect to DB
const db = config.get('mongoURI');
mongoose.connect(db, err => {
    if(err) {
        throw err;
    }
    else {
        console.log("Connected to MongoDB!");
    }
});

// Endpoints
app.post('/createProfile', function(req, res) {
    console.log(req);
    const newProfile = new Profile({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    newProfile.save().then(console.log("Profile has been created!"))
        .catch(err => console.log("Error when creating a profile: ", err));
});

app.post('/login', function(req, res) {
    Profile.find({username: req.body.username, password: req.body.password}).lean().then(item => {
        if(item.length === 0){
            res.json(false);
        }
        else {
            res.json(true);
        }
    });
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));