const planModel = require("../models/plan");

class Plan {
 async addPlan(email, plann) {
      const em = email;
      const pl = plann;
      try {
        let plan = await planModel
          .findOne({ "email": em });
        if(!plan) {
          try {
            let save = await planModel.create({
              email:em,
              plan:pl
            })
            console.log(em, pl)
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