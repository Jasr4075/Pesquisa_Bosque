import { Model, DataTypes, Sequelize } from 'sequelize';
import Ordem from './Ordem';

class Familia extends Model {
  public id!: number;
  public nome!: string;
  public ordem_id!: number;

  static initModel(sequelize: Sequelize) {
    Familia.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        ordem_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Ordem,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Familia',
        tableName: 'Familia',
        schema: 'ProjWeb',
      }
    );
  }
}

export default Familia;
