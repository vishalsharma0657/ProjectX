const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/vehicles/add',(req,res)=>{
  res.send("Data of Vehicles is saved!");
});

app.get('/vehicle/list',(req,res)=>{
    res.send('list created!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
