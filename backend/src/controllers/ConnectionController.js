const api = require('../services/api')

class ConnectionController { 

    add = async (req, res) => {
    
        
       
        try {
        const {data:connection} = await api.get('/connectionTypes/'+req.params.id);

        const {data:user} = await api.get('/users/'+req.userId);

        user.connections[connection.name] = connection;

        const response = await api.put('/users/'+req.userId,user);
        res.status(200).send(response.data)
        }
        catch (err) {
            return res.status(500).send('Error')
        }

    }
    remove = async (req, res) => {
    
    
       
        try {
            const {data:connection} = await api.get('/connectionTypes/'+req.params.id);
    
            const {data:user} = await api.get('/users/'+req.userId);
    
            delete user.connections[connection.name];
    
            const response = await api.put('/users/'+req.userId,user);
            res.status(200).send(response.data)
            }
            catch (err) {
                return res.status(500).send('Error')
            }

    }



}
module.exports = new ConnectionController();
