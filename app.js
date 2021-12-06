const pressChar = document.getElementById('charCode');
const pressKey = document.getElementById('key');
const pressCode = document.getElementById('code');


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



function playAudio(){
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    var audio3 = document.getElementById('audio3');
    var audio4 = document.getElementById('audio4');
    var audio5 = document.getElementById('audio5');
    var audio6 = document.getElementById('audio6');
    var audio7 = document.getElementById('audio7');
    var audio8 = document.getElementById('audio8');
    var audio9 = document.getElementById('audio9');
    var audio10 = document.getElementById('audio10');
    audio1.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();
    audio6.play();
    audio7.play();
    audio8.play();
    audio9.play();
    audio10.play();
}


document.addEventListener("keypress", (event) => {
    // pressChar.textContent = event.charCode
    // pressKey.textContent = event.key
    // pressCode.stextContent = event.code

    if(event.code == 'KeyG'){
        console.log('key g was pressed');
        audio1.play();
        audio1.currentTime = 0;
    } else if (event.code == 'KeyF'){
        console.log('key f was pressed');
        audio2.currentTime = 0;
        audio2.play();        
    } else if (event.code == 'KeyS'){
        console.log('key s was pressed');
        audio3.currentTime = 0;
        audio3.play();
    } else if (event.code == 'KeyD'){
        console.log('key d was pressed');
        audio4.currentTime = 0;
        audio4.play();
    } else if (event.code == 'KeyT'){
        console.log('key t was pressed');
        audio5.currentTime = 0;
        audio5.play();
    } else if (event.code == 'KeyY'){
        console.log('key y was pressed');
        audio6.currentTime = 0;
        audio6.play();
    }else if (event.code == 'KeyJ'){
        console.log('key j was pressed');
        audio7.currentTime = 0;
        audio7.play();
    }else if (event.code == 'KeyK'){
        console.log('key k was pressed');
        audio8.currentTime = 0;
        audio8.play();
    }else if (event.code == 'KeyL'){
        console.log('key l was pressed');
        audio9.currentTime = 0;
        audio9.volume = 0.3;
        audio9.play();
    }else if (event.code == 'KeyO'){
        console.log('key o was pressed');
        audio10.currentTime = 0;
        audio10.play();
    }
})

button.addEventListener("click", () =>  {
    var x = document.getElementById("cat");
    if (image.style.display === "none") {
      image.style.display = "block";
      button.textContent ="hide";

    } else {
      image.style.display = "none";
      button.textContent ="show";
    }
  })




// drum example using buttons in stead of keys
// _____________________________________________

// const playCymbalSound = document.getElementById('cymbalSound')

// playCymbalSound.addEventListener("click", () => {
//     console.log('play cymbal sound now')
//     // play sound file
// })
  





