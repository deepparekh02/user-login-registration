const express = require('express')
const router = express.Router()
const { verifyIsLoggedIn } = require("./utils/verifyAuthToken");
const { registerUser, loginUser, updateUserProfile, getUserProfile } = require("./userController")

router.post("/register", registerUser)
router.post("/login", loginUser)

// user logged in routes:
router.use(verifyIsLoggedIn);
router.put("/profile", updateUserProfile);
router.get('/profile/:id', getUserProfile)

module.exports = router
