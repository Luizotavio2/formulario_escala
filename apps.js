document.getElementById('escalaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const setor = document.getElementById('setor').value;

    // Formata os dados em um objeto
    const dados = {
        Nome: nome,
        Email: email,
        Telefone: telefone,
        Setor: setor
    };

    // Envia os dados para o Google Sheets usando a API
    fetch('https://script.google.com/macros/s/AKfycbxMBFA2-yAmtLdFuhfXscYxiBkcCkTxseSeh4hQ1wdOMPSFZN4KdUrcgFsAsrmrBlGJ/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'sucesso') {
            document.body.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center;">
                    <h1 style="font-size: 28px; color: rgba(0, 0, 0, 0.7)">Formulário Enviado com Sucesso!</h1>
                </div>
            `;
        } else {
            throw new Error('Resposta inválida do servidor.');
        }
    })
    .catch(error => {
        alert('Ocorreu um erro: ' + error.message);
    });
});