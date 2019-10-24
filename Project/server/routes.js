//This is connect the Request and the KNEX query that I created for the database, which 
// will be used in the development of this Website
const graphicsList = require('./dbGraphics.js')
const supportTeam = require('./dbSupportTeam.js')
const users = require('./dbUsers.js')

module.exports = {
    graphicsList,
    supportTeam,
    users
}