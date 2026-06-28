import express from 'express';

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    return res.json({msg: 'Hello from the server check CI/CD working...'});
})

app.listen(PORT, () =>{
    console.log(`Server is up and running on port ${PORT}`)
})