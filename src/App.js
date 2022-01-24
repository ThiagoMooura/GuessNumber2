import React, {useState} from 'react';
import './App.css';
import Logo from './images/img2.png'


let random = Math.floor(Math.random() * 300);
console.log(random);

export default function App() {
  const refreshPage = () => {
    window.location.reload();
    
  };

  const [num1, setNum1] = useState("");
  const [resposta, setResposta] = useState("⠀");
  const [tentativas, setTentativas] = useState(0)

  const [estado, setEstado] = useState('INICIO')

  const jogar = () => {
    setEstado('JOGO')
  }

  const gameOver = () => {
    setEstado('GAMEOVER')
  }

  const reiniciar = () => {
    setEstado('INICIO')
    refreshPage();
  }

  if(estado == 'INICIO'){
    return(
      <section className="inicio">

        <div className="inicio-content-wrap">

          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <div className="instrucoes-wrap">
            <div className="instrucoes">
              <h3><span>instruções:</span> Tente adivinhar o numero de 0 a 300 que o React escolheu.</h3>
            </div>
          </div>

          <div className="inicio-btns-wrap">
            <button onClick={jogar} className="btn-inicio">JOGAR</button>
            <a className="link-inicio" href="https://thiago-moura.netlify.app/" target='_blank'>CRÉDITOS</a>
          </div>
        
        </div>
      </section>
    )
  }

  const enter = (e) => {
    if (e.key === "Enter") {
      verificacao();
    }
  };

  const verificacao = () => {
    setNum1("");
    if (num1 < random) {
      setResposta(`+ ${num1}`);
      setTentativas(tentativas+1)
    }
    if (num1 > random) {
      setResposta(`- ${num1}`);
      setTentativas(tentativas+1)
    }
    if (num1 == random) {
      setTentativas(tentativas+1)
      gameOver()
    }
  };

  if(estado == 'JOGO'){
  return (
    <section className="jogo">

      <div className="full-wrap">
        <div className="logo alt">
              <img src={Logo} alt="" />
        </div>

        <div className="jogo-wrap">
          <div className="input-wrap">
            <input
              type="text"
              value={num1}
              onKeyDown={enter}
              onChange={(e) => {
                setNum1(e.target.value);
              }}
              placeholder='Seu palpite'
            />
            <button className='send' onClick={verificacao}>Enviar</button>
          </div>
          <div className="resposta">
            <h1>{resposta}</h1>
            </div>
        </div>
      </div>

    </section>
  );
}

  if(estado == 'GAMEOVER'){
    return(
      <section className="fim">

      <div className="fim-wrap">     
        <div className="fim-content">
          <h1>PARABENS VOCE ACERTOU EM {tentativas} TENTATIVAS</h1>
        </div> 

        <button onClick={reiniciar} className="btn-inicio alt">Jogar novamente</button>
      </div>

    </section>
    )
  }

}