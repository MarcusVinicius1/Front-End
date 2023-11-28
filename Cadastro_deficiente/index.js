const InputDeficiencia = document.getElementById('InputDeficiencia')
const InputNome = document.getElementById('InputNome')
const InputEmail = document.getElementById('InputEmail')
const InputCep = document.getElementById('InputCep')
const InputCpf = document.getElementById('InputCpf')
const inputFile = document.getElementById('inputFile')

const PrintImage = document.getElementById('PrintImage')
const PopUpAlerta = document.getElementById('PopUpAlerta')
const Info = document.getElementById('Info')
const InfoUserDataList = document.getElementById('InfoUserDataList')

const BottomPrintCard = document.getElementById('BottomPrintCard')

const BtnCadastrar = document.getElementById('BtnCadastrar')
const BtnFecharDataListUser = document.getElementById('BtnFecharDataListUser')
const BtnDeletarUser = document.getElementById('BtnDeletarUser')

const SpanCountUserCadastrado = document.getElementById('SpanCountUserCadastrado')

const PhotoUserDataList = document.getElementById('PhotoUserDataList')

const patternCep = /^[0-9]{5}-[0-9]{3}$/
const patternCpf = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/
const patternEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let CountPersonCadastrado = 0
let CounPersonMil = 0
let CountPersonMilhoes = 0

document.addEventListener('input', () => {
    VerifyInputValue()
})

InputCpf.addEventListener('input', () => {
    if (InputCpf.value.length === 3 || InputCpf.value.length === 7) {
        InputCpf.value += '.'
    }

    if (InputCpf.value.length === 11) {
        InputCpf.value += '-'
    }
})

InputCep.addEventListener('input', () => {
    if (InputCep.value.length === 5) {
        InputCep.value += '-'
    }
})

function VerifyInputValue() {
    if (!InputDeficiencia.value || !InputNome.value || !InputEmail.value || !InputCep.value || !InputCpf.value || !inputFile.value) {
        BtnCadastrar.disabled = true
        BtnCadastrar.style.cursor = 'not-allowed'
        BtnCadastrar.classList.remove('buttonHoverAddPersonList')
    }
    else {
        BtnCadastrar.disabled = false
        BtnCadastrar.style.cursor = 'pointer'
        BtnCadastrar.classList.add('buttonHoverAddPersonList')
    }
}

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target
    const file = inputFile.files[0]

    if (file) {
        const reader = new FileReader()

        reader.addEventListener('load', function(e) {
            const readerTarget = e.target

            const img = document.createElement('img')
            img.src = readerTarget.result
            img.classList = 'img'
            img.style.width = '100%'
            img.style.width = '100%'
            img.style.transform = 'translateX(0px)'
            PrintImage.innerHTML = ''

            PrintImage.appendChild(img)

            BtnCadastrar.onclick = () => {
                if (!patternEmail.test(InputEmail.value)) {
                    Info.textContent = 'Email invalido!'
                    PopUpAlerta.style.top = '20px'

                }else if (!patternCep.test(InputCep.value)) {
                    Info.textContent = 'Cep invalido!'
                    PopUpAlerta.style.top = '20px'

                }else if (!patternCpf.test(InputCpf.value)) {
                    Info.textContent = 'Cpf invalido!'
                    PopUpAlerta.style.top = '20px'

                }else {
                    CountPersonCadastrado++
                    PopUpAlerta.style.top = '-50px'

                    const Card = document.createElement('Card')
                    Card.classList = 'Card'
    
                    const PerfilUser = document.createElement('img')
                    PerfilUser.src = readerTarget.result
    
                    const Nome = document.createElement('div')
                    Nome.classList = 'Nome'
                    Nome.textContent = InputNome.value
    
                    const SpanIdUser = document.createElement('span')
                    SpanIdUser.textContent = Math.floor(Math.random() * 999999999)

                    Card.onclick = () => {
                        InfoUserDataList.style.display = 'block'

                        BtnFecharDataListUser.onclick = () => {
                            InfoUserDataList.style.display = 'none'
                        }

                        BtnDeletarUser.onclick = () => {
                            const DelConfirm = confirm('Tem certeza que quer deletar esse usuario')

                            if (DelConfirm == true) {
                                CountPersonCadastrado--
                                BottomPrintCard.removeChild(Card)
                                InfoUserDataList.style.display = 'none'

                                MilesCountPersonList()
                            }
                        }
                    }
    
                    BottomPrintCard.appendChild(Card)
                    Card.appendChild(PerfilUser)
                    Card.appendChild(Nome)
                    Card.appendChild(SpanIdUser)

                    function MilesCountPersonList() {
                        if (CountPersonCadastrado >= 1000 && CountPersonCadastrado <= 10000) {
                            CounPersonMil++
                            SpanCountUserCadastrado.textContent = `${CounPersonMil}K pessoas`
    
                            if (CountPersonCadastrado >= 10000) {
                                CountPersonMilhoes++
                                SpanCountUserCadastrado.textContent = `${CountPersonMilhoes}M pessoas`
                            }
    
                        }else {
                            SpanCountUserCadastrado.textContent = `${CountPersonCadastrado} pessoas`
                        }
                    }

                    MilesCountPersonList()
                    
                    InputDeficiencia.value = ''
                    InputNome.value = ''
                    InputEmail.value = ''
                    InputCep.value = ''
                    InputCpf.value = ''
                    inputFile.value = ''
                    img.src = ''
    
                    VerifyInputValue()
                }
            }
        })

        reader.readAsDataURL(file)
    }
})

addEventListener('keydown', ({keyCode}) => {
    if (keyCode == 13) BtnCadastrar.click()
})