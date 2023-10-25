export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Wallets', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    customerId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
          model: 'Customers',
          key: 'id',
        },
    },
    balance: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    }
  }),
  down: queryInterface => queryInterface.dropTable('Wallets')
};
