const express = require('express');
const koalaRouter = express.Router();
// DB CONNECTION
const pool = require('../modules/pool');

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

koalaRouter.post( '/', (req, res)=>{
    console.log('in koalaRouter POST', req.body);
    const queryString = `INSERT INTO koalas (name, age, gender, ready_for_transfer , notes) VALUES($1, $2, $3, $4, $5);`;
    const VALUES = [req.body.name,
        req.body.age,
        req.body.gender,
        req.body.ready_for_transfer,
        req.body.notes];
    pool.query( queryString, VALUES).then( (result)=>{
        res.sendStatus(201);
    }).catch( (err)=>{
        console.log(err);
        res.sendStatus( 500 );
    })
})


// PUT
koalaRouter.put('/', ( req, res)=>{
    console.log('in /koala.router PUT', req.query);
    let queryString= `UPDATE koalas SET ready_for_transfer = FALSE WHERE id=$1; `;
    let VALUES = [req.query.id];
    pool.query( queryString, VALUES).then( (results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500)
    })

})



// DELETE
koalaRouter.delete( '/', ( req,res )=>{
    console.log('in /koala.router DELETE', req.query);
    let queryString = `DELETE FROM koalas WHERE id= $1;`
    let VALUES = [ req.query.id ];
    pool.query( queryString, VALUES).then( (results)=>{
            res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus (500);
    })
        
})
module.exports = koalaRouter;