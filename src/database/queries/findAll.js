import db from "../models";

/**
 * @param {object} modal
 * @returns {object} an object containing the response body
 */

export default async (Model, condition = {}, include = null, order = null) => {
    let attributes = {};
    if (Model === 'Customer') {
      attributes = { exclude: ['password'] };
    }
    const meta = {};
    order = order || [['createdAt', 'DESC']];
    try {
      const response = await db[Model].findAll(
        {
          where: condition,
          include,
          attributes,
          order,
        },
        { logging: false }
      );
      return { response, meta };
    } catch (error) {
      throw error;
    }
};
