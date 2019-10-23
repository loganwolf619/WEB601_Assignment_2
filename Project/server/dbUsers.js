// We are going to use KNEX to build our query. This is same as working with SQL queries. With the help of KNEX we are going to use select, add, delete, or update the data as required.

//We are going to add a user to the database
function postUsers(req, res) {
    const { knex } = req.app.locals
    const payload = req.body

    // We are goign to parse the payload, and this is the parameters that has been sent from the client
    const manadatoryColumns = ['UsersFName', 'UsersLName', 'UsersEmail', 'UsersPassword', 'UsersPhone']
    const payloadKeys = Object.keys(payload)
    const manadatoryColumnsExists = manadatoryColumns.every(mc => payloadKeys.includes(mc))

    // We are going to check if all the mandatory columns are filled before they are posted. If they arent, then an error will be returned
    if(manadatoryColumnsExists) {
        knex('users')
        .insert(payload)
        .then(respone => {
            if (reponse) {
                res.status(201).json('An User has been created')
            }
        })
        .catch(error => res.status(500).json(error))
    } else {
        return res.status(400).json('Mandatory Columns are required ${mandatoryColumns}');
    }
}

// We are going to export all the function as the module object. 
module.exports = {
    postUsers,
}