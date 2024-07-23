import { Model, DataTypes, Sequelize } from 'sequelize';
import Reino from './Reino';

class Filo extends Model {
  public id!: number;
  public nome!: string;
  public reino_id!: number;

  static initModel(sequelize: Sequelize) {
    Filo.init(
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
        reino_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Reino,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Filo',
        tableName: 'Filo',
          timestamps: true,
      }
    );
  }
}

export default Filo;
