const scribble = require('scribbletune');
var clip = scribble.clip({
	notes: 'c4',
	synth: "Synth"
});
scribble.transport.start();
clip.start();