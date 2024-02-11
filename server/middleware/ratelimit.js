const rateLimiter = require('express-rate-limit');

const rateLimit = rateLimiter({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 5,
  message: 'The limit has been exceeded. Please wait 24 hours before trying again.', 
  standardHeaders: true,
  legacyHeaders: false,
});



module.exports = rateLimit;
