import React from 'react'
import validacoes from '../../validacao/validacoes'
import './rendimento.scss'

class Rendimento extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      aporteErr: '',
      prazoErr: '',
      ipcaErr: ''
    }
  }
  render () {
    document.addEventListener('DOMContentLoaded', () => {
      let btnBruto = document.getElementById('bruto')
      let btnLiq = document.getElementById('liquido')
      let certRend = document.getElementById('certRendimento')
      let certLiquido = document.getElementById('certLiquido')

      btnBruto.addEventListener('click', () => {
        btnBruto.classList.add('select')
        certRend.style.display = 'initial'
        certLiquido.style.display = 'none'
        btnLiq.classList.remove('select')
      })

      btnLiq.addEventListener('click', () => {
        btnLiq.classList.add('select')
        certRend.style.display = 'none'
        certLiquido.style.display = 'initial'
        btnBruto.classList.remove('select')
      })
    })
    return (
      <section id='rendimento'>
        {/* Menu Rendimento */}
        <h2 className='texto-rendimento'>Rendimento</h2>
        <div className='mb-4 buttons-rendimentos'>
          <button
            className='btn-escolha-rendimento'
            id='bruto'
            onClick={e =>
              this.props.getButtons(e, {
                buttonRendimento: e.target.id
              })}
          >
            <i id='certRendimento'>✔</i>
            Bruto
          </button>

          <button
            className='btn-escolha-rendimento'
            id='liquido'
            onClick={e =>
              this.props.getButtons(e, {
                buttonRendimento: e.target.id
              })}
          >
            <i id='certLiquido'>✔</i>
            Liquido
          </button>
        </div>
        <div className='mb-3'>
          <label
            htmlFor='aporteInicial'
            className='label-dados'
            id='label-aporteInicial'
          >
            Aporte Inicial
          </label>
          <input
            type='text'
            id='aporteInicial'
            className='input-dados'
            value={this.props.state.aporteInicial}
            onChange={e => {
              this.props.setarValores({
                aporteInicial: e.target.value
              })
            }}
            required
          />
          <div style={{ color: 'red' }}>
            {this.props.state.aporteInicial.length > 0
              ? validacoes(
                  this.state,
                  this.props.state,
                  this.props.setarValores
                ) || this.state.aporteErr
              : ''}
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='prazo' className='label-dados'>
            Prazo (em meses)
          </label>
          <input
            type='text'
            id='prazo'
            className='input-dados'
            value={this.props.state.prazo}
            onChange={e => {
              this.props.setarValores({ prazo: e.target.value })
            }}
          />
          <div style={{ color: 'red' }}>
            {this.props.state.prazo.length > 0
              ? validacoes(this.state, this.props.state) || this.state.prazoErr
              : ''}
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='prazo' className='label-dados'>
            IPCA (ao ano)
          </label>
          <input
            type='text'
            id='ipca'
            className='input-dados'
            value={this.props.state.ipca}
            onChange={e => {
              this.props.setarValores({ ipca: e.target.value })
            }}
          />
          <div style={{ color: 'red' }}>
            {this.props.state.ipca.length > 0
              ? validacoes(this.state, this.props.state) || this.state.ipcaErr
              : ''}
          </div>
        </div>
      </section>
    )
  }
}

export default Rendimento
