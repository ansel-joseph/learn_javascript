let marvel_characters = ["Beyonder", "Living Tribunal", "Eternity"]
let dc_characters = ["Lucifer", "Michael", "Spectre"]
marvel_characters.unshift("The One Above All")
dc_characters.unshift("The Presence")
marvel_characters.shift()
let characters = marvel_characters.concat(dc_characters);
console.log(characters)
