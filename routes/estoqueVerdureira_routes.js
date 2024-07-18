import express from 'express';
import EstoqueController from '../controllers/estoqueVerdureira_controller.js';

const verdurarouter = express.Router();

verdurarouter.get('/estoque', EstoqueController.todos);
verdurarouter.post('/estoque', EstoqueController.criar);
verdurarouter.put('/estoque/:id', EstoqueController.atualizar);
verdurarouter.delete('/estoque/:id', EstoqueController.deletar);
verdurarouter.get('/estoque/categoria/:categoria', EstoqueController.buscarPorCategoria);

export default verdurarouter;
