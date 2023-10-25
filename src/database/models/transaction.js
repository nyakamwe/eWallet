
export default (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'Transaction',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      walletId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Wallets',
            key: 'id',
          },
      },
      senderWalletId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Wallets',
            key: 'id',
          },
      },
      receiverWalletId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Wallets',
            key: 'id',
          },
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM('topup', 'pay'),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'success', 'failed', 'timedout'),
        allowNull: false,
        defaultValue: 'pending'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Wallet, { 
      foreignKey: 'senderWalletId'
    });
    Transaction.belongsTo(models.Wallet, { 
      foreignKey: 'receiverWalletId'
    })
    Transaction.belongsTo(models.Wallet, { 
      foreignKey: 'walletId'
    })
  };
  return Transaction;
};
