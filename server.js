const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

const names = [{id: 'Michael'},
               {id: 'Matthew'}, 
               {id: 'James'}]

app.get('/find', (req, res) => {
    res.send({
        msg: `Greetings ${req.query.id}!`
    })
})

//---------------------------------------------------------------
const numbers = []
    
    app.get('/roll/:numbers', (req, res) => {
        if (parseInt(req.params.numbers)) {
    res.send({msg: `you rolled a ${Math.floor(Math.random()*req.params.numbers)}`})
    }
else {
    res.send({
        msg: `you must specify a number`
    })
  }})

//---------------------------------------------------------

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ]

  app.get('/collectibles/:name/:price', (req, res) => {
    console.log(req.params)
    res.send({msg: `So you want the ${req.params.name}? For ${req.params.price} it can be yours!`})
  })

  app.get('/*', (req, res) => {
    res.send({
        error: 'This item is not yet in stock. Check back soon!'
    })
  })

//------------------------------------------------------------------

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

// min price

app.get('/shoes', (req, res) => {
    const shoesMin = shoes.filter((shoe) => shoe.price > req.query.price)
   console.log(shoesMin)
 res.send({
    shoesMin
})
})

// max price

app.get('/shoes', (req, res) => {
    const shoesMin = shoes.filter((shoe) => shoe.price < req.query.price)
   console.log(shoesMin)
 res.send({
    shoesMin
})
})

// type

app.get('/shoes', (req, res) => {
    const shoeType = shoes.filter((shoe) => shoe.type === req.query.type)
    console.log(shoeType)
    res.send({
        shoeType
    })
})

// return all shoes

app.get('/shoes', (req, res) => {
    res.send({
        shoes
    })
})
