import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(
  "mongodb+srv://karatekin:karatekin@mern-try.akcva5f.mongodb.net/mern-try?retryWrites=true&w=majority"
).then(() => {
    console.log("MongoDB Bağlantısı Kuruldu");
}).catch((err) => {
    console.log(err)
});

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


//  "mongodb+srv://karatekin:karatekin@mern-try.akcva5f.mongodb.net/mern-try?retryWrites=true&w=majority"
//Sdünetten bağlandığın zaman hata veriyor ve bağlanmıyor ayrıca connect metodun yanındaki urı'yı
//dışarıdan çekmem gerekli fakat dışarıdan çekmede her zaman bir hata alıyorum.Deneme
 // olduğundan dolayı direk devam et ve sonrasında projede belki tekrardan düzenlersin.
