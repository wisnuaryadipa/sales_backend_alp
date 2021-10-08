import {DataTypes, Sequelize} from 'sequelize';

const stck_raw_tm_gudang = (sequelize: Sequelize) => {
    const stck_raw_tm_gudang = sequelize.define('stck_raw_tm_gudang', {
        nama_gudang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastedit_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
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
        alias: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        // Another option
    });
    
    stck_raw_tm_gudang.addScope('activeGudang', {
        where: {
            status: '1'
        }
    })
    return stck_raw_tm_gudang;
}

export default stck_raw_tm_gudang;