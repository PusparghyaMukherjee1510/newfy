console.log("Welcome to NewFy");
let songIndex=0;
let audioElement= new Audio('newsongs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressbar= document.getElementById('ahead');
let musicbar=document.getElementById('bar');
let myGif= document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songitems'));



let songs=[
    {songName: "I am a Rider", filePath: "newsongs/1.mp3"},
    {songName: "Mayabana Biharini-Somlata", filePath: "newsongs/2.mp3"},
    {songName: "Alex & Rus", filePath: "newsongs/3.mp3"},
    {songName: "A Hood Near You", filePath: "newsongs/4.mp3"},
    {songName: "Rangobti-Surajit & Iman", filePath: "newsongs/5.mp3"},
    {songName: "Avici-The Nights", filePath: "newsongs/6.mp3"},
    {songName: "Kehdu Tumhe Remix", filePath: "newsongs/7.mp3"},
    {songName: "Chadti Jawani Remix", filePath: "newsongs/8.mp3"},
    {songName: "Att Karti-Jassi Gill", filePath: "newsongs/9.mp3"},
    {songName: "High Rated Gabru", filePath: "newsongs/10.mp3"},
];
songItems.forEach((element, i)=>{ 
element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
})

//audioElement.play();

//Play/Pause Actions
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      myGif.style.opacity=1;
    }else{
        audioElement.pause();
      masterPlay.classList.add('fa-play-circle');
      masterPlay.classList.remove('fa-pause-circle');
      myGif.style.opacity=0;
    }
})


//songbar
audioElement.ontimeupdate=function(e){
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100) +"%";
  myProgressbar.style.width=progress ;
  console.log('playing', progress);
}

musicbar.onclick=function(e){
  audioElement.currentTime=((e.offsetX/musicbar.offsetWidth)* audioElement.duration);
}
const playAll=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-play-circle');
    element.classList.remove('fa-pause-circle');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
            playAll();
            songIndex = parseInt(e.target.id);
             e.target.classList.remove('fa-play-circle');
             e.target.classList.add('fa-pause-circle');
            audioElement.src=`newsongs/${songIndex + 1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName;
             audioElement.currentTime=0;
             audioElement.play();
             myGif.style.opacity=1;
             masterPlay.classList.add('fa-pause-circle');
             masterPlay.classList.remove('fa-play-circle');
  })
})
//next-previous button
document.getElementById('next').addEventListener('click', ()=>{
       if(songIndex>=9){
         songIndex=0;
       }else{
         songIndex += 1;
       }
       audioElement.src=`newsongs/${songIndex + 1}.mp3`;
       masterSongName.innerText=songs[songIndex].songName;
             audioElement.currentTime=0;
             audioElement.play();
             masterPlay.classList.add('fa-pause-circle');
             masterPlay.classList.remove('fa-play-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex=0;
  }else{
    songIndex -= 1;
  }
  audioElement.src=`newsongs/${songIndex + 1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
})