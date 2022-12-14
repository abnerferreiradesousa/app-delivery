module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    saleId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    productId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    quantity: DataTypes.INTEGER,
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products',
  });

  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'sales',
    });

    models.products.belongsToMany(models.sales, {
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'products',
    });
  }

  return salesProducts;
}  