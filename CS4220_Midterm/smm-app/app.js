const chalk = require('chalk')
const inquirer = require('inquirer')
const riotgamessmm = require('riotgames-smm')

async function selectPrompt(matches) {
  const champions = await riotgamessmm.champion()

  const displayMatches = matches.slice(0, 10).map((match, i) => {
    return {
      name: `${i + 1}: ${championName(champions, match.champion)}`,
      value: match.gameId
    }
  })

  return inquirer.prompt([
    {
      type: 'list',
      message: 'View champion performace during a game!',
      name: 'matchId',
      choices: displayMatches
    }
  ])
}

const championName = (champions, key) => {
  for (const [name, data] of Object.entries(champions.body.data)) {
    if (parseInt(data.key) === key) return name
  }
}

const stats = (match, summonerId) => {
  const participantId = match.participantIdentities.find(
    summoner => summoner.player.accountId === summonerId
  ).participantId

  const stats = match.participants.find(
    summoner => summoner.participantId === participantId
  ).stats

  return stats
}

const print = stats => {
  const win = stats.win ? `${chalk.bgGreen('WIN!')}` : `${chalk.bgRed('LOSS!')}`
  const kda = {
    k: stats.kills,
    d: stats.deaths,
    a: stats.assists
  }

  console.log(win)
  console.log(`kill(s): ${kda.k}, death(s): ${kda.d}, assist(s): ${kda.a}`)
}

async function matches(summonerName) {
  const summoner = await riotgamessmm.summoner(summonerName)
  const matches = await riotgamessmm.matches(summoner.accountId)

  const selectMatch = await selectPrompt(matches.matches)
  const match = await riotgamessmm.match(selectMatch.matchId)
  print(stats(match, summoner.accountId))
}

module.exports = {
  matches
}
