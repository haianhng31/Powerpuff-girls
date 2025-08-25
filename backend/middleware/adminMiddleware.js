const ADMIN_EMAIL = "alondralezfra@hotmail.com";


const adminMiddleware = (req, res, next) => {
  console.log("Admin check. User email:", req.user?.email);
 
  if (!req.user || req.user.email !== ADMIN_EMAIL) {
    console.log("Access denied.");
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  console.log("Access granted.");
  next();
};


export default adminMiddleware;


