const path = require('path')
const Router = require("express");

const router = new Router()

router.get('/quittin', async (req, res)=>{
    try {
        return res.sendFile(path.join(__dirname, '../static', 'quittingList.json'))
      } catch (error) {
        console.log(error);
        return res.send({ message: "Server error" });
      }
})

router.get('/present', async (req, res)=>{
    try {
        return res.sendFile(path.join(__dirname, '../static', 'presentList.json'))
      } catch (error) {
        console.log(error);
        return res.send({ message: "Server error" });
      }
})

module.exports = router