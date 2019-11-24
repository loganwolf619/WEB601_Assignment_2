// We are going to use KNEX to build our query. This is same as working with SQL queries. With the help of KNEX we are going to use select, add, delete, or update the data as required.

// We are going to add a suport team to the database. 
function postSupportTeam(req, res) {
    // We are going to connect the database on config.js with the help of restful.js
    const { knex } = req.app.locals
    const payload = req.body

    // We are going to parse the payload which is the parameters that has been sent by the client needed to connect with the Support Team
    const mandatoryColumns = ['FirstName', 'LastName', 'Email', 'Message', 'Date' ]
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))

    // Now we are going to check if all the mandatory columns are filled before they are posted. If they aren't then, an error will be displayed
    if (mandatoryColumnsExists) {
        knex('support')
        .then(response => {
            if (response) {
                res.status(201).json('Support Team has got a new message')
            }
        })
        .catch(error => res.status(500).json(error))
    } else {
        return res.status(400).json(`Mandatory columns are required ${manadatoryColumns}`);
    }
}

// We are going to export the fucntion as a module object
module.exports = {
    postSupportTeam,
}