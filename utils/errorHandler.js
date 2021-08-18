module.exports = (response, error) => {
    response.status(500).json({
        success: false,
        message: `Error: ${error.message ? error.message : error }`
    })
}
