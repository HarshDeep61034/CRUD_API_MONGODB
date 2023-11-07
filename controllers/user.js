const {user} = require('../models/user')
const mongoose = require("mongoose");

async function handleAllUsers(req, res) {
	const users = await user.find({});
	return res.json(users);
}

async function handleCreateNewUser() {
	const body = req.body;
	await user.create({
		first_name: body.first_name,
		last_name: body.last_name,
		email: body.email,
		gender: body.gender,
	});
	res.json({ status: "success" });
}

async function handleGetUserById() {
	const usr = await user.findById(req.params.id);
	return res.json(usr);
}

async function handleUpdateUserById() {
	const body = req.body;
	const usr = await user.findByIdAndUpdate(req.params.id, {
		first_name: body.first_name,
		last_name: body.last_name,
		email: body.email,
		gender: body.gender,
	});
	return res.json({ status: "updated" });
}

async function handleDeleteUserById() {
	const usr = await user.findByIdAndDelete(req.params.id);
	return res.json({ status: "deleted" });
}
module.exports = { handleAllUsers, handleCreateNewUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById };
