const HLTV = require('hltv-api').default
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://api.steampowered.com');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });

app.get('/', async (req, res) => {
    res.send("hello! server is working.")
})

app.get('/teste', async (req, res) => {
    res.send('oi!')
})

app.get('/noticias', async (req, res) => {
    const news = await HLTV.getNews()
    res.json(news)
})

app.get('/resultados', async (req, res) => {
    const results = await HLTV.getResults()
    res.json(results)
})

app.get('/partidas', async (req, res) => {
    const matches = await HLTV.getMatches()
    res.json(matches)
})

app.get('/resultados/:matchId/stats', async (req, res) => {
    const stats = await HLTV.getMatchById(req.params.matchId)
    res.json(stats)
})

app.get('/jogadores', async (req, res, next) => {
    const players = await HLTV.getTopPlayers()
    res.json(players)
})

app.get('/jogadores/:playerId', async (req, res) => {
    const player = await HLTV.getPlayerById(req.params.playerId)
    res.json(player)
})

app.get('/top-times', async (req, res) => {
    const teams = await HLTV.getTopTeams()
    res.json(teams)
})

app.get('/times/:teamId', async (req, res) => {
    const team = await HLTV.getTeamById(req.params.teamId)
    res.json(team)
})

app.listen(port, () => {
    console.log('Servidor operacional...')
})