const express = require('express')
const request = require('request')
const router = express.Router()


// const teamToIDs = {
//     "lakers": "1610612747",
//     "warriors": "1610612744",
//     "heat": "1610612748",
//     "suns": "1610612756"
// }

// const dreamTeam =[]

// const json = {
//     data : {}
// }

// request('http://data.nba.net/10s/prod/v1/2018/players.json', (err, response)=>{
//     json.data = JSON.parse(response.body).league.standard.filter(t => t.teams)
// })


// router.get('/dreamTeam', (request, response) => {
//     response.send(dreamTeam)
// })

// router.post('/roster', function (request, response) {
//     let playerId = request.body.idNum
//     let player = json.data.find(t => t.personId == playerId)
//     player.dreamTeam = true
//     dreamTeam.every(d => d.personId != playerId) ? dreamTeam.push(player)  : null
//     response.end()
// })

// router.delete('/roster/:id', (request, response) => {
//     let playerId = request.params.id
//     let player = json.data.find(t => t.personId == playerId)
//     const index = dreamTeam.findIndex(d => d.personId == playerId)
//     player.dreamTeam = false
//     dreamTeam.splice(index , 1)
//     response.end()
// })

// router.get('/team/:name', (request, response) => {
//     let params = request.params.name
//     let team = json.data.filter(t => t.teamId == teamToIDs[params])
//     response.send(team)
// })

// router.put('/team', function (request, response) {
//     for(let key in request.body){
//         teamToIDs[key] = request.body[key]
//     }
//     response.send(teamToIDs);
// })



module.exports = router