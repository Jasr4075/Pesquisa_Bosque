import { Model, DataTypes, Sequelize } from 'sequelize';

class Tipo extends Model {
  public id!: number;
  public descricao!: string;

  static initModel(sequelize: Sequelize) {
    Tipo.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        descricao: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Tipo',
        tableName: 'Tipo',
          timestamps: true,
      }
    );
  }
}

export default Tipo;
