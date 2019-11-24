// We are going to connect single users
// We are going to retreive users using the users UsersEmail address.
function listSingleUsers(req, res) {
    //We are going to access the database connection in config.js with the help of restful.js
    const { knex } = req.app.locals
    const { UsersEmail } = req.params
    // We are going to use the DB query based on the above condition
    knex
        .select('UsersFName', 'UsersEmail','UsersLName', 'UsersPhone', 'UsersPassword')
        .from('users')
        .where({
            UsersEmail: `${UsersEmail}`
        })

        // We are going to get any repsonse based on anychanges that we made
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Users UsersEmail: ${UsersEmail} does not exist`);
            }
        })
        // To catch any error 
        .catch(error => res.status(500).json(error))
}


// We are going to use KNEX to build our query. This is same as working with SQL queries. With the help of KNEX we are going to use select, add, delete, or update the data as required.

//We are going to add a user to the database
function postUsers(req, res) {
    const { knex } = req.app.locals

    const payload = req.body

    // We are goign to parse the payload, and this is the parameters that has been sent from the client
    const manadatoryColumns = ['UsersFName', 'UsersEmail','UsersLName', 'UsersPhone', 'UsersPassword']

    const payloadKeys = Object.keys(payload)

    const manadatoryColumnsExists = manadatoryColumns.every(mc => payloadKeys.includes(mc))

    // We are going to check if all the mandatory columns are filled before they are posted. If they arent, then an error will be returned
    if (manadatoryColumnsExists) {
        knex('users')
        .insert(payload)
        .then(response => {
            if (response) {
                res.status(201).json('An User has been created')
            }})
        .catch(error => res.status(500).json(error))
    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

// // We are going to update an user with the help of the users UsersEmail
function updateUsers(req, res) {
    // We are going to connct the database in the config.js with thw help of restful.js
    const { knex } = req.app.locals

    const { UsersEmail } = req.params

    const payload = req.body

    knex('users')
        .where('UsersEmail', UsersEmail)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(200).json(`Users email: ${UsersEmail} has been updated`)
            } else {
                return res.status(404).json(`Users Email: ${UsersEmail} hasn't been found`)
            }
        })
        // To catch any error
        .catch(error => res.status(500).json(error))
}

function validateUsers(req, res) {
    const { knex } = req.app.locals
    const { UsersEmail, UsersPassword} = req.body
    knex('users')
        .where('UsersEmail', UsersEmail)
        .where('UsersPassword', UsersPassword)
        .fetch()
        .then(users => {
            if (users)
            {
                res.status(200).json(`Users Email: ${UsersEmail} has been updated`)
            }
            else
            {
                return res.status(404).json({ errors: { form: 'Invalid Informatio'}});
            }
        })

}
// We are going to export all the function as the module object. 
module.exports = {
    listSingleUsers,
    postUsers,
    updateUsers,
    validateUsers
}