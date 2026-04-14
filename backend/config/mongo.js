const mongoose = require("mongoose")

const connectMongo = async () => {

  try {

    await mongoose.connect(
      "mongodb+srv://siddharth:Siddharth@cluster0.xj8liyt.mongodb.net/?appName=Cluster0",
        { family: 4 }
    )

    console.log("MongoDB connected")

  } catch (error) {

    console.error("MongoDB connection error:", error)

  }

}

module.exports = { connectMongo }