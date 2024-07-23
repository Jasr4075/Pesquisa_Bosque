import { Model, DataTypes, Sequelize } from 'sequelize';
import Genero from './Genero';

class Especie extends Model {
  public id!: number;
  public nome!: string;
  public genero_id!: number;

  static initModel(sequelize: Sequelize) {
    Especie.init(
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
        genero_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Genero,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Especie',
        tableName: 'Especie',
          timestamps: true,
      }
    );
  }
}

export default Especie;
