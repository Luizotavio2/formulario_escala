document.getElementById('escalaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const setor = document.getElementById('setor').value;

    const dados = {
        Nome: nome,
        Email: email,
        Telefone: telefone,
        Setor: setor
    };

    try {
        console.log("executing axios");
        axios({
            method: 'post',
            url: 'https://script.google.com/macros/s/AKfycbzNrZ2L9Ic4EVg1RSP3ZnMxSufFcV3H4URJ_vYonzlpzuoLw3clz7Tgk2I9mwsJ_-w4/exec',
            data: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(response => {
            if (response.data.status === 'sucesso') {
                document.body.innerHTML = `
                    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center;">
                        <h1 style="font-size: 28px; color: rgba(0, 0, 0, 0.7)">Formulário Enviado com Sucesso!</h1>
                    </div>
                `;
            } else {
                throw new Error('Resposta inválida do servidor.');
            }
        }).catch(error => {
            alert('Ocorreu um erro: ' + error.message);
        });
        console.log("axios executed");

    } catch(e) {
        console.log(e);
    }

});