import express from 'express'

const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`the app is lestining on port : ${PORT}`);
})



