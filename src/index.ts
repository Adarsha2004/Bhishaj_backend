import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
 
const app = express();
const port = 8000;

app.all('/api/auth/*', toNodeHandler(auth));

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
 
app.listen(port, () => {
    console.log(`Better Auth app listening on port ${port}`);
});