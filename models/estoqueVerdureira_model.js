import { Sequelize } from 'sequelize';
import bd from '../config/connection.js';

const EstoqueVerdureira = bd.define('EstoqueVerdureira', {
  cod_verdura: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  produto: {
    type: Sequelize.STRING(100)
  },
  quantidade: {
    type: Sequelize.INTEGER
  },
  preco: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true,
  timestamps: false
});

export default EstoqueVerdureira;
