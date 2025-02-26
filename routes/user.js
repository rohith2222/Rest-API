const express = require("express");
const {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require("../controllers/user");
const router = express.Router();

// API ROUTES
router.route('/')
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

module.exports = router;

/*

// ROUTES
router.get('/', async (req,res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
    ${allDbUsers.map(user => {return `<li>${user.firstName} - ${user.email}</li>`}).join("")}
    </ul>
    `
    return res.send(html);
});

router.get(':id', (req,res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id===id);
    const html = `
    <h1>
    Firstname: ${user.first_name} <br>
    Lastname: ${user.last_name} <br>
    Email: ${user.email} <br>
    Gender: ${user.gender} <br>
    Job title: ${user.job_title}
    </h1>
    `;
    return res.send(html);
});
*/