const connectDB = require("../config/db");
const userData = require("./users");
const User = require("../UserModel");

const importData = async () => {
  try {
    await connectDB();
    await User.collection.deleteMany({});
    await User.insertMany(userData);

    if (process.argv[2] !== "-d") {
      await User.insertMany(userData);

      console.log("Seeder data imported successfully");
      process.exit();
      return
    }
    console.log("Seeder data deleted successfully");
    process.exit();
  } catch (error) {
    console.error("Error while proccessing seeder data", error);
    process.exit(1);
  }
};
importData();
