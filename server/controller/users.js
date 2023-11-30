const userModel = require("../models/users");
const bcrypt = require("bcryptjs");
const planModel = require("../models/plan");

class User {
  async getAllUser(req, res) {
    try {
      let Users = await userModel
        .find({})
        .populate("allProduct.id", "pName pImages pPrice")
        .populate("user", "name email")
        .sort({ _id: -1 });
      if (Users) {
        return res.json({ Users });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getSingleUser(req, res) {
    let emaill = req.body.params.email;
    if (!emaill) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let User = await userModel
          .findOne({ "email": emaill });
        if (User) {
          console.log("in")
          return res.json({ User });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async postAddUser(req, res) {
    let { allProduct, user, amount, transactionId, address, phone } = req.body;
    if (
      !allProduct ||
      !user ||
      !amount ||
      !transactionId ||
      !address ||
      !phone
    ) {
      return res.json({ message: "All filled must be required" });
    } else {
      try {
        let newUser = new userModel({
          allProduct,
          user,
          amount,
          transactionId,
          address,
          phone,
        });
        let save = await newUser.save();
        if (save) {
          return res.json({ success: "User created successfully" });
        }
      } catch (err) {
        return res.json({ error: error });
      }
    }
  }

  async postEditUser(req, res) {
    let username = req.body.params.username;
    let emaill = req.body.params.email;
    let address = req.body.params.address;
    let contact = req.body.params.contact;
    let old = req.body.params.old;
    let newp = req.body.params.newp;
    if (!username || !emaill || !address || !contact || !old  || !newp ) {
      return res.json({ message: "All filled must be required" });
    } else {

      const data = await userModel.findOne({ "email": emaill });
      if (!data) {
        return res.json({
          error: "Invalid user",
        });
      } else 
        {
        const oldPassCheck = await bcrypt.compare(old, data.password);
        if (oldPassCheck) {
          let newPassword = bcrypt.hashSync(newp, 10);
      let currentUser = userModel.findOneAndUpdate({ "email": emaill }, { "$set": { "name": username, "email": emaill, "address": address, "contact": contact, "password": newPassword, updatedAt: Date.now()}});
      currentUser.exec((err, result) => {
        console.log("in");
        if (err) console.log(err);
        return res.json({ success: "User updated successfully" });
      });
    }}
      
  }}

  async getDeleteUser(req, res) {
    let emaill = req.body.params.email;
    let pass = req.body.params.pass;

    if (!pass) {
      return res.json({ message: "All filled must be required" });
    } else {
      const data = await userModel.findOne({ "email": emaill });
      if (!data) {
        return res.json({
          error: "Invalid user",
        });
      } else 
        {
        const oldPassCheck = await bcrypt.compare(pass, data.password);
        
        if (oldPassCheck) {
          let currentUser = userModel.deleteOne({"email":emaill});
          currentUser.exec((err, result) => {
            console.log("in");
            if (err) console.log(err);
            return res.json({ success: "User deleted successfully" });
          });

        }
    }}
  }

  async getPlan(req, res) {
    let emaill = req.body.params.email;
    if (!emaill) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let plan = await planModel
          .findOne({ "email": emaill });
        if (plan) {
          console.log("in")
          return res.json({ plan });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }


  async changePassword(req, res) {
    let { uId, oldPassword, newPassword } = req.body;
    if (!uId || !oldPassword || !newPassword) {
      return res.json({ message: "All filled must be required" });
    } else {
      const data = await userModel.findOne({ _id: uId });
      if (!data) {
        return res.json({
          error: "Invalid user",
        });
      } else {
        const oldPassCheck = await bcrypt.compare(oldPassword, data.password);
        if (oldPassCheck) {
          newPassword = bcrypt.hashSync(newPassword, 10);
          let passChange = userModel.findByIdAndUpdate(uId, {
            password: newPassword,
          });
          passChange.exec((err, result) => {
            if (err) console.log(err);
            return res.json({ success: "Password updated successfully" });
          });
        } else {
          return res.json({
            error: "Your old password is wrong!!",
          });
        }
      }
    }
  }
}

const ordersController = new User();
module.exports = ordersController;
