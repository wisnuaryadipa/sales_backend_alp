import {DataTypes, Sequelize} from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    }
  }, {
    // Another option
  });

  return Users;
}