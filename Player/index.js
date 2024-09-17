const BtnBackMusic = document.getElementById('BtnBackMusic')
const BtnPlayMusic = document.getElementById('BtnPlayMusic')
const BtnPauseMusic = document.getElementById('BtnPauseMusic')
const BtnNextMusic = document.getElementById('BtnNextMusic')
const InfoMusic = document.getElementById('InfoMusic')
const CapaMusic = document.getElementById('CapaMusic')
const SpanTime = document.getElementById('SpanTime')
const SpanDuration = document.getElementById('SpanDuration')
const ProgressBarra = document.getElementById('ProgressBarra')
const ContainerProgress = document.getElementById('ContainerProgress')
const GraficoOnMusic = document.getElementById('GraficoOnMusic')
const BtnMusicOrVideo = document.getElementById('BtnMusicOrVideo')
const SpanTrocaMusicOrMovie = document.getElementById('SpanTrocaMusicOrMovie')
const MovieOrSong = document.getElementById('MovieOrSong')
const PlayerMusic = document.getElementById('PlayerMusic')
const PlayerVideo = document.getElementById('PlayerVideo')

let IndexMusic = 0

const MusicasLista = [
    {
        Titulo: 'MÚSICA ELETRÔNICA 2024 🔥 AS MÚSICAS ELETRÔNICAS MAIS TOCADAS 🔥 Alok, Vintage Culture & David Guetta',
        src: 'Musicas/Um.mp3',
        Capa: 'Capa/Musicas/Um.jpg'
    },
    {
        Titulo: 'ＮＯＳＴＡＬＧＩＡ - PHONK MIX FOR NIGHT DRIVE - BEST LXST CXNTURY TYPE - 3 HOUR CAR MUSIC 2023',
        src: 'Musicas/Dois.mp3',
        Capa: 'Capa/Musicas/Dois.jpg'
    },
]

const VideosLista = [
    {
        Titulo: 'Conheça os segredos para usar o display de LCD no Arduino via I2C',
        src: 'Videos/Conheça os segredos para usar o display de LCD no Arduino via I2C.mp4',
        Capa: 'Capa/Video/Um.jpg'
    },
    {
        Titulo: 'ASMR Programming - Spinning Cube - No Talking',
        src: 'Videos/ASMR Programming - Spinning Cube - No Talking.mp4',
        Capa: 'Capa/Video/Dois.jpg'
    }
]

const AudioMusic = new Audio()

const FormatTime = n => n < 10 ? n = `0${n}` : n

function updateTime() {
    // Progreso numerico
    const currentTime = AudioMusic.currentTime;
    const duration = AudioMusic.duration;

    const currentHours = Math.floor(currentTime / 3600);
    const currentMinutes = Math.floor((currentTime % 3600) / 60);
    const currentSeconds = Math.floor(currentTime % 60);

    // Duração
    const durationHours = isNaN(duration) ? 0 : Math.floor(duration / 3600);
    const durationMinutes = isNaN(duration) ? 0 : Math.floor((duration % 3600) / 60);
    const durationSeconds = isNaN(duration) ? 0 : Math.floor(duration % 60);

    // Progreso barra
    const progressWidth = isNaN(duration) || duration === 0 ? 0 : (currentTime / duration) * 100;

    // Exibindo valores
    SpanTime.textContent = `${FormatTime(currentHours)} : ${FormatTime(currentMinutes)} : ${FormatTime(currentSeconds)}`
    SpanDuration.textContent = `${FormatTime(durationHours)} : ${FormatTime(durationMinutes)} : ${FormatTime(durationSeconds)}`
    ProgressBarra.style.width = `${progressWidth}%`
}

function loop() {
    if (!MusicasLista[IndexMusic].src.endsWith('.mp3')) {
        alert("Não é uma musica")
        return
    }

    CapaMusic.src = MusicasLista[IndexMusic].Capa
    AudioMusic.src = MusicasLista[IndexMusic].src
    InfoMusic.textContent = MusicasLista[IndexMusic].Titulo

    updateTime()
    AudioMusic.addEventListener('timeupdate', updateTime)
}

ContainerProgress.onclick = (e) => {
    const newTime = (e.offsetX / ProgressBarra.offsetWidth) * AudioMusic.duration

    AudioMusic.currentTime = newTime
}

BtnPlayMusic.onclick = () => {
    AudioMusic.play()

    GraficoOnMusic.style.display = 'flex'
    BtnPlayMusic.style.display = 'none'
    BtnPauseMusic.style.display = 'grid'
}

BtnPauseMusic.onclick = () => {
    AudioMusic.pause()

    GraficoOnMusic.style.display = 'none'
    BtnPlayMusic.style.display = 'grid'
    BtnPauseMusic.style.display = 'none'
}

BtnBackMusic.onclick = () => {
    IndexMusic <= 0 ? IndexMusic = MusicasLista.length : IndexMusic--

    CapaMusic.src = MusicasLista[IndexMusic].Capa
    AudioMusic.src = MusicasLista[IndexMusic].src
    InfoMusic.textContent = MusicasLista[IndexMusic].Titulo

    BtnPlayMusic.click()
}

BtnNextMusic.onclick = () => {
    IndexMusic >= MusicasLista.length ? IndexMusic = 0 : IndexMusic++

    CapaMusic.src = MusicasLista[IndexMusic].Capa
    AudioMusic.src = MusicasLista[IndexMusic].src
    InfoMusic.textContent = MusicasLista[IndexMusic].Titulo

    BtnPlayMusic.click()
}

BtnMusicOrVideo.onclick = () => {
    if (SpanTrocaMusicOrMovie.textContent == 'movie') {
        SpanTrocaMusicOrMovie.textContent = 'library_music'
        MovieOrSong.textContent = 'Musica'

        PlayerMusic.style.display = 'none'
        PlayerVideo.style.display = 'flex'

    }else {
        SpanTrocaMusicOrMovie.textContent = 'movie'
        MovieOrSong.textContent = 'Video'

        PlayerMusic.style.display = 'flex'
        PlayerVideo.style.display = 'none'
    }
}

loop()