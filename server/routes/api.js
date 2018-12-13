const express = require('express')
const request = require('request')
const router = express.Router()

const json = {
     data : {}

 }



router.get('/sanity', function (req, res) {
    res.send("OK")
})

const requestForFood = function(food){
    request(`http://www.recipepuppy.com/api/?q=${food}`,function (err, response){
        json.data = JSON.parse(response.body)
        json.data.results.map(a =>a.ingredients= a.ingredients.split(","))
    })
}

router.get('/recipes/:food',function (request, response){
    let food = request.params.food
    requestForFood(food)
    setTimeout(function(){response.send(json.data)},500)
})

router.get('/ingredients/:ingredients',function (request, response){
        let ingredientsValue = request.params.ingredients
        let filterArry = json.data.results.filter(d => d.ingredients.includes(ingredientsValue) ) // The last momnet I change the requrest so it impact this, it works fine before I changed it, If I had 5 more minutes I belive I could fix it
        response.send(filterArry)
})



module.exports = router