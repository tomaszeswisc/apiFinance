//importar a biblioteca mysql2 e criar a conexão com o Banco de Dados

const mysql = require('mysql2'); // importa o pacote mysql2 para conectar ao Banco de Dados

const db = mysql.createConnection({
    host:process.env.DB_HOST, //Endereço do servidor de Banco de Dados
    user:process.env.DB_USER, //Nome de Usuário para acessar o Banco de Dados
    password:process.env.DB_PASS, //Senha do usuáriopara acessar o Banco de Dados
    database:process.env.DB_NAME // Nome do Banco de Dados
});

db.connect((err)=>{
    if(err){
        console.error('Erro ao conectar ao Banco de Dados.', err); // Exibe a mensagem de Erro
    return;
}
    console.log('Conectado ao Banco de Dados Mysql'); // Exibe a mensagem de sucesso
});

module.exports=db; //Exporta a conexão para ser usada em outros arquivos