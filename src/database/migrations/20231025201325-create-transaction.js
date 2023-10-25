export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Transactions', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    walletId: {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
          model: 'Wallets',
          key: 'id',
        },
    },
    senderWalletId: {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
          model: 'Wallets',
          key: 'id',
        },
    },
    receiverWalletId: {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
          model: 'Wallets',
          key: 'id',
        },
    },
    amount: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM('topup', 'pay'),
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('pending', 'success', 'failed', 'timedout'),
      allowNull: false,
      defaultValue: 'pending'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Transactions')
};
