// Define a URL base da API como 'http://localhost:3000/api'.
const API_URL = 'http://localhost:3000/api';

// Função assíncrona para fazer login do usuário.

// Recebe o 'email' e 'password' como parâmetros.
async function login(email, password) {
    try {
        // Exibe no console os dados de login que serão enviados ao servidor.
        console.log('Enviando dados para login:', { email, password });
        
        // Envia uma requisição POST à API na rota '/auth/login'.
        // A requisição inclui um cabeçalho para indicar que o conteúdo é JSON e envia o 'email' e 'password' no corpo da requisição.
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST', // Define o método HTTP como POST.
            headers: {
                'Content-Type': 'application/json' // Informa que o corpo da requisição está no formato JSON.
            },
            body: JSON.stringify({ email, password }) // Converte os dados de login para o formato JSON e envia no corpo da requisição.
        });

        // Aguarda e converte a resposta do servidor para JSON.
        const result = await response.json();
        
        // Exibe no console a resposta recebida do servidor.
        console.log('Resposta do servidor para login:', result);
        
        // Retorna o resultado da requisição.
        return result;
    } catch (error) {
        // Captura qualquer erro que ocorra durante a requisição e exibe no console.
        console.error('Erro ao fazer login:', error);
        
        // Retorna um objeto com 'success: false' indicando que o login falhou.
        return { success: false };
    }
}


// Função para registrar um novo usuario

async function register(name, email,password, birth_date) {

    try{
//Exibe no console os dados que estão sendo enviados ao servidor para registro
        console.log('Enviando dados para registro:',{name, email, password, birth_date});

//Enviar uma requisição POST para a API n endpoint 'auth/register' com os dados do novo usuário
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST', //Define o método HTTP como POST para enviar dados
            headers:{

// Define o cabeçalho, informando que o corpo da requisição será em formato JSON.

                'Content-Type': 'application/json' 

                 },

// Converter os dados do registro em uma string JSON e os envia no corpo da requisição
                 body:JSON.stringify({name, email, password, birth_date})
        });

//Verificar se o código da resposta está fora da faixa de 200-299(indicando uma falha na requisição)

        if(!response.ok){
            throw new Error('Falha na requisição. Código de status:' + response.status);
        }

//Recebe a resposta do servidor como texto, uma vez que a resposta pode não estar em formato JSON.

        const result = await response.text();

        //Exibe a resposta do servidor no console
        console.log('Resposta do servidor para registro:', result);

    }

}
