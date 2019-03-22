const config = require('./config')
const superagent = require('superagent')

const _fetch = command => {
  return superagent
    .get(`${config.url}/${command}?api_key=${config.apiKey}`)
    .then(response => response.body)
    .catch(error => error.response.body)
}

const _fetchChampions = () => {
  return superagent
    .get(
      'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json'
    )
    .then(response => response)
    .catch(error => error.response.body)
}

const summoner = summonerName => {
  // return the summoner object of summoner with name...
  return _fetch(`summoner/v4/summoners/by-name/${summonerName}`)
}

const matches = summonerId => {
  // return the matches played by summoner with id...
  return _fetch(`match/v4/matchlists/by-account/${summonerId}`)
}

const match = matchId => {
  // return a single match by match with id...
  return _fetch(`match/v4/matches/${matchId}`)
}

const champion = () => {
  // return a list of all champions
  return _fetchChampions()
}

module.exports = {
  champion,
  match,
  matches,
  summoner
}
