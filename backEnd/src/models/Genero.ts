import { Model, DataTypes, Sequelize } from 'sequelize';
import Familia from './Familia';

class Genero extends Model {
  public id!: number;
  public nome!: string;
  public familia_id!: number;

  static initModel(sequelize: Sequelize) {
    Genero.init(
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
        familia_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Familia,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Genero',
        tableName: 'Genero',
          timestamps: true,
      }
    );
  }
}

export default Genero;
