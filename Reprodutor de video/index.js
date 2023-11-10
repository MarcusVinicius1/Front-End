const Movies = ['videos/videoUm.mp4','videos/videoDois.mp4','videos/videoTrez.mp4','videos/videoQuatro.mp4']
let CountMovieLista = 0

// Formatando numeros com zero na frente se o numero for menor que 10
const FormatNumeros = n => (n < 10 ? n = `0${n}` : n)

// Regex
const regexEmail =  /^(https?|ftp):\/\/[^\s/ $.?#].[^\s]*$/i
const patternUrl= new RegExp(regexEmail)

// Btn
const BtnPlay = document.getElementById('BtnPlay')
const BtnPause = document.getElementById('BtnPause')
const BtnDownload = document.getElementById('BtnDownload')
const BtnDownloadInLink = document.getElementById('BtnDownloadInLink')
const BtnBaixarPorLink = document.getElementById('BtnBaixarPorLink')
const BtnbaixarDireto = document.getElementById('BtnbaixarDireto')
const BtnCancelarDownload = document.getElementById('BtnCancelarDownload')
const PictureInPicture = document.getElementById('PictureInPicture')
const BtnNextMovie = document.getElementById('BtnNextMovie')
const BtnBacktMovie = document.getElementById('BtnBacktMovie')
const BtnVolume = document.getElementById('BtnVolume')
const BtnProcurarMovie = document.getElementById('BtnProcurarMovie')
const BtnHistorico = document.getElementById('BtnHistorico')

// Conteudo ou canpo de texto
const VideoPlay = document.getElementById('VideoPlay')
const PrintVideo = document.getElementById('PrintVideo')
const InputUrl = document.getElementById('InputUrl')
const PrintVolume = document.getElementById('PrintVolume')

// Tempo de video
const ContainerProgress = document.getElementById('ContainerProgress')
const Progressbarra = document.getElementById('Progressbarra')
const PrintCurrentTime = document.getElementById('PrintCurrentTime')
const TimeCurrentMovie = document.getElementById('TimeCurrentMovie')
const ControlsPlayer = document.getElementById('ControlsPlayer')

// PopUp
const ContainerInsetLink = document.getElementById('ContainerInsetLink')
const ContainerVolume = document.getElementById('ContainerVolume')
const PrintPlaylistMovie = document.getElementById('PrintPlaylistMovie')
const HistoricoDownload = document.getElementById('HistoricoDownload')

// Input
const InputVolume = document.getElementById('InputVolume')

// Criando tag video
const VideoTag = document.createElement('video')
VideoTag.classList = 'video'
VideoTag.src = Movies[CountMovieLista]
VideoTag.volume = 0.5

PrintVideo.appendChild(VideoTag)

BtnHistorico.addEventListener('click', () => {
  HistoricoDownload.classList.toggle('ToggleHistoricoDownload')
})

BtnProcurarMovie.addEventListener('click', () => {
  PrintPlaylistMovie.classList.toggle('TogglePlaylistMovie')
})

// Statuz do video
function StatuzVideoProgress() {
  const min = Math.floor(VideoTag.currentTime / 60)
  const sec = Math.floor(VideoTag.currentTime % 60)

  const DurationFormatted = isNaN(VideoTag.duration) ? 0 : VideoTag.duration
  const Minutes = Math.floor(DurationFormatted / 60)
  const Segundos = Math.floor(DurationFormatted % 60)
  
  Progressbarra.style.width = VideoTag.currentTime + 'px'
  PrintCurrentTime.innerText = `${FormatNumeros(min)}:${FormatNumeros(sec)}`
  TimeCurrentMovie.innerText = `${Minutes}:${Segundos}`
}

// Avançar video com a barra de progresso
ContainerProgress.addEventListener('click', (e) => {
  const offsetBarra = e.offsetX

  Progressbarra.style.width = `${offsetBarra}px`
  VideoTag.currentTime = offsetBarra
  
  StatuzVideoProgress()
})

// Volume
BtnVolume.addEventListener('click', () => {
  ContainerVolume.classList.toggle('OpenContainerVolume')
  
  InputVolume.addEventListener('input', () => {
    VideoTag.volume = (InputVolume.value / 100) % 60
    PrintVolume.innerText = InputVolume.value
  })
})

// Next
BtnNextMovie.addEventListener('click', () => {
  CountMovieLista++

  if (CountMovieLista >= Movies.length) CountMovieLista = Movies.length
  else VideoTag.src = Movies[CountMovieLista]

  if (VideoTag.paused) BtnPlay.click()
})

// Back
BtnBacktMovie.addEventListener('click', () => {
  CountMovieLista--

  if (CountMovieLista < 0) CountMovieLista = 0
  else VideoTag.src = Movies[CountMovieLista] 

  if (VideoTag.paused) BtnPlay.click()
})

// Play
BtnPlay.addEventListener('click', () => {
  BtnPlay.style.display = 'none'
  BtnPause.style.display = 'block'

  setInterval(() => {
    StatuzVideoProgress()
  }, 1000)

  VideoTag.play()
})

// Pause
BtnPause.addEventListener('click', () => {
  BtnPlay.style.display = 'block'
  BtnPause.style.display = 'none'

  VideoTag.pause()
})

// Download
BtnDownload.addEventListener('click', () => {
  ContainerInsetLink.classList.add('OpenContainerInsetLink')

  
  BtnbaixarDireto.onclick = () => {
    const NewDate = new Date()

    let Hora = NewDate.getHours()
    let Minuto = NewDate.getMinutes()
    let Segundo = NewDate.getSeconds()
    let Dia = NewDate.getDay()
    let Mes = NewDate.getMonth()+1
    let Ano = NewDate.getFullYear()

    const CardHistorico = document.createElement('div')
    CardHistorico.classList = 'CardHistorico'
    CardHistorico.style.display = 'flex'
  
    const Info = document.createElement('div')
    Info.classList = 'Info'
  
    const H4Archive = document.createElement('h4')
    H4Archive.classList = 'H4Archive'
    H4Archive.textContent = VideoTag.src
  
    const DataHora = document.createElement('span')
    DataHora.classList = 'DataHora'
    DataHora.textContent = `${FormatNumeros(Hora)}:${FormatNumeros(Minuto)}:${FormatNumeros(Segundo)} | ${FormatNumeros(Dia)}/${FormatNumeros(Mes)}/${Ano}`
  
    const BtnActionCardHistorico = document.createElement('button')
    BtnActionCardHistorico.classList = 'BtnActionCardHistorico'
    BtnActionCardHistorico.textContent = '...'

    const aTag = document.createElement('a')
    VideoTag.title = 'File'
    aTag.href = VideoTag.src
    aTag.download = VideoTag.src
    
    document.body.appendChild(aTag)
    HistoricoDownload.appendChild(CardHistorico)
    CardHistorico.appendChild(Info)
    Info.appendChild(H4Archive)
    Info.appendChild(DataHora)
    CardHistorico.appendChild(BtnActionCardHistorico)

    aTag.click()
    aTag.remove()
  }


  BtnCancelarDownload.onclick = () => {
    ContainerInsetLink.classList.remove('OpenContainerInsetLink')
  }
})

// FullScreen
function toggleFullScreen() {
  document.addEventListener('keydown', ({keyCode}) => {
    if (keyCode == 27) toggleFullScreen()
  })

  PrintVideo.classList.toggle('VideoFullScreen')
  ContainerProgress.classList.toggle('AboluteContainer')
  ControlsPlayer.classList.toggle('AboluteControls')

  if (ContainerProgress.style.width != '90%') {
    ContainerProgress.style.marginLeft = '50%'
    ContainerProgress.style.transform = 'translateX(-50%)'

    ControlsPlayer.style.marginLeft = '50%'
    ControlsPlayer.style.transform = 'translateX(-50%)'

    PictureInPicture.style.display = 'none'
  }else {
    ContainerProgress.style.background = 'black'
    ContainerProgress.style.position = 'relative'
    ContainerProgress.style.width = '10%'
    ContainerProgress.style.marginLeft = '50%'
    ContainerProgress.style.transform = 'translateX(50%)'
    PictureInPicture.style.display = 'block'
  }
  FullScreen()
} 

function FullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen()
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen()
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen()
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen()
    }  
  }  
} 

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 84 && (event.altKey)) toggleFullScreen()
})