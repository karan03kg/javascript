let currentSong = new Audio()
async function getsongs(){
    let a = await fetch("http://127.0.0.1:5500/audio/");
    let response = await a.text();
    // console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;
    
    let as = div.getElementsByTagName("a")
    
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(/audio/)[1])
        }
        
    }
    return songs;
}

const playMusic = (track,pause=false)=>{
    currentSong.src = "/audio/"+track;
    if(!pause){
        currentSong.play()
        play.src = "pause.svg"
        console.log(pause);
    }
    console.log(pause)
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00/00:00"
}

function convertSecToMin(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainingSeconds = Math.round(seconds % 60).toString().padStart(2, '0');
    return `${minutes} : ${remainingSeconds}`;
}

async function main(){
    let songs = await getsongs();
    console.log(songs);
    playMusic(songs[0],true)
    //show all the  songs in playlist

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><i class="bi bi-music-note-beamed"></i>
                            <div class="info">
                                <div>${song.replaceAll("%20"," ").replaceAll("/"," ")}</div>
                                <div>Song Artist</div>
                            </div>
                            <span><i class="bi bi-play-circle"></i></span>
        
    </li>`;
    }

    //Play the particular song from li
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click",()=>{
            console.log(e.getElementsByTagName("div")[1].innerHTML);
            playMusic(e.getElementsByTagName("div")[1].innerHTML.trim())
        })
    })
    
    //function on play button
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play();
            play.src = "pause.svg"
        }
        else{
            currentSong.pause(); 
            play.src = "play.svg"
        }
    })

    //Time setting
    currentSong.addEventListener("timeupdate",()=>{
        let x = convertSecToMin(currentSong.currentTime);
        let y = convertSecToMin(currentSong.duration)
        document.querySelector(".songtime").innerHTML = `${x} / ${y}`;
        document.getElementById("circle").style.left = (currentSong.currentTime/currentSong.duration) * 100 + "%";

        if(x == y){
            play.src = "play.svg"
        }
    })

    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100
        document.getElementById("circle").style.left = percent +"%";
        currentSong.currentTime = ((currentSong.duration) * percent)/100;

    })

    document.getElementById("hmb").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "0";
    })

    document.getElementById("close").addEventListener("click",()=>{
        document.querySelector(".left").style.border
    })
}
main();

