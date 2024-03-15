import express from 'express';
//import tasksRoutes from './routes/tasks';
import usersRoutes from './routes/users';
import licensesRoutes from './routes/licenses'; // Importa las rutas de licencias

const app = express();

app.use(express.json());

//app.use(tasksRoutes);
app.use(usersRoutes);
app.use(licensesRoutes); // Usa las rutas de licencias

export default app;
