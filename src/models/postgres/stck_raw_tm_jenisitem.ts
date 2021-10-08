import {DataTypes, Sequelize} from 'sequelize';

const stck_raw_tm_jenisitem = (sequelize: Sequelize) => {
    const stck_raw_tm_jenisitem = sequelize.define('stck_raw_tm_jenisitem', {
            uid: {
                type: DataTypes.STRING,
                allowNull: false
            },
            sub_jenis_item: {
                type: DataTypes.STRING,
                allowNull: false
            },
            alias: {
                type: DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false
            },
            created_by: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                field: 'created_at'
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
    
        stck_raw_tm_jenisitem.addScope('activeJenisItem', {
            where: {
                status: '1'
            }
        })
    return stck_raw_tm_jenisitem;
}

export default stck_raw_tm_jenisitem;