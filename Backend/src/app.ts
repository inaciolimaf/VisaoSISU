import express from 'express';
import path from 'path';
import routes from './routes/index';
import 'express-async-errors';
import cors from 'cors';
import { errorInterceptor } from './middlewares/errors/errorInterceptor';

// Criação da aplicação Express
const app = express();

// Configuração de middlewares e rotas  
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(errorInterceptor);

// Exportação dos objetos do servidor
export { app };

