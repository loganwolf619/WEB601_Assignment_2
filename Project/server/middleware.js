// This midleware is used to connect the backend and the frontend together.

function checkID(req, res, next) {
    const GraphicsID = +req.params.GraphicsID
//  We are going to create a variable to save the ID. Then we are going to check if the ID is an integer 
    if (Number.isInteger(GraphicsID)) {
        next()
    } else {
        return res.status(400).json('The ID needs to be an integer')
    }
}

// We are using this to export module s
module.exports = {
    checkID
}