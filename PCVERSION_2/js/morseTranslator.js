var audio = new Audio();    // Create <audio> tag

function play_morse(characterString, milliseconds, freq, volume_level) {
audio.pause();
var fullMorse = "";

  for (var i=0; i<characterString.length; i++) { // generates morse code (a space is also used for a pause)

      switch (characterString[i])
      {
        case "A":
        case "a":
                fullMorse = fullMorse + ".-";
                break;
        case "B":
        case "b":
                fullMorse = fullMorse + "-...";
                break;
        case "C":
        case "c":
                fullMorse = fullMorse + "-.-.";
                break;
        case "D":
        case "d":
                fullMorse = fullMorse + "-..";
                break;
        case "E":
        case "e":
                fullMorse = fullMorse + ".";
                break;
        case "F":
        case "f":
                fullMorse = fullMorse + "..-.";
                break;
        case "G":
        case "g":
                fullMorse = fullMorse + "--.";
                break;
        case "H":
        case "h":
                fullMorse = fullMorse + "....";
                break;
        case "I":
        case "i":
                fullMorse = fullMorse + "..";
                break;
        case "J":
        case "j":
                fullMorse = fullMorse + ".---";
                break;
        case "K":
        case "k":
                fullMorse = fullMorse + "-.-";
                break;
        case "L":
        case "l":
                fullMorse = fullMorse + ".-..";
                break;
        case "M":
        case "m":
                fullMorse = fullMorse + "--";
                break;
        case "N":
        case "n":
                fullMorse = fullMorse + "-.";
                break;
        case "O":
        case "o":
                fullMorse = fullMorse + "---";
                break;
        case "P":
        case "p":
                fullMorse = fullMorse + ".--.";
                break;
        case "Q":
        case "q":
                fullMorse = fullMorse + "--.-";
                break;
        case "R":
        case "r":
                fullMorse = fullMorse + ".-.";
                break;
        case "S":
        case "s":
                fullMorse = fullMorse + "...";
                break;
        case "T":
        case "t":
                fullMorse = fullMorse + "-";
                break;
        case "U":
        case "u":
                fullMorse = fullMorse + "..-";
                break;
        case "V":
        case "v":
                fullMorse = fullMorse + "...-";
                break;
        case "W":
        case "w":
                fullMorse = fullMorse + ".--";
                break;
        case "X":
        case "x":
                fullMorse = fullMorse + "-..-";
                break;
        case "Y":
        case "y":
                fullMorse = fullMorse + "-.--";
                break;
        case "Z":
        case "z":
                fullMorse = fullMorse + "--..";
                break;
        case "0":
                fullMorse = fullMorse + "-----";
                break;
        case "1":
                fullMorse = fullMorse + ".----";
                break;
        case "2":
                fullMorse = fullMorse + "..---";
                break;
        case "3":
                fullMorse = fullMorse + "...--";
                break;
        case "4":
                fullMorse = fullMorse + "....-";
                break;
        case "5":
                fullMorse = fullMorse + ".....";
                break;
        case "6":
                fullMorse = fullMorse + "-....";
                break;
        case "7":
                fullMorse = fullMorse + "--...";
                break;
        case "8":
                fullMorse = fullMorse + "---..";
                break;
        case "9":
                fullMorse = fullMorse + "----.";
                break;
        case " ":
                fullMorse = fullMorse + " ";
                break;
      }
  }

  var waitTime = 0;

  var samples = [];
  var added = 0;
for (var i=0; i < Math.round(milliseconds * 44.1); i++, added++) samples[added] = 0;

  for (var j=0; j < fullMorse.length; j++) // processes morse code
  {


      switch (fullMorse[j])
      {
         case ".":
                  for (var i=0; i<Math.round((milliseconds * 0.5) * 44.1); i++, added++) { // fills array with samples
                    var t = i/44100          // time from 0 to 1
                    // Generate samples using sine wave equation (between 0 and 255)
                    samples[added] = 128+Math.round(127*Math.sin(freq*2*Math.PI*t));
                  }
                  for (var i=0; i < Math.round((milliseconds * 0.25) * 44.1); i++, added++) samples[added] = 0;
         break;
         case "-":
                  for (i=0; i<Math.round(milliseconds * 44.1); i++, added++) { // fills array with samples
                    var t = i/44100            // time from 0 to 1
                    // Generate samples using sine wave equation (between 0 and 255)
                    samples[added] = 128+Math.round(127*Math.sin(freq*2*Math.PI*t));
                  }
                  for (var i=0; i < Math.round((milliseconds * 0.25) * 44.1); i++, added++) samples[added] = 0;
         break;
         case " ":
                  for (var i=0; i < Math.round((milliseconds * 0.25) * 44.1); i++, added++) samples[added] = 0;
         break;
      }
  }
for (var i=0; i < Math.round(milliseconds * 44.1); i++, added++) samples[added] = 0;
  var wave = new RIFFWAVE();          // Create raw wav file
      wave.header.sampleRate = 44100; // 44.1Khz (1 second)
      wave.header.numChannels = 1;    // 1 channel (mono)
      wave.Make(samples);

      audio.src=wave.dataURI;
      audio.volume = volume_level; //double between 0 and 1
      audio.play();

      delete samples;

}