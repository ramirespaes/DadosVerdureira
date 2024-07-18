import EstoqueVerdureira from '../models/estoqueVerdureira_model.js';

const EstoqueController = {
  todos: async (req, res) => {
    try {
      const verduras = await EstoqueVerdureira.findAll();
      res.status(200).json(verduras);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  criar: async (req, res) => {
    try {
      const verdura = await EstoqueVerdureira.create(req.body);
      res.status(201).json(verdura);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  atualizar: async (req, res) => {
    const { id } = req.params;
    try {
      const verdura = await EstoqueVerdureira.findByPk(id);
      if (verdura) {
        await verdura.update(req.body);
        res.status(200).json(verdura);
      } else {
        res.status(404).json({ error: 'Verdura não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deletar: async (req, res) => {
    const { id } = req.params;
    try {
      const verdura = await EstoqueVerdureira.findByPk(id);
      if (verdura) {
        await verdura.destroy();
        res.status(200).json({ message: 'Verdura deletada' });
      } else {
        res.status(404).json({ error: 'Verdura não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  buscarPorCategoria: async (req, res) => {
    const { categoria } = req.params;
    try {
      const verdura = await EstoqueVerdureira.findOne({ where: { produto: categoria } });
      if (verdura) {
        res.status(200).json(verdura);
      } else {
        res.status(404).json({ error: 'Verdura não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default EstoqueController;
console.log("Controlador EstoqueVerdureira");
