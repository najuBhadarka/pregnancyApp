import jwt from 'jsonwebtoken';

function authenticateRoles(allowedRoles) {
    return (req, res, next) => {
        // Extract the JWT token from the request headers or query string
        const token = req.headers.authorization || req.query.token;

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Verify the token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            const userRole = decoded.role; // Assuming role is stored in the JWT payload

            // Check if the user has one of the allowed roles
            if (!allowedRoles.includes(userRole)) {
                return res.status(403).json({ error: 'Access denied' });
            }

            // User has a valid token and the required role
            req.user = decoded; // Store user information in req.user
            next();
        });
    };
}

export default authenticateRoles;
