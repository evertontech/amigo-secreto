//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
<script>
        function sortear() {
            // Captura os nomes dos amigos digitados
            const amigosInput = document.getElementById('amigos').value;
            const amigos = amigosInput.split(',').map(nome => nome.trim()).filter(nome => nome !== '');
            
            // Verifica se há amigos suficientes
            if (amigos.length < 2) {
                alert('Por favor, insira pelo menos 2 amigos para o sorteio.');
                return;
            }

            // Embaralha a lista de amigos
            const amigosSorteados = [...amigos];
            const resultados = [];

            while (amigosSorteados.length > 0) {
                const amigo = amigosSorteados.pop();
                let sorteado;
                
                // Encontra um amigo que ainda não tenha sido sorteado
                do {
                    sorteado = amigos[Math.floor(Math.random() * amigos.length)];
                } while (resultados.some(resultado => resultado.sorteado === sorteado || sorteado === amigo));
                
                resultados.push({ amigo, sorteado });
            }

            // Exibe o resultado
            const ul = document.getElementById('resultado');
            ul.innerHTML = '';
            resultados.forEach(result => {
                const li = document.createElement('li');
                li.textContent = `${result.amigo} sorteou ${result.sorteado}`;
                ul.appendChild(li);
            });
        }
    </script>