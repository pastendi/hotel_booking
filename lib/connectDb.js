const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI)
    if (connection.readyState == 1) {
      console.log('Database connected')
    }
    return connection
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
module.exports = connectDB
