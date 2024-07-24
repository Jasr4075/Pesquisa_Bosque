import { Model, DataTypes, Sequelize } from 'sequelize';
import Arvore from './Arvore';

class Arvore_Imagens extends Model {
  public id!: number;
  public descricao!: string;
  public imagem!: string;
  public qrcode!: string;
  public arvore_id!: number;

  static initModel(sequelize: Sequelize) {
    Arvore_Imagens.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        descricao: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        imagem: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        qrcode: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        arvore_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Arvore,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Arvore_Imagens',
        tableName: 'Arvore_Imagens',
        timestamps: true,
      }
    );
  }
}

export default Arvore_Imagens;
