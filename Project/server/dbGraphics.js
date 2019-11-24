// This is similar as SQL query. Here, we are usig KNEX t0 build queries or in a manner of structure the data
// Listing all the Grpahics. It is more or less used to select all the function
function listAllGraphics(req, res) {
    const { knex } = req.app.locals
    knex
        .select('GraphicsID', 'GraphicsType','GraphicsQuality', 'GraphicsTitle', 'GraphicsArtist')
        .from('Graphics')

        //To export the data
        .then(data => res.status(200).json(data))
        //To catch the error while exporting the data
        .catch(error => res.status(500).json(error))
}
function listGraphicsDisplay(req, res) {
    // We are going to access the database connection with the help of config.js
    const { knex } = req.app.locals
    // We are going to select the database query
    knex
        .select('GraphicsID', 'GraphicsType','GraphicsQuality', 'GraphicsTitle', 'GraphicsArtist')
        .from('Graphics')
        .orderBy('GraphicsID', 'desc')
        .limit(12)

        .then(data => res.status(200).json(data))

        // Now we are going to catch any error if not right
        .catch(error => res.status(500).json(error))
}

// //This is a function which is used to retreive a single Graphics(Illustration, Deisgns, or Photos) with the help of GraphicsID
function listSingleGraphics(req, res) {
    //We are resetructring
    const { knex } = req.app.locals
    const { GraphicsID } = req.params
    // This includes the Database Query
    knex 
        .select('GraphicsID', 'GraphicsType','GraphicsQuality', 'GraphicsTitle', 'GraphicsArtist')
        .from('Graphics')
        .where({
            GraphicsID: `${GraphicsID}`
    })

    //Response
    .then(data => {
        if (data.length > 0) {
            return res.status(200).json(data)
        } else {
            return res.status(400).json(`Graphics with ID ${GraphicsID} does not exist`);
        }
    })
    .catch(error => res.status(500).json(error))
}

//Add a Graphics to the Database
function postGraphics(req, res) {
    const { knex } = req.app.locals

    const payload = req.body
    // This parameter is being sent from the client which is a part of the Post Request
    const mandatoryColumns = ['GraphicsID', 'GraphicsType','GraphicsQuality', 'GraphicsTitle', 'GraphicsArtist']

    const payloadKeys = Object.keys(payload)
    
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))

    //Checking if all important columns are filled before they are inserted into the query. If any information is missing it will return an error
    if (mandatoryColumnsExists) {
        knex('Graphics')
            .insert(payload)
            .then(response => {
                if (response) {
                    res.status(200).json('Graphics record has been created')
                }
            })
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Manadatory Columns are required ${mandatoryColumns}`);

    }
}

//Updating a Graphics by ID
function updateGraphics(req, res) {
    const { knex } = req.app.locals
    const { GraphicsID } = req.params
    const payload = req.body
    knex('Graphics')
        .where('GraphicsID', GraphicsID)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json()
            } else {
                return res.status(404).json(`Graphics with ID ${GraphicsID} cannot be found`);
            }
        })
        .catch(error => res.status(500).json(error))
}

//Deleting a Graphics by ID
function deleteGraphics(req, res) {
    const { knex } = req.app.locals
    const { GraphicsID } = req.params

    knex('graphics')
        .where('GraphicsID', GraphicsID)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Graphics with ID ${GraphicsID} is deleted`)
            } else {
                res.status(404).json(`Graphics with ID ${GraphicsID} is not found`)
            }
        })
        .catch(error => res.status(500).json(error))
}

// We need to export all the functions as objects of module objects
module.exports = {
    listAllGraphics, 
    listSingleGraphics,
    listGraphicsDisplay,
    postGraphics,
    updateGraphics,
    deleteGraphics
}