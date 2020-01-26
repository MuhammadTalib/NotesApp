const note=require('./notes.js')
const yargs=require('yargs')

yargs.version('1.1.0')

yargs.command({
    command:"add",
    describe:"Add a new note!",
    builder:{
        title:{
            describe:"Node Title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note Body",
            demandOption:true
        }
    },
    handler: function (argv) {
        note.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:"remove",
    describe:"Remove a note!",
    builder:{
        title:{
            describe:"Node tITLE",
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        note.removeNote(argv.title)
    }
})

yargs.command({
    command:"list",
    describe:"List a note!",
    handler: function () {
        note.listNotes()
    }
})

yargs.command({
    command:"read",
    describe:"Read a note!",
    handler: function (argv) {
        note.readNote(argv.title)
    }
})

yargs.parse()
// const GreenMsg=chalk.bold.green.inverse('Success!')
// console.log(GreenMsg)
