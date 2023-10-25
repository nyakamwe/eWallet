import db from '../models';
/**
 * @param {object} modal
 * @returns {object} an object containing the information of single details
 */

export default async (Model, condition = {}, include = []) => {
  try {
    const response = await db[Model].findOne(
      {
        where: condition,
        include,
      },
      { logging: false }
    );
    return response || {};
  } catch (error) {
    return error;
  }
};
