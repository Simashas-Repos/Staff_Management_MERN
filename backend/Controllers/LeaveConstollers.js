const Leave = require("../Model/LeaveModel");

const getAllLeaves = async (req, res, next) => {
    let leaves;

    try{
        leaves = await Leave.find();
    }catch(err){
        console.log(err);
    }
    //not found
    if(!leaves){
        return res.status(404).json({message: "Staff member leave not found"});
    }
    //Display all Staff members
    return res.status(200).json({ leaves });
}


//Insert Leave member details
const addLeaves = async(req, res, next) => {
    const {name, email, jobRole, contactNo, leaveType, leaveDate, description} = req.body;

    let leaves;

    try{
        leaves = new Leave({name, email, jobRole, contactNo, leaveType, leaveDate, description});
        await leaves.save();
    }catch (err){
        console.log(err);
    }
//can't insert staff member leave request
if(!leaves){
    return res.status(404).json({message: "Unable to send staff member leave request"});
}
return res.status(200).json({ leaves });
}

exports.getAllLeaves = getAllLeaves;
exports.addLeaves = addLeaves;