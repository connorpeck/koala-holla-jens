const express = require('express');
const res = require('express/lib/response');
const koalaRouter = express.Router();
const pool = require('../modules/pool');

// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {
    console.log('in koalaRouter GET');
    const queryString = `SELECT * FROM koalas;`;
    pool.query( queryString ).then( ( result )=>{
        res.send( result.rows );
}).catch( ( err )=>{
    console.log( err );
    res.sendStatus( 500 );
}) // end query

})// end GET 

// POST
koalaRouter.post('/', (req, res)=>{
    console.log('in koalaRouter POST' , req.body);
    const queryString =   `INSERT INTO koalas (name, age, gender, ready_for_transfer, notes)
    VALUES('Hal', '86', 'M', TRUE, 'good koala');`;
    const values = [req.body.name, 
        req.body.age, 
        req.body.gender,
        req.body.ready_for_transfer,
        req.body.notes];
    pool.query( queryString, values).then ( (result) =>{
        res.sendStatus(201);
    }).catch ( (err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

// PUT


// DELETE

module.exports = koalaRouter;