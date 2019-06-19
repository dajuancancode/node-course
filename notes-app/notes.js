const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  // Want to check and see if title is in notes
  // If so, stop user from adding note
  const duplicateNote = notes.find(note => note.title === title)
  
  if(duplicateNote === undefined){
    notes.push({
      title: title,
      body: body
    })
    
    saveNotes(notes)

    console.log(chalk.green.bold.inverse('New note added!'))
    
  }else {
    console.log(chalk.red.bold.inverse('Note title taken!'))
  }  
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

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.yellowBright.bold.underline('Your notes!'))
  notes.forEach(note => {
    console.log(`   - ${note.title}`)
  })
}

const readNote = title => {
  const notes = loadNotes()

  const note  = notes.find(note => note.title === title)
  
  if (note){
    console.log(chalk.underline.cyan.inverse.bold(note.title))
    console.log(`   - ${note.body}`)
  }else {
    console.log(chalk.red.inverse.bold('Note not found!'))
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}