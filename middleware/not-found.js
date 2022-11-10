const notFound = (req, res) => res.status(404).sen('Route does not exist')

module.exports = notFound