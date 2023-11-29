const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      
    },
    plan: {
      type: Number,
      required : true,
    },
  }
);

const planModel = mongoose.model("plans", planSchema);
module.exports = planModel;
