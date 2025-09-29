const playlistSongs = document.getElementById('playlist-songs')
const playButton = document.getElementById('play')
const pauseButton  = document.getElementById('pause')
const nextButton  = document.getElementById('next')
const previousButton  = document.getElementById('previous')
const shuffleButton  = document.getElementById('shuffle')
const loopButton  = document.getElementById('loop')

const audioNegative  = document.querySelector('.audio-adjuster-negative')
const audioPositive  = document.querySelector('.audio-adjuster-positive')
const allSongs = [
    {
        id: 0,
        title: "Hymn # 6 All Ye That Fear Jehovah's Name",
        artist: "TRBCC Hymns",
        duration: "3:36",
        src: "/hymns/Hymn 6 All Ye That Fear Jehovah_s Name.mp3",
        content: `
                </br>1 All ye that fear Jehovah’s Name,
               </br> His glory tell, His praise proclaim;
               </br> Ye children of His chosen race,
               </br> Stand ye in awe before His face.
               </br> 2 The suffering one He has not spurned
               </br> Stand ye in awe before His face.
               </br> Who to Him for support has turned;
               </br> From him He has not hid His face,
               </br> But answered his request in grace.
               </br> 3 O LORD, Thy goodness makes me raise
               </br> Amid Thy people songs of praise;
               </br> Before all them that fear Thee, now
               </br> I worship Thee and pay my vow.
               </br> 4 For all the meek You will provide,
               </br> They shall be fed and satisfied;
               </br> All they that seek the LORD shall live
               </br> And never-ending praises give.
               </br> 5 The ends of all the earth shall hear
               </br> And turn unto the Lord in fear;
               </br> All kindreds of the earth shall own
               </br> And worship Him as God alone.
               </br> 6 For His the kingdom, His of right,
               </br> He rules the nations by His might;
               </br> All earth to Him her homage brings,
               </br> The LORD of lords, the King of kings.
               </br> 7 Both rich and poor, both bond and free,
               </br> Shall worship Him with bended knee,
               </br> And children’s children shall proclaim
               </br> The glorious honor of His name.
               </br> 8 The LORD’s unfailing righteousness
               </br> All generations shall confess,
               </br> From age to age shall men be taught
               </br> What wondrous works the Lord has wrought.</p> <p></p> `
    },
     {
        id: 0,
        title: "Hymn # 6 All Ye That Fear Jehovah's Name",
        artist: "TRBCC Hymns",
        duration: "3:36",
        src: "/hymns/Hymn 6 All Ye That Fear Jehovah_s Name.mp3",
        content: `
                </br>1 All ye that fear Jehovah’s Name,
               </br> His glory tell, His praise proclaim;`
    },       

]


const audio = new Audio();

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0
}
const getAudioDuration = () => {
    audio.addEventListener('loadedmetadata', handleDurationChange);
    audio.addEventListener('durationchange', handleDurationChange);
}

function handleDurationChange() {
    if (isFinite(audio.duration)) {
        const audioDuration = audio.duration;
        const formattedDuration = formatDuration(audioDuration);
        console.log(`Duration: ${formattedDuration}`);
    } else {
        console.log("Duration is not finite");
    }
}

function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

audioPositive.addEventListener('click', () => getAudioDuration)


const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id)
    audio.src = song.src;
    audio.title = song.title;
    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0
    } else {
        audio.currentTime = userData?.songCurrentTime
    }

    userData.currentSong = song
    playButton.classList.add('playing')
    audio.play()
    highlightCurrentSong()
    setPlayerDisplay()
    setPlayButtonAccessibleText()
}

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime
    console.log(userData.currentSong + userData.songCurrentTime)
    playButton.classList.remove(".playing")
    audio.pause()
}

pauseButton.addEventListener('click', pauseSong)

