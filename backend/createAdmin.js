const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

require("dotenv").config();
const bcrypt = require("bcryptjs");
const connectDB = require("./config/db");
const Admin = require("./models/Admin");

const createAdmin = async () => {
  try {
    await connectDB();

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = new Admin({
      name: "Lakhan",
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    await admin.save();

    console.log("Admin Created Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

createAdmin();