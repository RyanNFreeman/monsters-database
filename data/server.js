const express = require('express')
const server = express()

const db = require('./dbConfig')

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json('hello')
})

server.get('/api/monsters', async (req, res) => {
    try {
        const monsters = await db('monsters')
        res.status(200).json(monsters)
    } catch(error) {
        res.status(500).json({message: `couldn't retrieve monsters ${error}`})
    }
})

server.get('/api/monsters/:id', async (req, res) => {
    const {id} = req.params
   
    try {
        const monster = await db('monsters').where({id});
        res.status(200).json(monster)

    } catch (error) {
        res.status(500).json({message: `couldn't retrieve monster ${error}`})
        
    }
})

module.exports = server;