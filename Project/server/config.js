// Server will be connecting with the host 
const APIServerPort = 4200

// This is used to connect with my database
const database = {
    host: 'localhost',
    port: 3306,
    user: 'milton',
    password: 'Shayek619',
    database: 'apex_shutterbug',
    insecureAuth: true
}

// This is used to export my database connection and the port that is being used 
module.exports = {
    database,
    APIServerPort
}