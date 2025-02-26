const User = require("../models/user");

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    return res.json(user);
}

// PUT
// async function handleUpdateAllById(req,res){
//     const id = Number(req.params.id);
//     const userIndex = users.findIndex(user => user.id===id);
//     const body = req.body;
//     users[userIndex] = {id, ...body}
//     fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err) => {
//         return res.json({status:'Success'});
//     });
// }

// PATCH
async function handleUpdateUserById(req,res){
    const {first_name} = req.body;
    await User.findByIdAndUpdate(req.params.id, {firstName: first_name});
    return res.status(200).json({status : "Completed"});
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({status : "Success"});
}

async function handleCreateNewUser(req,res){
    const body = req.body;
        // console.log(body);
        if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
            return res.status(400).json({msg:"All fields are req"});
        }
    
        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title
        });
        console.log(result);
        return res.status(200).json({msg : 'Success', id: result._id});
        // fs.writeFile("MOCK_DATA.json", JSON.stringify(users), err=>{
        //     return res.status(201).json({status: 'Success', id:users.length});
        // });
}

module.exports = {
    handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
};