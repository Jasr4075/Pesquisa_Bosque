import { Model, DataTypes, Sequelize } from 'sequelize';
import Arvore from './Arvore';
import Sistema from './Sistema';

class Data extends Model {
  public id!: number;
  public data_insercao!: Date;
  public arvore_id!: number;
  public sistema_id!: number;

  static initModel(sequelize: Sequelize) {
    Data.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        data_insercao: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        arvore_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Arvore,
            key: 'id',
          },
        },
        sistema_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Sistema,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Data',
        tableName: 'Data',
        schema: 'ProjWeb',
      }
    );
  }
}

export default Data;
