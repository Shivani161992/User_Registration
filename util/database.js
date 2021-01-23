const Sequelize= require('sequelize');

const sequelize= new Sequelize('dummy', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '8889',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

module.exports= sequelize;
