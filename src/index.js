import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

console.log(process.env.MONGODB_URI);
console.log(process.env.PORT);

connectDB();















// const app = express()

// ( async () => {
//   try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error", (error) => {
//         console.log("ERROR", error);
//         throw error
//       })
//       app.listen(process.env.PORT, () => {
//           console.log(`App is listinig on port ${process.env.PORT}`);
//       })
//   } catch (error) {
//     console.log("ERROR :", error)
//     throw err
//   }
// }) ()