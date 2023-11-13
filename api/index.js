import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://karatekin:karatekin@mern-try.akcva5f.mongodb.net/mern-try?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB Bağlantısı Kuruldu");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRouter)
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
 });






//  "mongodb+srv://karatekin:karatekin@mern-try.akcva5f.mongodb.net/mern-try?retryWrites=true&w=majority"
//Sdünetten bağlandığın zaman hata veriyor ve bağlanmıyor ayrıca connect metodun yanındaki urı'yı
//dışarıdan çekmem gerekli fakat dışarıdan çekmede her zaman bir hata alıyorum.Deneme
// olduğundan dolayı direk devam et ve sonrasında projede belki tekrardan düzenlersin.
