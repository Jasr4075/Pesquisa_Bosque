import { Model, DataTypes, Sequelize } from 'sequelize';
import Sistema from './Sistema';

class Usuario extends Model {
  public id!: number;
  public nome!: string;
  public senha!: string;
  public sistema_id!: number;

  static initModel(sequelize: Sequelize) {
    Usuario.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        senha: {
          type: DataTypes.STRING(255),
          allowNull: false,
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
        modelName: 'Usuario',
        tableName: 'Usuario',
        schema: 'ProjWeb',
      }
    );
  }
}

export default Usuario;
