import mongoose from "mongoose";

const DATBASE_URL = process.env.DATABASE_URL || "";

async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(DATBASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

//https://github.com/Automattic/mongoose/issues/6815
//TODO: test updates
//automatically use id
mongoose.set("toJSON", {
  virtuals: true,
  transform: (_doc: any, converted: { _id: any }) => {
    delete converted._id;
  },
});

export default dbConnect;
