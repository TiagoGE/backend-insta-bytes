import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { addPosts, getPosts, uploadImage, updatePost, /*deleteAll*/ } from '../controllers/controller.js';

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200,
}

//Keep the original name.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
    }
  });

  const upload = multer({ storage: storage });

const routes = (app) => {

    app.use(express.json());
    app.use(cors(corsOptions))

    app.get('/posts', getPosts);
    app.post('/posts', addPosts);
    app.post('/upload', upload.single("url"), uploadImage)
    app.put('/upload/:id', updatePost);
    // app.delete('/delete', deleteAll)
};

export default routes;
