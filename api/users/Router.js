const app = require('express')
const router = app.Router()

const { SignUp,  Login, allUsers, getUserbyEmail,userbyEmail } = require('./controller')



router.post('/signup', SignUp)
router.post('/login', Login)
router.get('/getallusers', allUsers)
router.get('/userbyemail/:email', getUserbyEmail)
router.get('/getuserbyemail', userbyEmail) 




module.exports = router