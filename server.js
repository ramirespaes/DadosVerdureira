import express from 'express';
import bodyParser from 'body-parser';
import bd from './config/connection.js';
import verduraRoutes from './routes/estoqueVerdureira_routes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', verduraRoutes);

bd.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });
