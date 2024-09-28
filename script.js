//************************************* Funções que serão repetidas ao longo do jogo *************************************

let pontosHabilidade = 0
let time1 = sortearDraft()

// Função para definir a variável pontos de habilidade
function definirPontos(pontos) {
    pontosHabilidade = pontos
}

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
            energiaInimigo -= 1
            alert(`O oponente tirou ${numeroSorteadoInimigo}. Você acertou uma cesta! A energia dele agora é ${energiaInimigo}`);
        } else if (numeroSorteadoJogador < numeroSorteadoInimigo) {
            energiaJogador -= 1;
            alert(`O oponente tirou ${numeroSorteadoInimigo} e fez uma cesta! Sua energia agora é ${energiaJogador}`);
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

// Função para jogo da final da NBA
function jogoNbaFinal() {
    const time2 = sortearDraft()
    let pontosTime1 = 0;
    let pontosTime2 = 0;
    const pontosParaVencer = 20;
    alert(`Hoje é o dia que todos esperavam: a grande final da NBA, onde os gigantes do basquete se enfrentam sob os holofotes!`)
    alert(`Com cada drible e arremesso, o destino de campeões e desafortunados será decidido, e a emoção está no ar enquanto a torcida vibra, pronta para viver momentos inesquecíveis!`)
    alert(`Bem-vindo à Final da NBA!! ${time1} contra ${time2}. Quem será o campeão???`);
    while (pontosTime1 < pontosParaVencer && pontosTime2 < pontosParaVencer) {
        alert(`Placar: ${time1}: ${pontosTime1} | ${time2}: ${pontosTime2}. Role os dados!`);
        let numeroSorteadoTime1 = rolarDado();
        alert(`Vocês tiraram ${numeroSorteadoTime1}! Agora é a vez deles!`);
        let numeroSorteadoTime2 = rolarDado();
        alert(`Eles tiraram ${numeroSorteadoTime2}!`);

        if (numeroSorteadoTime1 > numeroSorteadoTime2) {
            pontosTime1 += 2
            alert(`${time1} marcou uma cesta! Placar: ${pontosTime1}.`);
        } else if (numeroSorteadoTime1 < numeroSorteadoTime2) {
            pontosTime2 += 2
            alert(`${time2} marcou uma cesta! Placar: ${pontosTime2}.`);
        } else {
            alert("Empate! Nenhum time marcou pontos nesta rodada.");
        }
    }
    if (pontosTime1 >= pontosParaVencer) {
        alert("Vocês venceram a partida!!! Parabéns, vocês são os campeões da NBA!!! 🥇");
    } else {
        alert("Os oponentes venceram!😔 Vocês tentaram o seu máximo, mas infelizmente não conseguiram! 🥈");
    }
}

   //************************************* Função para avaliar a ação do jogador em uma partida *************************************

   function acaoJogador() {
    const opcao = prompt(`Escolha uma ação: 
1 - Cesta de 3 pontos 🏹
2 - Enterrada 💪
3 - Passe 🏀
4 - Drible 🖐`);
    let resultado;
    switch (opcao) {
        case '1':
            if (pontosHabilidade >= 50) {
                resultado = `Você acertou a cesta de 3 pontos!! Torcida comemorou! 🏹🔥 
                (+5 pontos de habilidade)`;
                pontosHabilidade+=5
            } else {
                resultado = `Você falhou na cesta de 3 pontos. 
Pelo visto você não tem habilidade suficiente.`;
            }
            break;
        case '2':
            if (pontosHabilidade >= 30) {
                resultado = `Você acertou a enterrada!! A torcida foi a loucura! 💪🔥 
                (+5 pontos de habilidade)`;
                pontosHabilidade+=5
            } else {
                resultado = `Você falhou na enterrada. 
Pelo visto você não tem habilidade suficiente.`;
            }
            break;
        case '3':
            if (pontosHabilidade >= 10) {
                resultado = `Você acertou o passe e fez uma assistência!! 🏀🔥 
                (+5 pontos de habilidade)`;
                pontosHabilidade+=5
            } else {
                resultado = `Você falhou no passe. 
Pelo visto você não tem habilidade suficiente.`;
            }
            break;
        case '4':
            if (pontosHabilidade >= 20) {
                resultado = `Você acertou o drible!! Seu técnico se surpreendeu! 🖐🔥 
                (+5 pontos de habilidade)`;
                pontosHabilidade+=5
            } else {
                resultado = `Você falhou no drible. 
Pelo visto você não tem habilidade suficiente.`;
            }
            break;
        default:
            resultado = "Opção inválida!";
    }
    alert(resultado);
}

function acaoJogador2() {
    const opcao = prompt(`Escolha uma ação: 
1 - Arremessar de 3 pontos 🏹
2 - Cortar e driblar pro garrafão 🖐
3 - Passar para o pivô 🏀`);
    let resultado;
    switch (opcao) {
        case '1':
            resultado = 'Você tentou arremessar marcado mas tomou um toco humilhante. 🤕'
            break;
        case '2':
            if (pontosHabilidade >= 30) {
                resultado = `Você acertou o corte e fez uma ótima bandeija!! 🖐🔥
                (+5 pontos de habilidade)`;
                pontosHabilidade+=5
            } else {
                resultado = `Você falhou no corte e o time oponente acertou um contra-ataque. 
Pelo visto você não tem habilidade suficiente.`;
            }
            break;
        case '3':
            resultado = `Você fez um passe quicado para o seu pivô e ele acertou um gancho!! Ótima assistência! 🏀🔥 
            (+5 pontos de habilidade)`;
            pontosHabilidade+=5
            break;
        default:
            resultado = "Opção inválida!";
    }
    alert(resultado);
}

function acaoJogador3() {
    const opcao = prompt(`Escolha uma ação: 
1 - Arremessar do meio da quadra 🏹
2 - Segurar a bola até acabar a partida 🖐
3 - Passar para o ala avançado 🏀`);
    let resultado;
    switch (opcao) {
        case '1':
            if (pontosHabilidade >= 55) {
                resultado = `Com um toque de mágica e a pressão do tempo, ele arremessa de longe e a bola voa em arco perfeito, caindo na rede como se o destino estivesse ao seu favor! 🔥🔥🔥`;
                pontosHabilidade+=5
            } else {
                resultado = `Na última tentativa, ele se prepara para a cesta, mas a pressão é demais. A bola se despede do aro, e com isso, a vitória escorrega pelas mãos do time, deixando a torcida em silêncio e o adversário em êxtase.`;
            }
            break;
        case '2':
            resultado = `Você tenta segurar a bola e ganhar de 1 ponto de diferença, mas o seu marcador consegue roubar a bola e marcar uma bandeija para virar a partida faltando 5 segundo para acabar! `
            break;
        case '3':
            resultado = `Você passa o ala que estava a frente, ele recebe o passe e consegue fazer uma bandeija milagrosa! Aumenta a diferença e vocês ganham a partida!! 🙌`;
            break;
        default:
            resultado = "Opção inválida!";
    }
    alert(resultado);
}

//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar() {
    const personagem = prompt(`Seja bem-vindo ao Carreira NBA! Escolha uma das opções: 
        1 - Começar a Carreira
        2 - Sair do Jogo`);

    switch (personagem) {
        case "1":
            const timeCollege = sortearHighSchool();
            const altura = sortearAltura();
            alert(`Você joga pelo colégio ${timeCollege}!! Você tem ${altura}m de altura! 
Vamos começar...`);
            if (["Duke", "UConn", "Purdue", "Alabama"].includes(timeCollege)) {
                iniciarJornadaEstrela();
            } else {
                iniciarJornadaAtleta();
            }
            break;
        case "2":
            alert("Espero te ver novamente!");
            break;
        default:
            alert("Isso não é uma opção! Recomeço do zero cabeçudo!");
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
    const opcao1 = prompt(`Você está no colégio, oque você faz?
        1 - Treinar 🏀
        2 - Estudar técnicas 🧠
        3 - Dormir 😪`)
    if(opcao1 == "1"){
        treino()
        pontosHabilidade+=20
        const opcao2 = prompt(`Você treinou e ficou com ${pontosHabilidade} pontos de habilidade, 
você tem tempo para fazer mais uma coisa, oque você faz?
        1 - Estudar técnicas 🧠
        2 - Dormir 😪`)
        if(opcao2 == "1"){
            pontosHabilidade+=20
            alert(`Você teve aulas sobre técnicas com o treinador. 
Habilidade: ${pontosHabilidade}`)
        }
        else if(opcao2 == "2"){
            pontosHabilidade+=5
            alert(`Você dormiu até o final do intervalo! 
Habilidade: ${pontosHabilidade}`)
        }
    }
    else if(opcao1 == "2"){
        alert('Você teve aulas sobre técnicas com o treinador.')
        pontosHabilidade+=20
        const opcao2 = prompt(`Você estudou e ficou com ${pontosHabilidade} pontos de habilidade, 
você tem tempo para fazer mais uma coisa, oque você faz?
        1 - Treinar 🏀
        2 - Dormir 😪`)
        if(opcao2 == "1"){
            treino()
            pontosHabilidade+=20
            alert(`Você treinou e ficou com ${pontosHabilidade} pontos de habilidade.`)
        }
        else if(opcao2 == "2"){
            pontosHabilidade+=5
            alert(`Você dormiu, o técnico ficou um pouco bravo! 
Habilidade: ${pontosHabilidade}`)
        }
    }
    else if(opcao1 == "3"){
        pontosHabilidade+=10
        alert(`Você dormiu o intervalo inteiro, o técnico ficou nervoso! 
Habilidade: ${pontosHabilidade}`)
    }
    alert("Começou o Draft da NBA 💪! Veja se você será Draftado!")    
    alert(`Você foi Draftado pelo ${time1} na ${sortearAtleta()} posição! 
Parabéns! 🎉🎉`)
    estreiaNba()
}

// Função para iniciar a jornada de uma estrela da NBA
function iniciarJornadaEstrela(){
    const opcao1 = prompt(`Você está no colégio, oque você faz?
        1 - Treinar 🏀
        2 - Estudar técnicas 🧠
        3 - Dormir 😪`)
        if(opcao1 == "1"){
            treino()
            pontosHabilidade+=30
            const opcao2 = prompt(`Você treinou e ficou com ${pontosHabilidade} pontos de habilidade, 
você tem tempo para fazer mais uma coisa, oque você faz?
            1 - Estudar técnicas 🧠
            2 - Dormir 😪`)
            if(opcao2 == "1"){
                pontosHabilidade+=20
                alert(`Você teve aulas sobre técnicas com o treinador. 
Habilidade: ${pontosHabilidade}`)
            }
            else if(opcao2 == "2"){
                pontosHabilidade+=10
                alert(`Você dormiu até o final do intervalo! 
Habilidade: ${pontosHabilidade}`)
            }
        }
        else if(opcao1 == "2"){
            alert('Você teve aulas sobre técnicas com o treinador.')
            pontosHabilidade+=20
            const opcao2 = prompt(`Você estudou e ficou com ${pontosHabilidade} pontos de habilidade, 
você tem tempo para fazer mais uma coisa, oque você faz?
            1 - Treinar 🏀
            2 - Dormir 😪`)
            if(opcao2 == "1"){
                treino()
                pontosHabilidade+=30
                alert(`Você treinou e ficou com ${pontosHabilidade} pontos de habilidade`)
            }
            else if(opcao2 == "2"){
                pontosHabilidade+=10
                alert(`Você dormiu, o técnico ficou um pouco bravo!
Habilidade: ${pontosHabilidade}`)
            }
        }
        else if(opcao1 == "3"){
            pontosHabilidade+=20
            alert(`Você dormiu o intervalo inteiro, o técnico ficou nervoso!
Habilidade: ${pontosHabilidade}`)
        }
    alert("Começou o Draft da NBA 💪! Veja a colocação em que você será selecionado!")    
    alert(`Você foi Draftado pelo ${time1} na ${sortearEstrela()} posição!!! 
Grande promessa 🔥🔥`)
    estreiaNba()
}

//************************************* Função para sortear o time no draft *************************************

function sortearDraft() {
    const times = [
        "Atlanta Hawks 🦅",
        "Boston Celtics 🍀🤮",
        "Brooklyn Nets 🌇",
        "Charlotte Hornets 🐝",
        "Chicago Bulls 🐂",
        "Cleveland Cavaliers 🏹",
        "Dallas Mavericks 🐴",
        "Denver Nuggets 🗻",
        "Detroit Pistons 🔩",
        "Golden State Warriors 🌉",
        "Houston Rockets 🚀",
        "Indiana Pacers 🦵",
        "Los Angeles Clippers 📎",
        "Los Angeles Lakers 🌊",
        "Memphis Grizzlies 🐻",
        "Miami Heat 🔥",
        "Milwaukee Bucks 🦌",
        "Minnesota Timberwolves 🐺",
        "New Orleans Pelicans 🦢",
        "New York Knicks 🗽",
        "Oklahoma City Thunder ⚡",
        "Orlando Magic 🌠",
        "Philadelphia 76ers ⭐",
        "Phoenix Suns 🌞",
        "Portland Trail Blazers 🛑",
        "Sacramento Kings 👑",
        "San Antonio Spurs 👤",
        "Toronto Raptors 🦖",
        "Utah Jazz 🎷",
        "Washington Wizards 🧙"
    ];
    const sorteado = Math.floor(Math.random() * times.length);
    const timeSorteado = times[sorteado]
    times.splice(sorteado, 1);

    return timeSorteado;
  }

  //************************************* Função para sortear a posição das estrelas no draft *************************************

function sortearEstrela() {
    const posiçãoEstrela = ["1º","2º","3º","4º","5º","6º","7º","8º","9º","10º"];
  
    const sorteado1 = Math.floor(Math.random() * posiçãoEstrela.length);
    return posiçãoEstrela[sorteado1];
  }

 //************************************* Função para sortear a posição dos atletas no draft *************************************

function sortearAtleta() {
    const posiçãoAtleta = ["20º", "21º", "22º", "23º", "24º", "25º", "26º", 
    "27º", "28º", "29º", "30º", "31º", "32º", "33º", "34º", "35º", "36º", 
    "37º", "38º", "39º", "40º", "41º", "42º", "43º", "44º", "45º", "46º",
    "47º", "48º", "49º", "50º", "51º", "52º", "53º", "54º", "55º", "56º",
    "57º", "58º", "59º", "60º"];
  
    const sorteado2 = Math.floor(Math.random() * posiçãoAtleta.length);
    return posiçãoAtleta[sorteado2];
  }
//************************************* Função para os jogos na NBA *************************************

function estreiaNba(){
    const inicioNba = prompt('Essa é sua estreia na NBA!! Está preparado?? (S ou N)')
    const time2 = sortearDraft()
    if (inicioNba === "S"){
        alert(`${time1} x ${time2}`)
        alert(`Seu primeiro jogo vai ser contra o ${time2}! Você entrou no inicio do segundo quarto e você recebe a bola...`)
        acaoJogador()
        alert('5 minutos do terceiro quarto, você recebe a bola na linha de 3 mas você está sendo marcado...')
        acaoJogador2()
        alert('Últimos 20 segundos de jogo! Você pegou o rebote defensivo, seu time está ganhando de 1 ponto...')
        acaoJogador3()
        const fimDaPartida = prompt('Acabou a partida! Você deseja continuar?? (S ou N)')
            if(fimDaPartida === 'S'){
                jogoNbaFinal()
            }
            else if(fimDaPartida === 'N'){
                alert('Você não quis continuar jogando! Seu time não conseguiu se classificar para a Semi-Final!')
                jornada()
            }
            else {
                alert('Digite uma opção válida!')
            }
    } else if(inicioNba === 'N') {
        alert('Você teve um mau início de carreira! Seu time perdeu e não classificou para os Playoffs!')
        jornada()
    } else{
        alert('Digite uma opção válida')
        estreiaNba()
    }
  }

  //************************************* Função para jornada caso o jogador não se classificou *************************************

function jornada(){
    alert(`Começou uma nova temporada da NBA! Primeira partida será contra o ${sortearDraft()}!`)
    alert('Você começou como titular, 5 minutos do primeiro quarto, você recebe a bola na linha de 3 mas você está sendo marcado...')
    acaoJogador2()
    alert('Você recebe a bola livre...')
    acaoJogador()
    alert('Segundo Quarto, você recebe a bola na linha de 3 sendo marcado...')
    acaoJogador2()
    alert('Terceiro quarto, você recebe a bola livre na linha de 3...')
    acaoJogador()
    const fimDaPartida = prompt('A partida terminou! Você deseja continuar?? (S ou N)')
        if(fimDaPartida === 'S'){
            jogoNbaFinal()
        }
        else if(fimDaPartida === 'N'){
             alert('Você não quis continuar jogando! Seu time não conseguiu se classificar para os Playoffs!')
             jornada()
         }
         else {
             alert('Digite uma opção válida!')
         }
}