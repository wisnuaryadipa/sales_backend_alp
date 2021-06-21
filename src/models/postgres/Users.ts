import {DataTypes, Sequelize} from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const Users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'updated_at'
    },
  }, {
    // Another option
  });

  return Users;
}