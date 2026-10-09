import express from 'express';
import mysql from 'mysql2/promise';
import 'dotenv/config';

const app = express();

// 1.middlerware para procesar req.body
app.use(express.json());

// 2. pool de conexión a MySQL
const pool = mysql.createpool({
    host: process.env.DB_HOST,
    User: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    WaitForConnections: true,
    connectionLimit: 10
});

// 3. Endpoint Get: Consultar consolidado de ventas de parámetro
app.get('/api/v1/ventas/consolidado', async (req, res) => {
    try {
        const {sucursal, anio} = req.query;
 
        // Validación de parámetros obligatorios
        if (!sucursal || !anio){
            return res.status(400).json({
                error: "Bad request",
                message: 'debe enviar ambos parámetros'
            });
        }
        // Se ejecuta el SP en BD
        const [rows] = await pool.query( 'Call db_ventas_tech(?, ?)' ,[sucursal, anio]);

        //Enviamos la respuesta al cliente
        res.status(200).json({
            status: 'success',
            total_registros: row[0] ? rows[0].length : 0,
            data: rows[0]
        });l

    } catch (error) {
        console.log('Error en GET /ventas/consolidado', error);
        res.status(500).json({error: 'Internal server error', message: 'Error en MYSQL'})
    }
})

// 4. Endpoint POST: Ingresar nueva venta
app.post('/api/v1/ventas' , async (req, res) =>{
    try {
        const {id_producto, id_cliente, cantidad, fecha_venta} = req.body;

        //Validación de datos
        if(!id_producto || !id_cliente || !cantidad || !fecha_venta) {
            return res.status(400).json({
                error: 'bad request',
                message: 'todos los parámetros son obligatorios'
            });
        }

        //Insertar datos de la BD
        await pool.query('CALL db_registrar_venta(?, ?, ?, ?)' , [
            id_producto, id_cliente, cantidad, fecha_venta
        ]);

        //Respuesta 201 Created
        res.status(201).json({
            status: 'created' ,
            message: 'Venta registrada exitosamente' ,
            datos_registrados: { id_producto, id_cliente, cantidad, fecha_venta}
        });

    } catch (error) {
        console.log('error en POST /ventas: ', error);
        res.status(500).json({error: 'Internal Server Error', message: Error})
    }
});

// 5. Iniciar Servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor Express en http://localhost:${PORT}')
});