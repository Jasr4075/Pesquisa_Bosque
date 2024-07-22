import { Model, DataTypes, Sequelize } from 'sequelize';

class Sistema extends Model {
  public id!: number;
  public id_QrCode!: string;

  static initModel(sequelize: Sequelize) {
    Sistema.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_QrCode: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Sistema',
        tableName: 'Sistema',
        schema: 'ProjWeb',
      }
    );
  }
}

export default Sistema;
