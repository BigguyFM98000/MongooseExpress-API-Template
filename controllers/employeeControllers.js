const EmployeeModel = require('../models/employee');
// NB. I have used async and await keywords as the database query takes time and so the asynchronous property of node js comes in.

// Create and Save a new employee
exports.create = async (req, res) => {
    if ( !req.body.firstname && !req.body.lastname && !req.body.phonenumber && !req.body.email && !req.body.jobtitle && !req.body.department) {
        res.status(400).send({ message: "Content cannot be empty!" });
    }
    
    const employee = new EmployeeModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        jobtitle: req.body.jobtitle,
        department: req.body.department,  
    });
    
    await employee.save().then(data => {
        res.send({
            message:"Employee added successfully!!",
            employee: data});
        }).catch(err => {
        res.status(500).send(
            {message: err.message || "Some error occurred while adding employee"});
        });
};

// Retrieve all employees from the database.
exports.findAll = async (req, res) => {
    try {
        const employee = await EmployeeModel.find();
        res.status(200).json(employee);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
};

// Find a single Employee with an id
exports.findOne = async (req, res) => {
    try {
        const employee = await EmployeeModel.findById(req.params.id);
        res.status(200).json(employee);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update an employee by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Data to update cannot be empty!"});
    }
    const id = req.params.id;
    
    // The {new: true} option in the findByIdAndUpdate() a method is used to return the modified document to the then() function instead of the original.
    await EmployeeModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({ message: `Employee not found.` });
        }else{
            res.send({ message: "Employee updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

// Delete an employee with the specified id in the request
exports.destroy = async (req, res) => {
    await EmployeeModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({ message: `Employee not found.` });
        } else {
          res.send({ message: "Employee deleted successfully!" });
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};