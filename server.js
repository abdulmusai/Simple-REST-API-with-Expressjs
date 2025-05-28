const express = required('expresss');
const itemsRouter = required('./routes/items');

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

//Root Route
app.get('/', (req, res) => {
    res.send('Hello, World');
});

// Items Route
app.use('/items', itemsRouter);

// 404 Route Handler
app.use(req, res) =>{
    res.status(404).json({error: 'Route not found'});

}

 //Error Handling Middleware
    app.use((err, req, next) => {
        console.error(err.stack);
        res.status.(500).json({ error: 'Something went wrong!'});
    });

    // Start Server 
    app.listrn(PORT, () => {
        console.log('Server is running on http://localhost:${POST}');
    });  