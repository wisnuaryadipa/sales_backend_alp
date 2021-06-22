import {DataTypes, Sequelize} from 'sequelize';

const Roles = (sequelize: Sequelize) => {
    const Roles = sequelize.define('roles', {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        display_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false
        },
        sub_role: {
          type: DataTypes.STRING,
          allowNull: true
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
    
    return Roles;
}

export default Roles;