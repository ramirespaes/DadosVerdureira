import { Sequelize } from 'sequelize';

const bd = new Sequelize("mysql://root:@localhost:3306/verdureira");

(async () => {
  try {
    await bd.authenticate();
    console.log('Conexão estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
})();

export default bd;
console.log("Conexão na porta 3306");
