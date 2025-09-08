
    function numeroSecreto(min, max) {
        return numeroSecreto = Math.floor(Math.random() * (max - min +1)) + min
         }

    function jogar() {
        const min = 1
        const max = 100
        const gerarNumeroSecreto = numeroSecreto(min, max)
        let armazenamentoDeTentativas = []
        let acertou = false;
        let maxDeTentativa = 10
              
     for(i = 1; i<= maxDeTentativa; i++) {
        let tentativa = prompt("Tenho um número secreto entre 1 a 100, tente adivinhar! Boa sorte!")
          
        if(tentativa === null || tentativa.trim() === " ") {
            alert("Digite um número válido")
            i--;
            continue;
        }
        const resposta = Number(tentativa)
        if (Number.isNaN(resposta)) {
                 alert("Digite um número");
            i--;
            continue;
        }

        if (resposta < min || resposta > max) {
        alert(`Digite um número entre ${min} e ${max}!`);
        i--;
        continue;
         }
            
        armazenamentoDeTentativas.push(resposta)

        if (resposta === gerarNumeroSecreto) {

            alert(`Você acertou na ${i}ª tentativa!`)

            acertou = true;

        break;
              
        } else if(resposta < gerarNumeroSecreto ){

        alert(`Seu palpite é menor que o número secreto, essa foi sua ${i}ª tentativa de ${maxDeTentativa}`) 
        
        } else {

            alert(`Seu palpite é maior que o número secreto, essa foi sua ${i}ª tentativa de ${maxDeTentativa}`)
        }        
            }

        if (!acertou) {
            
        alert(`Suas tentativas acabaram! O número secreto era ${gerarNumeroSecreto} :) Seu historico de tentativas ${armazenamentoDeTentativas.join(' | ')}`)

        } else {

        alert(`Segue seu historico de tentativas ${armazenamentoDeTentativas.join(' | ')}`)
            }

        console.log(armazenamentoDeTentativas)
        
            }
        
            window.jogar();