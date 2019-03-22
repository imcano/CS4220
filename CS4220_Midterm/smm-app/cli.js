const app = require('./app.js')
const yargs = require('yargs')

const flags = yargs
  .usage('$0: Usage <cmd> [options]')
  .command({
    command: 'search',
    desc: 'View champions played in past games by a Summoner',
    builder: yargs => {
      return yargs
        .option('u', {
          alias: 'user',
          describe: 'provide a summonername'
        })
        .demandOption(['u'])
    },
    handler: argv => app.matches(argv.user)
  })
  .help('help').argv
