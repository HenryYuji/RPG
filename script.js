//************************************* Variáveis globais que devem ser inicializadas no início do jogo *************************************

//variável que irá guardar o número sorteado no dado
let sorteioDado = 0

//************************************* Funções que serão repetidas ao longo do jogo *************************************

  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Função para jogo de treinamento
  function treino(){
    let energiaJogador = 5;
    let energiaInimigo = 3;
    alert('Vamos treinar 1 contra 1, você tem a vantagem, vamos nessa!')
    while (energiaJogador > 0 && energiaInimigo > 0) {
        alert(`Sua energia é ${energiaJogador} e a energia do seu oponente é ${energiaInimigo}. Role os dados!`);
        let numeroSorteadoJogador = rolarDado();
        alert(`Você tirou ${numeroSorteadoJogador}! Agora é a vez do seu oponente!`);
        let numeroSorteadoInimigo = rolarDado();

        if (numeroSorteadoJogador > numeroSorteadoInimigo) {
            energiaInimigo -= 1;
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou uma cesta! A energia dele agora é ${energiaInimigo}`);
        } else if (numeroSorteadoJogador < numeroSorteadoInimigo) {
            energiaJogador -= 1;
            alert(`O inimigo tirou ${numeroSorteadoInimigo} e fez uma cesta! Sua energia agora é ${energiaJogador}`);
        } else {
            alert("Empate! Ninguém marcou pontos.");
        }
    }

    if (energiaJogador <= 0) {
        alert("Você perdeu a partida! O treino acabou.");
    } else {
        alert("Você venceu a partida! A história continua....");
    }
}

    // Função para partida normal
    function partida() {
        let energiaTime = 5;
        let energiaInimigo = 5;
    
        while (energiaTime > 0 && energiaInimigo > 0) {
            alert(`A energia do seu time é ${energiaTime} e a energia do time inimigo é ${energiaInimigo}. Role os dados!`);
            let numeroSorteadoJogador = rolarDado();
            alert(`Você tirou ${numeroSorteadoJogador}! Agora é a vez do time inimigo!`);
            let numeroSorteadoInimigo = rolarDado();
    
            if (numeroSorteadoJogador > numeroSorteadoInimigo) {
                energiaInimigo -= 1;
                alert(`O time inimigo tirou ${numeroSorteadoInimigo}. Seu time fez uma cesta! A energia dele agora é ${energiaInimigo}`);
            } else if (numeroSorteadoJogador < numeroSorteadoInimigo) {
                energiaJogador -= 1;
                alert(`O time inimigo tirou ${numeroSorteadoInimigo} e fez uma cesta! A energia do seu time agora é ${energiaJogador}`);
            } else {
                alert("Empate! Ninguém marcou pontos.");
            }
        }
    
        if (energiaJogador <= 0) {
            alert("Você perdeu a partida! O jogo acabou.");
        } else {
            alert("Você venceu a partida! A história continua....");
        }
}

//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar(){
    const personagem = prompt(`Seja bem-vindo ao Carreira NBA! Escolha uma das opções: 
        1 - Começar a Carreira
        2 - Sair do Jogo`)

    switch(personagem){
        case "1":
            timeCollege = sortearHighSchool()
            altura = sortearAltura()
            alert(`O time sorteado foi ${timeCollege}! Você terá ${altura}m de altura!`) 
        break
        case "2":
            alert("Espero te ver novamente!")
        break
        default:
            alert("Isso não é uma opção! Recomeço do zero cabeçudo!")
    }
    if(timeCollege === "Duke"||"UConn"||"Purdue"||"Alabama"){
        iniciarJornadaEstrela()
    }
    else if(timeCollege === "North Carolina"||"South Carolina"||"Houston"||
    "Tennessee"||"Kentucky"||"Illinois"||"San Diego State"||"San Diego State"||
    "Arizona"||"Michigan State"||"Baylor") {
        iniciarJornadaAtleta()
    }
}


//************************************* Função para sortear o time do colegial *************************************
function sortearHighSchool() {
    const college = ["UConn","Purdue","Duke","North Carolina","South Carolina","Houston",
        "Alabama","Tennessee","Kentucky","Illinois","San Diego State","San Diego State",
        "Arizona","Michigan State","Baylor"];
  
    const sorteado = Math.floor(Math.random() * college.length);
    return college[sorteado];
  }

//************************************* Função para sortear a altura do jogador *************************************

  function sortearAltura() {
    const alturas = ["1,75", "1,76", "1,77", "1,78", "1,79", "1,80", 
    "1,81", "1,82", "1,83", "1,84", "1,85", "1,86", "1,87", "1,88", "1,89", 
    "1,90", "1,91", "1,92", "1,93", "1,94", "1,95", "1,96", "1,97", "1,98", "1,99", 
    "2,00", "2,01", "2,02", "2,03", "2,04", "2,05", "2,06", "2,07", "2,08", "2,09", 
    "2,10", "2,11", "2,12", "2,13", "2,14", "2,15"];
  
    const sorteado = Math.floor(Math.random() * alturas.length);
    return alturas[sorteado];
  }


//************************************* Funções para jornada de cada personagem *************************************

// Função para iniciar a jornada do atleta
function iniciarJornadaAtleta(){
    var habilidade = 0
    alert('AAAAAAA')
    const opcao1 = prompt(`Você está no colégio, oque você faz?
    1 - Treinar
    2 - Estudar técnicas
    3 - Dormir`)
    if(opcao1 == "1"){
        treino()
        habilidade+=2
        const opcao2 = prompt(`Você treinou e ficou com ${habilidade} pontos de habilidade, 
você tem tempo para fazer mais uma coisa, oque você faz?
        1 - Estudar técnicas
        2 - Dormir`)
        if(opcao2 == "1"){
            alert(`Você teve aulas sobre técnicas com o treinador. Habilidade: ${habilidade}`)
            habilidade+=1
        }
        else if(opcao2 == "2"){
            alert('Você dormiu até o final do intervalo')
        }
    }
    else if(opcao1 == "2"){
        alert('Você teve aulas sobre técnicas com o treinador')
        habilidade+=1
        const opcao2 = prompt(`Você estudou e ficou com ${habilidade} pontos de habilidade, 
você tem tempo para fazer mais uma coisa, oque você faz?
        1 - Treinar
        2 - Dormir`)
        if(opcao2 == "1"){
            treino()
            habilidade+=2
            alert(`Você treinou e ficou com ${habilidade} pontos de habilidade`)
        }
        else if(opcao2 == "2"){
            alert('Você dormiu, o técnico ficou um pouco bravo!')
        }
    }
    else if(opcao1 == "3"){
        alert('Você dormiu o intervalo inteiro, o técnico ficou nervoso!')
    }
    alert("Começou o Draft da NBA, veja a colocação em que você será selecionado!")    
    alert(`Você foi Draftado pelo ${sortearDraft()} na ${sortearAtleta()} posição! Parabéns!!`)
}

// Função para iniciar a jornada de uma estrela da NBA
function iniciarJornadaEstrela(){
    var habilidade = 0
    const opcao1 = prompt(`Você está no colégio, oque você faz?
        1 - Treinar
        2 - Estudar técnicas
        3 - Dormir`)
        if(opcao1 == "1"){
            treino()
            habilidade+=3
            const opcao2 = prompt(`Você treinou e ficou com ${habilidade} pontos de habilidade, 
você tem tempo para fazer mais uma coisa, oque você faz?
            1 - Estudar técnicas
            2 - Dormir`)
            if(opcao2 == "1"){
                habilidade+=2
                alert(`Você teve aulas sobre técnicas com o treinador. Habilidade: ${habilidade}`)
            }
            else if(opcao2 == "2"){
                alert('Você dormiu até o final do intervalo')
                habilidade++
            }
        }
        else if(opcao1 == "2"){
            alert('Você teve aulas sobre técnicas com o treinador')
            habilidade+=2
            const opcao2 = prompt(`Você estudou e ficou com ${habilidade} pontos de habilidade, 
você tem tempo para fazer mais uma coisa, oque você faz?
            1 - Treinar
            2 - Dormir`)
            if(opcao2 == "1"){
                treino()
                habilidade+=3
                alert(`Você treinou e ficou com ${habilidade} pontos de habilidade`)
            }
            else if(opcao2 == "2"){
                alert('Você dormiu, o técnico ficou um pouco bravo!')
                habilidade++
            }
        }
        else if(opcao1 == "3"){
            alert('Você dormiu o intervalo inteiro, o técnico ficou nervoso!')
            habilidade++
        }
        alert("Começou o Draft da NBA, veja a colocação em que você será selecionado!")    
        alert(`Você foi Draftado pelo ${sortearDraft()} na ${sortearEstrela()} posição! Parabéns!!`)
}

//************************************* Função para sortear o time no draft *************************************

function sortearDraft() {
    const times = ["Boston Celtics", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors", 
    "Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", "Indiana Pacers", "Miami Heat", "Milwaukee Bucks",
    "Orlando Magic", "Atlanta Hawks", "Charlotte Hornets", "Washington Wizards", "Boston Celtics", "Brooklyn Nets", 
    "New York Knicks", "Philadelphia 76ers", "Toronto Raptors", "Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", 
    "Indiana Pacers", "Miami Heat", "Milwaukee Bucks", "Orlando Magic", "Atlanta Hawks", "Charlotte Hornets", "Washington Wizards"];
  
    const sorteado = Math.floor(Math.random() * times.length);
    return times[sorteado];
  }

  //************************************* Função para sortear a posição das estrelas no draft *************************************

function sortearEstrela() {
    const posiçãoEstrela = ["1","2","3","4","5","6","7","8","9","10"];
  
    const sorteado1 = Math.floor(Math.random() * posiçãoEstrela.length);
    return posiçãoEstrela[sorteado1];
  }

 //************************************* Função para sortear a posição dos atletas no draft *************************************

function sortearAtleta() {
    const posiçãoAtleta = ["20", "21", "22", "23", "24", "25", "26", 
    "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", 
    "37", "38", "39", "40", "41", "42", "43", "44", "45", "46",
    "47", "48", "49", "50", "51", "52", "53", "54", "55", "56",
    "57", "58", "59", "60"];
  
    const sorteado2 = Math.floor(Math.random() * posiçãoAtleta.length);
    return posiçãoAtleta[sorteado2];
  }