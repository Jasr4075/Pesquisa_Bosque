import { Model, DataTypes, Sequelize } from 'sequelize';
import Classe from './Classe';

class Ordem extends Model {
  public id!: number;
  public nome!: string;
  public classe_id!: number;

  static initModel(sequelize: Sequelize) {
    Ordem.init(
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
        classe_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Classe,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Ordem',
        tableName: 'Ordem',
          timestamps: true,
      }
    );
  }
}

export default Ordem;
