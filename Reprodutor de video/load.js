for (let i = 0; i <= Movies.length -1; i++) {
    const Card = document.createElement('div')
    Card.classList = Card
  
    const videoPlayList = document.createElement('video')
    videoPlayList.src = Movies[i]
    videoPlayList.style.width = '100%'
    videoPlayList.style.boxShadow = '0 0 10px black'
  
    const ContrlsPlayList = document.createElement('div')
    ContrlsPlayList.classList = 'ContrlsPlayList'

    const DurationFormatted = isNaN(VideoTag.duration) ? 0 : VideoTag.duration
    const Minutes = Math.floor(DurationFormatted / 60)
    const Segundos = DurationFormatted % 60
  
    const H5TempoMoviePlayList = document.createElement('h5')
    H5TempoMoviePlayList.innerText = `${FormatNumeros(Minutes)}:${FormatNumeros(Segundos)}`
    H5TempoMoviePlayList.style.color = 'black'
    H5TempoMoviePlayList.style.marginTop = '10px'
    H5TempoMoviePlayList.style.fontSize = '20px'
  
    PrintPlaylistMovie.appendChild(Card)
    Card.appendChild(videoPlayList)
    Card.appendChild(ContrlsPlayList)
    ContrlsPlayList.appendChild(H5TempoMoviePlayList)

    videoPlayList.addEventListener('mouseover', () => {
        videoPlayList.style.cursor = 'pointer'
        videoPlayList.style.boxShadow = '0 0 10px red'
    })

    videoPlayList.addEventListener('mouseleave', () => {
        videoPlayList.style.boxShadow = 'none'
    })

    videoPlayList.onclick = () => {
        VideoTag.src = videoPlayList.src
        BtnPlay.click()
    }
}