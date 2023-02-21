const express = require('express')
const axios = require('axios')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3500

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    const options = {
        method: 'GET',
        url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
        params: {
            have: req.query.current1 , 
            want: req.query.current2, 
            amount: parseInt(req.query.inValue)
        },
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            res.json(response.data.new_amount)          
            
        }).catch(function (error) {
            console.error(error);
        });
})
app.listen(port, console.log('server is listening on port '+ port))