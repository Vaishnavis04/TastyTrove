//middleware->authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    try {
        // Extract token from Authorization header
        const token = req.header("Authorization")?.split(" ")[1]; // Split the "Bearer <token>"

        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        // Verify token and decode it
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user to request object
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;
