const express = require('express');
const router = express.Router();
const { handleAllUsers, handleCreateNewUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById } = require("../controllers/user")

router.route("/")
	.get(handleAllUsers)
	.post(handleCreateNewUser);

//on a specified id user endpoint

router
	.route("/:id")
	.get(handleGetUserById)
	.patch(handleUpdateUserById)
	.delete(handleDeleteUserById);

module.exports = router;
