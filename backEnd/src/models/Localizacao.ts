import { Model, DataTypes, Sequelize } from 'sequelize';
import Tipo from './Tipo';

class Localizacao extends Model {
  public id!: number;
  public tipo_id!: number;
  public latitude!: number;
  public longitude!: number;
  public area!: number;

  static initModel(sequelize: Sequelize) {
    Localizacao.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        tipo_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Tipo,
            key: 'id',
          },
        },
        latitude: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        longitude: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        area: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Localizacao',
        tableName: 'Localizacao',
        schema: 'ProjWeb',
      }
    );
  }
}

export default Localizacao;
