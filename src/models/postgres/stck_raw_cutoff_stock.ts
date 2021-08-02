import {DataTypes, Sequelize} from 'sequelize';

const stck_raw_cutoff_stock = (sequelize: Sequelize) => {
    const stck_raw_cutoff_stock = sequelize.define('stck_raw_cutoff_stock', {
        item_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cabang_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
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
        latest_stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'lastest_stock'
        },
        send_date: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        keterangan: {
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
        gudang_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
      }, {
        // Another option
      });
    
    return stck_raw_cutoff_stock;
}

export default stck_raw_cutoff_stock;