const renderSongs = (array) => {
    // The map() method is used to iterate through an array and return a new array.
    const songsHTML = array.map((song) => {return ` 
    
    <li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">
            <span class="playlist-song-title">${song.title}</span>
            <span class="playlist-song-artist">${song.artist}</span>
            <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button class="playlist-song-delete" aria-label="Delete${song.title}" onclick="deleteSong(${song.id})">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
    </li>
`}).join("") 

playlistSongs.innerHTML = songsHTML

}

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0]
    playButton.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play")
}


const getCurrentSongIndex = () => {
    return userData?.songs.indexOf(userData?.currentSong)
}

const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id)
    } else {
        const currentSongIndex = getCurrentSongIndex()
        const nextSong = userData?.songs[currentSongIndex + 1]
        playSong(nextSong.id)
    }
}
nextButton.addEventListener('click', playNextSong)


const playPreviousSong = () => {
    if (userData?.currentSong === null) {
        return
    } else {
        const currentSongIndex = getCurrentSongIndex()
        const previousSong = userData?.songs[currentSongIndex - 1]
        playSong(previousSong.id)
    }
}



const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null
    userData.songCurrentTime = 0
    renderSongs(userData?.songs)
    pauseSong()
    setPlayerDisplay()
    setPlayButtonAccessibleText()
}


const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null
        userData.songCurrentTime = 0
        pauseSong()
        setPlayerDisplay()
    }
    userData.songs = userData?.songs.filter((song) => song.id !== id)
    renderSongs(userData?.songs)
    highlightCurrentSong()
    setPlayButtonAccessibleText()
    if (userData?.songs.length === 0) {
        const resetButton = document.createElement('button')
        const resetText = document.createTextNode("Reset Playlist")
        resetButton.id = "reset"
        resetButton.ariaLabel = "Reset playlist"
        resetButton.appendChild(resetText)
        playlistSongs.appendChild(resetButton)
        resetButton.addEventListener("click", () =>{
            userData.songs = [...allSongs]
            renderSongs(userData?.songs)
            setPlayButtonAccessibleText()
            resetButton.remove()
        })
       
    }
}

shuffleButton.addEventListener('click', shuffle)

audio.addEventListener('ended', () => {
    const currentSongIndex = getCurrentSongIndex()
    const nextSongExists = userData.songs.length - 1 > currentSongIndex
    if (nextSongExists) {
        playNextSong()
    } else {
        userData.currentSong = null
        userData.songCurrentTime = 0
        pauseSong()
        setPlayerDisplay()
        highlightCurrentSong()
        setPlayButtonAccessibleText()
    }
})

const loop = () => {
    loopButton.classList.toggle('looping')
    audio.loop = !audio.loop;  // Toggle the audio loop property

    if (!audio.loop && userData?.currentSong !== null) {
        // If loop is disabled and there is a current song, update currentTime
        userData.songCurrentTime = audio.currentTime;
    }
    
}

loopButton.addEventListener('click', loop)


const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title")
    const songArtist = document.getElementById("player-song-artist")
    const playingCatechism = document.querySelector(".player-display-song-artist")
    const currentTitle = userData?.currentSong?.title
    const currentArtist = userData?.currentSong?.artist
    const currentContent = userData?.currentSong?.content
    
    // playingSong.textContent = currentTitle ? currentTitle : ""
    // songArtist.textContent = currentArtist ? currentArtist : ""

    playingCatechism.innerHTML = currentContent ? currentContent : ""
    
}
const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`)
    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current")
    })

    if (songToHighlight) {
        songToHighlight.setAttribute("aria-current", "true")
    }
}

previousButton.addEventListener('click', playPreviousSong)




playButton.addEventListener('click', () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id)
        console.log(userData?.songs[0].id)
    }  else {
        playSong(userData?.currentSong.id)
        console.log("no song selected")
      }
        
})

userData?.songs.sort((a,b) => {
    if (a.id < b.id) {
        return -1;
    }

    if (a.id > b.id) {
        return 1;
    }
    return 0; 
})
// optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined.

renderSongs(userData?.songs) 


//adjust audio


