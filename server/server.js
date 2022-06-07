// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const Profile = require('./models/profile');
const Room = require('./models/room');
const Message = require('./models/messages');
const  roomIdGenerator  = require('./util/roomIdGenerator');

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

app.post("/create", function(req, res){
    console.log(req);
    const newRoom =  new Room({
        name: req.body.name,
        id: roomIdGenerator.roomIdGenerator()
    })
    newRoom.save().then(console.log("Room has been added!")).catch(err => console.log("Error when creating room!"))
});

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


app.post("/createMessage", function(req, res){
    const newMessage =  new Message({
        nickname: req.body.nickname,
        message: req.body.message,
        roomName: req.body.roomName,
        // timestamp: req.body.timestamp, NOT NEEDED CAUSE SCHEMA ADDS IT
        vote: 0
    })
    newMessage.save().then(console.log("Message has been added!")).catch(err => console.log("Error when creating message!"))
});



app.post("/upvoteMessage", function(req, res){
    //newMessage.save().then(console.log("Message has been added!")).catch(err => console.log("Error when creating room!"))
    Message.updateOne({nickname: req.body.nickname},
                    {message: req.body.message},
                    {$set: {'vote': req.body.vote+1}});
});

app.post("/downvoteMessage", function(req, res){
    //newMessage.save().then(console.log("Message has been added!")).catch(err => console.log("Error when creating room!"))
    Message.updateOne({nickname: req.body.nickname},
                    {message: req.body.message},
                    {$set: {'vote': req.body.vote-1}});
});

app.post("/searchMessage", function(req, res){
    let roomId = req.body.roomId;
    let message = req.body.message;
    Message.find({ $text: { $search: message}, roomName: roomId }).lean().then(items => { //r $text: { $search: req.body.message},
        res.json(items)
    })
})

app.get("/getRooms", function(req, res){
    Room.find().lean().then(items => {
        res.json(items)
    })
});


app.get("/getMessages/:roomId", function(req, res){
    // console.log(req.params.roomId)
    Message.find({roomName: req.params.roomId}).lean().then(items => {
        res.json(items)
    })
})

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

app.delete('/deleteMessage/:message', function(req, res){
    Message.remove({message: req.params.message}, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
    });
})

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));