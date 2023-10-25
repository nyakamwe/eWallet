
export default (sequelize, DataTypes) => {
  const Wallet = sequelize.define(
    'Wallet',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      customerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Customers',
            key: 'id',
          },
      },
      balance: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0
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
  Wallet.associate = (models) => {
    Wallet.belongsTo(models.Customer, { 
      foreignKey: 'customerId'
    })
  };
  return Wallet;
};
