const mongoose = require("mongoose")

const mongoURL = "mongodb+srv://rathoreharsh:harsh9121@cluster0.cdrdx.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async() =>{
    mongoose.connect(mongoURL,async(err, result) => {

        if (err) {
            console.log("Something Error", err);
        }

        else {
            console.log("Connection Established");
            const fatch_data = mongoose.connection.db.collection("food_items");
            fatch_data.find({}).toArray(function (err, data) {

                const foodCategory = mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err,categorydata){
                    if(err)
                    {
                        console.log("Error");
                    }
                    else
                    {
                        global.food_items= data;
                        global.foodCategory = categorydata;
                    }
                })
               
                // if (err) {
                //     console.log("Error");
                // }

                // else {
                //     // we will declare global variable in which dont need to declare data type
                //     global.food_items = data;
                   
                // }
            });
        }

    });
}

module.exports = mongoDB;   

