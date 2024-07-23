import { Model, DataTypes, Sequelize } from 'sequelize';

class Reino extends Model {
  public id!: number;
  public nome!: string;

  static initModel(sequelize: Sequelize) {
    Reino.init(
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
      },
      {
        sequelize,
        modelName: 'Reino',
        tableName: 'Reino',
        timestamps: true,
      }
    );
  }
}

export default Reino;
