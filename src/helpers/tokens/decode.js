import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * @param {string} token the token to decode
 * @returns {object} the decoded token
 */
export default (token = '') => {
  try {
    const secretKey = process.env.SECRET_KEY || '$2a$08$6tn6sfmwHglTbOB1bP9gZuAUv'
    return jwt.verify(token, secretKey);
  } catch (error) {
    return {
      errors: error
    };
  }
};
