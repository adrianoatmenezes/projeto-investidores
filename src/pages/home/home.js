import React from 'react'
import Indexacao from '../../components/indexacao/indexacao'
import Rendimento from '../../components/rendimento/rendimento'
import Resultado, { getApi } from '../../components/resultado/resultado'
import './home.scss'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      aporteInicial: '',
      prazo: '',
      ipca: '',
      aporteMensal: '',
      rentabilidade: '',
      cdi: '',
      objetoRes: [],
      buttonRendimento: '',
      buttonIndex: '',
      valid: false
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('btnGetApi').setAttribute('disabled', 'disabled')
    })

    this.setarValores = this.setarValores.bind(this)
    this.getButtons = this.getButtons.bind(this)
  }

  getButtons (e, valor) {
    e.preventDefault()
    this.setState(valor)
    if (valor.buttonIndex === 'fixado') {
      alert('não contem!')
    }
  }

  setarValores (valor) {
    this.setState(valor)
  }

  pegarValor (event) {
    event.preventDefault()
  }

  limparCampos (event) {
    event.preventDefault()
    this.setState({
      aporteInicial: '',
      prazo: '',
      ipca: '',
      aporteMensal: '',
      rentabilidade: '',
      cdi: '',
      valid: false
    })
  }

  render () {
    return (
      <section className='card-investimentos container'>
        <h1 className='titulo-principal'>Simulador de Investimentos</h1>
        <div className='row mt-5'>
          {/* Simulador */}
          <section id='inputs-simulador' className='col-md-6'>
            <h1 className='titulo-secundario'>Simulador</h1>
            <form>
              <div className='row' id='inputs'>
                <div className='col-md-6 rendimento'>
                  {/* Menu Rendimento */}
                  <Rendimento
                    state={this.state}
                    setarValores={this.setarValores}
                    getButtons={this.getButtons}
                  />
                </div>
                {/* Menu indexação */}
                <div className='col-md-6 indexacao'>
                  <Indexacao
                    state={this.state}
                    setarValores={this.setarValores}
                    getButtons={this.getButtons}
                  />
                </div>
              </div>
              <div className='buttons-bottom'>
                <button
                  className='btn-bottom'
                  onClick={e => this.limparCampos(e)}
                >
                  Limpar campos
                </button>
                <button
                  className='btn-bottom'
                  onClick={e => getApi(e, this.state)}
                  type='button'
                  id='btnGetApi'
                >
                  Simular
                </button>
              </div>
            </form>
          </section>
          {/* Resultado do Simulador */}
          <section id='resultadoSimulador' className='col-md-6'>
            <Resultado state={this.state} setState={this.setState} />
          </section>
        </div>
      </section>
    )
  }
}

export default Home
