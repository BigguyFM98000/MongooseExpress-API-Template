const UserModel = require('../models/user');
// NB. I have used async and await keywords as the database query takes time and so the asynchronous property of node js comes in.

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Data to update cannot be empty!"});
    }
    const id = req.params.id;
    
    // The {new: true} option in the findByIdAndUpdate() a method is used to return the modified document to the then() function instead of the original.
    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({ message: `User not found.` });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({ message: `User not found.` });
        } else {
          res.send({ message: "User deleted successfully!" });
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};