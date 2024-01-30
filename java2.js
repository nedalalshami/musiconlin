class radio{
  constructor(){
      
      this.audio_file = document.getElementById("audio_file");
      this.isPlayed;

      this.play = document.getElementById("play");
      this.play.addEventListener("click",()=>{this.play_pause();});

      this.audios =[];
      this.audios[0] = "http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
      this.audios[1] = "sayf nabil 1";
      this.audios[2] = "sayf nabil 2.mp3";
      this.audios[3] = "sayf nabil 3.mp3";
      this.audios[4] = "mahmod turky.mp3";
      this.audios[5] = "abd.mp3";

  
      this.names = [];
      this.names[0] = "البث المباشر للراديو";
      this.names[1] ="سيف نبيل /آه ياني /";
      this.names[2] = "سيف نبيل /لو /";
      this.names[3] = "سيف نبيل /قلب ثاني";
      this.names[4] = "محمود التركي /عاشق مجنون/";
      this.names[5] = "عبد الحليم حافظ/على حسب /";
      
      this.numberAudio = this.names;

   

      this.next = document.getElementById("next");
      this.next.addEventListener("click",()=>{
          this.next_audio();
      });
         

      this.back = document.getElementById("back");
      this.back.addEventListener("click",()=>{
          
        this.back_audio();  
       
      });

      this.setSource();
  }
  play_pause(){
      if(this.isPlayed==false){
          this.play.src = "pause.png";
          this.audio_file.play();
          this.isPlayed=true;
        
      }
      else{
          this.play.src = "play.png";
          this.audio_file.pause();
          this.isPlayed=false;
      }
  }

  next_audio(){
       if(this.numberAudio<this.audios.length-1){
              ++this.numberAudio;
              this.isPlayed = false; 
              }
       else   {
              this.numberAudio = 0;
              }
              this.setSource();
  }
  back_audio(){
      if(this.numberAudio>0){
          --this.numberAudio;
          this.isPlayed = false; 
       }
       else{
          this.numberAudio = this.audios.length -1;
          
       }
    
       this.setSource();
  }
  setSource(){

  document.getElementById("music-title").innerHTML = this.names[this.numberAudio];
  document.getElementById("audio_file").src = this.audios[this.numberAudio];

  this.play_pause();
  }

}
onload = new radio();
//////////////////////////////////////////////


setInterval(()=>{
  var width = screen.width;
  var height = screen.height;

if(width<=1024){

   document.getElementById("audio_player").style.width = width+"px";
   document.getElementById("audio_player").style.height = height+"px";

  }
  if(screen.width<=320){
   document.getElementById("audio_player").style.height = 100+height+"px";

  }
});
  ///////////////////////////////////
  class Speed_Vol{
    constructor(){
        this.audio_file = document.getElementById("audio_file");

        var speed = document.getElementById("speed");
        speed.addEventListener("change",()=>{
         this.audio_file.playbackRate = speed.value / 100;
        });
       
    }

}
onload =new Speed_Vol();
  ////////////////////////////
  class Volume{
    constructor(){

        this.audio_file = document.getElementById("audio_file");

        var volume = document.getElementById("volume");
        this.audio_file.volume= 50/100;
        
        volume.addEventListener("change",()=>{
         this.audio_file.volume = volume.value / 100 ;
        } );
    }

}
onload = new Volume();
  //////////////////////////////
  class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        }

    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

    this.color3 = document.getElementById("color-3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color-3");
    });

    this.color4 = document.getElementById("color-4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color-4");
    });

    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.header = document.getElementById("header");
        if(color == "color-1"){
            this.header.style.background ="linear-gradient(to right,black,gray,red)";
            document.body.style.background = "linear-gradient(to left,black,gray,red)";
        }
        else if(color == "color-2"){
            this.header.style.background ="linear-gradient(to right,green,wheat)";
            document.body.style.background="linear-gradient(to left,green,wheat)";
        }

        else if(color == "color-3"){
            this.header.style.background ="linear-gradient(to right,blue,gray,rgb(70, 70, 236))";
            document.body.style.background ="linear-gradient(to left,blue,gray,rgb(70, 70, 236))";
        }

        else if(color == "color-4"){
            this.header.style.background = "linear-gradient(to right,yellow,blue,green)";
            document.body.style.background ="linear-gradient(to left,yellow,blue,green)";
        }
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();
  //////////////////////////