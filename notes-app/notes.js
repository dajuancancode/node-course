const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
  const notes = loadNotes()
  // Want to check and see if title is in notes
  // If so, stop user from adding note
  const duplicateNotes = notes.filter(note => note.title === title)
  
  if(duplicateNotes.length === 0){
    notes.push({
      title: title,
      body: body
    })
    console.log(chalk.green.bold.inverse('New note added!'))
  }else {
    console.log(chalk.red.bold.inverse('Note title taken!'))
  }

  saveNotes(notes)
}

const removeNote = title => {
  const notes = loadNotes()
  const notesToKeep = notes.filter(note => note.title !== title)

 if(notesToKeep.length < notes.length){
   console.log(chalk.green.inverse.bold('Note removed!'))
   saveNotes(notesToKeep)
 }else {
   console.log(chalk.red.inverse.bold('No note found!'))
 }  
}

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    //const dataJSON = dataBuffer.toString()
    return JSON.parse(dataBuffer)
  }catch (e) {
    return []
  }
  
}
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
}