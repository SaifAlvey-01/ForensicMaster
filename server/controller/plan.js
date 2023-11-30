const planModel = require("../models/plan");

class Plan {
 async addPlan(email, plan) {
  
      try {
        let plan = await planModel
          .findOne({ "email": email });
        if (!plan) {
          console.log("in")
          try {
            let newPlan = new planModel({
              email,
              plan,
            });
            let save = await newPlan.save();
            if (save) {
              console.log("Plan created successfully");
            }
          } catch (err) {
            console.log("error");
          }
        }else{
          
        }
      } catch (err) {
        console.log(err);
      }
    }  

  }

const plansController = new Plan();
module.exports = plansController;