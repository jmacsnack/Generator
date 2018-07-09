//**************************//
//	  Music Generator JS    // 
//	  By: John McDonald	    //
//**************************//


var song = [];var progression = [];var noteLog = [];

function makeChords(){
	function checkUnique(myArray){for(var i = 0; i<myArray.length;i++){for(var j = 0; j<myArray.length;j++){if(i != j){if(myArray[i] == myArray[j]){return true;}}}}return false;}
	var chords = ["I","ii","iii","IV","V","vi"];
	do{
		var chordNumber1 = Math.floor((Math.random()*6));
		switch(chordNumber1){
			case chordNumber1:
				progression[0]=chords[chordNumber1];
				break;
		}
		for (var i = 0;i<3;i++) {
			if (progression[i]==="I") {
				var nextChord =  Math.floor((Math.random()*5));
				switch(nextChord){
					case nextChord:progression[i+1]=chords[nextChord+1];break;
				}
			}else if(progression[i]==="ii"){
				var nextChord =  Math.floor((Math.random()*2));
				switch(nextChord){
					case 0:progression[i+1]='I';break;
					case 1:progression[i+1]='V';break;
				}
			}else if(progression[i]==="iii"){
				var nextChord =  Math.floor((Math.random()*3));
				switch(nextChord){
					case 0:progression[i+1]='I';break;	
					case 1:progression[i+1]='IV';break;					
					case 2:progression[i+1]='vi';break;	
				}
			}else if(progression[i]==="IV"){
				var nextChord = Math.floor((Math.random()*3));
				switch(nextChord){
					case 0:progression[i+1]='I';break;
					case 1:progression[i+1]='ii';break;
					case 2:progression[i+1]='V';break;
				}
			}else if(progression[i]==="V"){
				var nextChord = Math.floor((Math.random()*2));
				switch(nextChord){
					case 0:progression[i+1]='I';break;
					case 1:progression[i+1]='vi';break;
				}
			}else if(progression[i]==="vi"){
				var nextChord = Math.floor((Math.random()*5));
				switch(nextChord){
					case 0:progression[i+1]='I';break;
					case 1:progression[i+1]='ii';break;
					case 2:progression[i+1]='iii';break;
					case 3:progression[i+1]='IV';break;
					case 4:progression[i+1]='V';break;
				}
			}
		}console.log(checkUnique(progression));
	}while(checkUnique(progression));
	for(var ii=0;ii<4;ii++){
		progression.push(progression[ii]);
	}//	for(var jj=0;jj<4;jj++){$("#c" + jj).html(progression[jj]);} //Write out 'chord progression' on webpage
}
function makeMelody(){
	var notes = ["c4","d4","e4","g4","a4","c5","d5","e5"];
	for(var i=0;i<31;i++){song.push({pitch: 0,length: 0});}   //Init Song Array with 32 'empty' eigth notes
	for (var j = 0; j<31;j++) {   //Fill song array with notes
		if (j===0) {   			  //Pick FIRST note
			var note = notes[Math.floor(Math.random() * notes.length)];
			song[j].pitch = note;
			var length = Math.floor((Math.random()*3));
			switch(length){
				case 0:
					song[j].length = "1/8";//	$("#b" + (j+1)).html(song[j].pitch + "</br>" + "&#9834");
					noteLog.push(song[j]);
					break;
				case 1:
					song[j].length = "1/4";//	$("#b" + (j+1)).html(song[j].pitch + "</br>" + "&#9833");
					noteLog.push(song[j]);
					j++;//	$("#b" + (j+1)).html("~");
					break;
				case 2:
					song[j].length = "3/8";	//  $("#b" + (j+1)).html(song[j].pitch + "</br>" + "&#9835");
					noteLog.push(song[j]);
					j++;  //  $("#b" + (j+1)).html("~");
					j++;  //  $("#b" + (j+1)).html("~");
					break;
			}
		}else{
			var choice = Math.floor((Math.random()*8));
			switch(choice){
				case 0:    //  chance of last 2 notes
					var last2note = noteLog[noteLog.length-2].pitch;
					if(typeof last2note !== 'undefined'){song[j].pitch = noteLog[noteLog.length-2].pitch;
					}else{song[j].pitch = noteLog[noteLog.length-1].pitch;}  //	$("#b" + (j+1)).html(song[j].pitch);
					console.log("LAST 2 NOTE");
					break;
				case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:
					do{
						var note = notes[Math.floor(Math.random() * notes.length)];
						var lastnote = noteLog[noteLog.length-1].pitch;
						var lastNoteIndex = (notes.indexOf(lastnote)+1);
						var currentNoteIndex = (notes.indexOf(note)+1);
						var diff = Math.abs(currentNoteIndex - lastNoteIndex);	
					}while(note===lastnote || diff>4);
					song[j].pitch = note;
					break;
			}
			var length = Math.floor((Math.random()*12));   //Determine note length
			switch(length){
				case 0:case 1:case 2:case 3:case 4:    //  1/8 note
					song[j].length = "1/8";//	$("#b" + (j+1)).html(song[j].pitch + "</br>" + "&#9834");
					noteLog.push(song[j]);
					break;
				case 5:case 6:case 7:case 8:    //  1/4 note
					song[j].length = "1/4";//$("#b" + (j+1)).html(song[j].pitch + "</br>" + "&#9833");
					noteLog.push(song[j]);
					j++;//	$("#b" + (j+1)).html("~");
					break;
				case 9:case 10:    //  3/8 note 
					song[j].length = "3/8";//$("#b" + (j+1)).html(song[j].pitch + "</br>" + "&#9835");		
					noteLog.push(song[j]);
					j++;//	$("#b" + (j+1)).html("~");
					j++;//	$("#b" + (j+1)).html("~");
					break;
				case 11:   //  1/2 note
					song[j].length = "1/2";	//	$("#b" + (j+1)).html(song[j].pitch + "</br>" + "&#9837");
					noteLog.push(song[j]);
					j++;//	$("#b" + (j+1)).html("~");
					j++;//	$("#b" + (j+1)).html("~");
					j++;//	$("#b" + (j+1)).html("~");
					break;
			}		
		}
	}
	var xyx = noteLog.length;   // Duplicates the melody
	for(var jj=0;jj<xyx;jj++){noteLog.push(noteLog[jj]);}
}
function makeMidi(){
	var fs = require('fs');var Midi = require('jsmidgen');
	var file = new Midi.File();
	var track = new Midi.Track();file.addTrack(track);
	track.instrument(1, 0x22);
	for(var i = 0; i<noteLog.length;i++){
		if (noteLog[i].length === "1/8") {
			track.addNote(1,noteLog[i].pitch, 64);
		}else if(noteLog[i].length === "1/4"){
			track.addNote(1,noteLog[i].pitch, 128);
		}else if(noteLog[i].length === "3/8"){
			track.addNote(1,noteLog[i].pitch, 192);
		}else if(noteLog[i].length === "1/2"){
			track.addNote(1,noteLog[i].pitch, 256);
		}
	}
	var track2 = new Midi.Track();file.addTrack(track2);
	track2.instrument(0, 0x36);//	track2.instrument(0, 0x40);
	for(var j=0;j<progression.length;j++){
		if (progression[j]==="I") {
			track2.addChord(0, ['c3','e3','g3','b3'], 512);
		} else if (progression[j]==="ii") {
			track2.addChord(0, ['d3','f3','a3','c4'], 512);
		} else if (progression[j]==="iii") {
			track2.addChord(0, ['e3','g3', 'b3','d4'], 512);
		} else if (progression[j]==="IV") {
			track2.addChord(0, ['f3','a3','c4','e4'], 512);
		} else if (progression[j]==="V") {
			track2.addChord(0, ['g3','b3','d4','e4'], 512);
		} else if (progression[j]==="vi") {
			track2.addChord(0, ['a3','c4','e4','g4'], 512);
		}
	}
	fs.writeFileSync('test.mid', file.toBytes(), 'binary');
}
makeChords();makeMelody();makeMidi();
console.log(song);console.log(progression);