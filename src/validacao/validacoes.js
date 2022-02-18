import $ from 'jquery'

function Validacao (mensagem, props) {
  const regex = new RegExp('[^A-z]')

  let mask = require('jquery-mask-plugin')
  $.mask = mask
  window.mask = mask

  if (regex.test(props.aporteInicial)) {
    mensagem.aporteErr = ''
    $('#aporteInicial').mask('R$ 999.999.999,99', { reverse: false })
  } else {
    mensagem.aporteErr = 'Aporte deve ser um número'
    $('#aporteInicial').mask('').unmask()
  }

  if (regex.test(props.aporteMensal)) {
    mensagem.aporteMensalErr = ''
    $('#aporteMensal').mask('R$ 999.999.999,99', { reverse: false })
  } else {
    mensagem.aporteMensalErr = 'Aporte deve ser um número'
    $('#aporteMensal').mask('').unmask()
  }

  if (regex.test(props.prazo)) {
    mensagem.prazoErr = ''
    parseFloat(props.prazo)
    $('#prazo').mask('99.99')
  } else {
    mensagem.prazoErr = 'Prazo deve ser um número'
    $('#prazo').mask('').unmask()
  }

  if (regex.test(props.ipca)) {
    mensagem.ipcaErr = ''
    $('#ipca').mask('99.99')
  } else {
    mensagem.ipcaErr = 'IPCA deve ser um número'
    $('#ipca').mask('').unmask()
  }

  if (regex.test(props.rentabilidade)) {
    mensagem.rentErr = ''
    $('#rentabilidade').mask('99.99')
  } else {
    mensagem.rentErr = 'Rentabilidade deve ser um número'
    $('#rentabilidade').mask('').unmask()
  }

  if (regex.test(props.cdi)) {
    mensagem.cdiErr = ''
    $('#cdi').mask('99.99')
  } else {
    mensagem.cdiErr = 'CDI deve ser um número'
    $('#cdi').mask('').unmask()
  }

  if (
    mensagem.prazoErr === '' &&
    mensagem.aporteErr === '' &&
    mensagem.ipcaErr === '' &&
    mensagem.aporteMensalErr === '' &&
    mensagem.rentErr === '' &&
    mensagem.cdiErr === '' &&
    props.buttonIndex !== '' &&
    props.buttonRendimento !== '' &&
    props.aporteInicial !== '' &&
    props.prazo !== '' &&
    props.ipca !== '' &&
    props.aporteMensalErr !== '' &&
    props.rentErr !== '' &&
    props.cdiErr !== '' &&
    props.aporteInicial.length > 1 &&
    props.prazo.length > 1 &&
    props.ipca.length > 1 &&
    props.aporteMensal.length > 1 &&
    props.rentabilidade.length > 1 &&
    props.cdi.length > 1
  ) {
    props.valid = true
  } else {
    props.valid = false
  }

  if (props.valid) {
    document.getElementById('btnGetApi').removeAttribute('disabled')
  } else {
    document.getElementById('btnGetApi').setAttribute('disabled', 'disabled')
  }
}

export default Validacao
