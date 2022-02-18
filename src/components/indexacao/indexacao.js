import React from 'react'
import './indexacao.scss'
import validacoes from '../../validacao/validacoes'

class Indexacao extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      aporteMensalErr: '',
      rentErr: '',
      cdiErr: ''
    }
  }
  render () {
    document.addEventListener('DOMContentLoaded', () => {
      let btnPre = document.getElementById('pre')
      let btnPos = document.getElementById('pos')
      let btnFix = document.getElementById('fixado')
      let certPre = document.getElementById('certPre')
      let certPos = document.getElementById('certPos')
      let certFix = document.getElementById('certFix')

      btnPre.addEventListener('click', () => {
        certPre.style.display = 'initial'
        certPos.style.display = 'none'
        certFix.style.display = 'none'
        btnPre.classList.add('select')
        btnPos.classList.remove('select')
        btnFix.classList.remove('select')
      })

      btnPos.addEventListener('click', () => {
        certPre.style.display = 'none'
        certPos.style.display = 'initial'
        certFix.style.display = 'none'
        btnPos.classList.add('select')
        btnPre.classList.remove('select')
        btnFix.classList.remove('select')
      })

      btnFix.addEventListener('click', () => {
        certPre.style.display = 'none'
        certPos.style.display = 'none'
        certFix.style.display = 'initial'
        btnFix.classList.add('select')
        btnPre.classList.remove('select')
        btnPos.classList.remove('select')
      })
    })
    return (
      <section id='indexacao'>
        <h2 className='texto-rendimento'>Tipos de Indexação</h2>
        <div className='mb-4 buttons-index'>
          <button
            className='btn-escolha-index'
            onClick={e =>
              this.props.getButtons(e, {
                buttonIndex: e.target.id
              })}
            id='pre'
          >
            <i id='certPre'>✔</i>
            PRÉ
          </button>
          <button
            className='btn-escolha-index'
            id='pos'
            onClick={e =>
              this.props.getButtons(e, {
                buttonIndex: e.target.id
              })}
          >
            <i id='certPos'>✔</i>
            POS
          </button>
          <button
            className='btn-escolha-index'
            id='fixado'
            onClick={e =>
              this.props.getButtons(e, {
                buttonIndex: e.target.id
              })}
          >
            <i id='certFix'>✔</i>
            FIXADO
          </button>
        </div>

        <div className='mb-3'>
          <label htmlFor='prazo' className='label-dados'>
            Aporte Mensal
          </label>
          <input
            type='text'
            id='aporteMensal'
            className='input-dados'
            value={this.props.state.aporteMensal}
            onChange={e =>
              this.props.setarValores({ aporteMensal: e.target.value })}
          />
          <div style={{ color: 'red' }}>
            {this.props.state.aporteMensal.length > 0
              ? validacoes(this.state, this.props.state) ||
                this.state.aporteMensalErr
              : ''}
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor='prazo' className='label-dados'>
            Rentabilidade
          </label>
          <input
            type='text'
            id='rentabilidade'
            className='input-dados'
            value={this.props.state.rentabilidade}
            onChange={e =>
              this.props.setarValores({ rentabilidade: e.target.value })}
          />
          <div style={{ color: 'red' }}>
            {this.props.state.rentabilidade.length > 0
              ? validacoes(this.state, this.props.state) || this.state.rentErr
              : ''}
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor='prazo' className='label-dados'>
            CDI (ao ano)
          </label>
          <input
            type='text'
            id='cdi'
            className='input-dados'
            value={this.props.state.cdi}
            onChange={e => this.props.setarValores({ cdi: e.target.value })}
          />
          <div style={{ color: 'red' }}>
            {this.props.state.cdi.length > 0
              ? validacoes(this.state, this.props.state) || this.state.cdiErr
              : ''}
          </div>
        </div>
      </section>
    )
  }
}

export default Indexacao
