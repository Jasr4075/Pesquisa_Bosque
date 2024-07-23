import { Model, DataTypes, Sequelize } from 'sequelize';
import Filo from './Filo';

class Classe extends Model {
  public id!: number;
  public nome!: string;
  public filo_id!: number;

  static initModel(sequelize: Sequelize) {
    Classe.init(
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
        filo_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Filo,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Classe',
        tableName: 'Classe',
        timestamps: true,
      }
    );
  }
}

export default Classe;
