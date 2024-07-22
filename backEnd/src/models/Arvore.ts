import { Model, DataTypes, Sequelize } from 'sequelize';
import Especie from './Especie';
import Localizacao from './Localizacao';

class Arvore extends Model {
  public id!: number;
  public especie!: string;
  public folha!: string;
  public fruto!: string;
  public raiz!: string;
  public altura!: number;
  public especie_id!: number;
  public localizacao_id!: number;

  static initModel(sequelize: Sequelize) {
    Arvore.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        especie: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        folha: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        fruto: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        raiz: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        altura: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        especie_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Especie,
            key: 'id',
          },
        },
        localizacao_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Localizacao,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Arvore',
        tableName: 'Arvore',
        schema: 'ProjWeb',
      }
    );
  }
}

export default Arvore;
