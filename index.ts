import express  from "express";
import db from "./src/config/db";
import dotenv from 'dotenv';
import cotizacionRouter from './src/routes/cotizacion';

const app = express();
app.use(express.json());

// Conectarse a la DB
const dbConecction = async () => {
    try {
        const resp = await db.authenticate();
        return console.log('Conexion Exitosa con la BD');
    } catch (error) {
        return error;
    }
}
dbConecction();

dotenv.config();



const PORT = process.env.PORT || 4000;




app.use('/api/cotizacion', cotizacionRouter);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});