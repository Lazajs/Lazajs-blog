import mongoose from "mongoose";

export default async () => {
  let connection 

  try {
    connection = await mongoose.connect(`${process.env.MONGO_URI}`)
  } catch (e) {
    console.log(e)
  }

  return connection
}
