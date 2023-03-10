const jwt = require('jsonwebtoken');

/**
* Permet d'exporter le module pour l'utiliser dans un autre composant.
* récupère et vérifie si le le token d'un utilisateur est valide, puis retourne le payload.
*/
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const userId = decodedToken.userId;
        const isAdmin = decodedToken.isAdmin;
        req.auth = {
            userId: userId,
            isAdmin: isAdmin
        };
        next();
    } catch(error) {
        res.status(401).json({ error });
    }
};