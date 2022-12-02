const HLTV = require('hltv-api').default
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors());

app.get('/', async (req, res) => {
    res.send("Servidor operacional!")
})

app.get('/noticias', async (req, res) => {
    try {
        const news = await HLTV.getNews()
        res.json(news)
    } catch {
        res.status(500).json({ msg: `Internal Server Error.` });
    }
})

app.get('/resultados', async (req, res) => {
    try {
        const results = await HLTV.getResults()
        res.json(results)
    } catch {
        res.status(500).json({ msg: `Internal Server Error.` });
    }
})

app.get('/partidas', async (req, res) => {
    try {
        const matches = await HLTV.getMatches()
        res.json(matches)
    } catch {
        res.status(500).json({ msg: `Internal Server Error.` });
    }
})

app.get('/resultados/:matchId/stats', async (req, res) => {
    try {
        const stats = await HLTV.getMatchById(req.params.matchId)
        res.json(stats)
    } catch {
        res.status(500).json({ msg: `Internal Server Error.` });
    }
})

app.get('/jogadores', async (req, res) => {
    try {
        const players = await HLTV.getTopPlayers()
        res.json(players)
    } catch {
        res.status(500).json({ msg: `Internal Server Error.` });
    }
})

app.get('/jogadores/:playerId', async (req, res) => {
    try {
        const player = await HLTV.getPlayerById(req.params.playerId)
        res.json(player)
    } catch {
        res.status(500).json({ msg: `Internal Server Error.` });
    }
})

app.get('/top-times', async (req, res) => {
    try {
        const teams = await HLTV.getTopTeams()
        res.json(teams)
    } catch {
        res.status(500).json({ msg: `Internal Server Error.` });
    }
})

app.get('/times/:teamId', async (req, res) => {
    try {
        const team = await HLTV.getTeamById(req.params.teamId)
        res.json(team)
    }
    catch {
        res.status(500).json({ msg: `Internal Server Error.` });
    }
})

app.listen(port, () => {
    console.log('Servidor operacional...')
})