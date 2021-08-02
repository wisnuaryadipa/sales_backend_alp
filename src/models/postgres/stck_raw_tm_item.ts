import {DataTypes, Sequelize} from 'sequelize';

const stck_raw_tm_item = (sequelize: Sequelize) => {
    const stck_raw_tm_item = sequelize.define('stck_raw_tm_item', {
        nama_item: {
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
        uid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        uid_sub_jenis_item: {
            type: DataTypes.STRING,
            allowNull: false
        },
        uid_jenis_item: {
            type: DataTypes.STRING,
            allowNull: true
        },
        satuan: {
            type: DataTypes.STRING,
            allowNull: true
        },
        max_stock: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        min_bawah_stock: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        min_atas_stock: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        notif_stock: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        deleted: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ukuran: {
            type: DataTypes.STRING,
            allowNull: true
        },
      }, {
        // Another option
      });
    
    return stck_raw_tm_item;
}

export default stck_raw_tm_item;