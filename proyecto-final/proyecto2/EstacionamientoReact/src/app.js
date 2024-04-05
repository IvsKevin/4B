import express from 'express';
import cors from 'cors'; // Esto sirce para poder usar backend con las peticiones.
import morgan from 'morgan';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerIU from 'swagger-ui-express';
import { options } from './swaggerOptions';
const specs = swaggerJSDoc(options) 

import usersRoutes from './routes/users';
import licensesRoutes from './routes/licenses'; // Importa las rutas de licencias

const app = express();

app.use(cors()); 
app.use(morgan("dev")); 
app.use(express.json()); 

//app.use(tasksRoutes);
app.use(usersRoutes);
app.use(licensesRoutes); // Usa las rutas de licencias

app.use('/docs', swaggerIU.serve, swaggerIU.setup(specs))

export default app;
