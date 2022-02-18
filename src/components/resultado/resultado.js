import React from 'react'
import './resultado.scss'

export const getApi = (event, props) => {
  console.log(props)
  event.preventDefault()
  fetch(
    `http://localhost:3000/simulacoes?tipoIndexacao=${props.buttonIndex}&tipoRendimento=${props.buttonRendimento}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'localhost:3000'
      }
    }
  )
    .then(response => response.json())
    .then(response => {
      props.objetoRes = response

      if (!props.objetoRes.length <= 0) {
        props.objetoRes.forEach(m => {
          let resultadoSimulador = document.getElementById('res')
          resultadoSimulador.innerHTML = `
          <h1 class='titulo-secundario simulacao'>
            Resultado de Simulação
          </h1>
          <div class='grid' id='camposRes'>
              <div class='card-itens'>
                <h3 class='titulo-card'>Valor final Bruto</h3>
                <p class='values'>
                  R$ ${m.valorFinalBruto}
                </p>
              </div>
              <div class='card-itens'>
                <h3 class='titulo-card'>Alíquota do IR</h3>
                <p class='values'>
                  ${m.aliquotaIR}%
                </p>
              </div>
              <div class='card-itens'>
                <h3 class='titulo-card'>Valor Pago em IR</h3>
                <p class='values'>
                  R$ ${m.valorPagoIR}
                </p>
              </div>
              <div class='card-itens'>
                <h3 class='titulo-card'>Valor Final Líquido</h3>
                <p class='values total'>
                  R$ ${m.valorFinalLiquido}
                </p>
              </div>
              <div class='card-itens'>
                <h3 class='titulo-card'>Valor Total Investido</h3>
                <p class='values'>
                  R$ ${m.valorTotalInvestido}
                </p>
              </div>
              <div class='card-itens'>
                <h3 class='titulo-card'>Ganho Líquido</h3>
                <p class='values total'>
                  R$ ${m.ganhoLiquido}
                </p>
              </div>
          </div>
          `
          resultadoSimulador.style.opacity = 1
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
}

class Resultado extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      props
    }
  }

  render () {
    return <div id='res' />
  }
}

export default Resultado
