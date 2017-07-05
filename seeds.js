var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
        {
            name:"Clouds Rest",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yMge5VihJ7uwhADzJVuAfFMC6OXM-iR1sBZ3wpnLu4zzp-1Z",
            description: "blah blah blah"
        },
         {
            name:"Desert Mesa",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yMge5VihJ7uwhADzJVuAfFMC6OXM-iR1sBZ3wpnLu4zzp-1Z",
            description: "blah blah blah"
        },
         {
            name:"Shagfest Point",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yMge5VihJ7uwhADzJVuAfFMC6OXM-iR1sBZ3wpnLu4zzp-1Z",
            description: "blah blah blah"
        },
    ];


function seedDB(){
    //remove all campgrounds
        Campground.remove({}, function(err){
            if(err){
                console.log(err);
            } 
            console.log("removed campgrounds");
        data.forEach(function(seed){
           Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err)
               } else {
                   console.log("added campgrounds");
                   //create a comment
                   Comment.create(
                       {
                           text:"I love this place!!!!!!",
                           author: "homer"
                   }, function(err, comment){
                       if(err){
                           console.log(err);
                       } else {
                           campground.comments.push(comment);
                           campground.save();
                           console.log("created new comment");
                       }
                   })
               }
            
            });  
        }); 
    });
}
module.exports = seedDB;
