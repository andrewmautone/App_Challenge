const api = require('../services/api')

class ConnectionTypes {

    index = async (req, res) => {
    
       
        try {
        const response = await api.get('/connectionTypes');
        res.status(200).send(response.data)
        }
        catch (err) {
            return res.status(500).send('Error')
        }

    }



}
module.exports = new ConnectionTypes();
