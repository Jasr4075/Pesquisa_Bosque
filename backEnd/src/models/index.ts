import sequelize from '../config/Config'; // Importa la configuración de Sequelize
import Reino from './Reino';
import Filo from './Filo';
import Classe from './Classe';
import Ordem from './Ordem';
import Familia from './Familia';
import Genero from './Genero';
import Especie from './Especie';
import Grupo from './Grupo';
import Tipo from './Tipo';
import Localizacao from './Localizacao';
import Sistema from './Sistema';
import Arvore from './Arvore';
import Arvore_Imagens from './Arvore_Imagens';
import Usuario from './Usuario';
import Data from './Data';

// Inicializa los modelos
(async () => {
    try {
        Reino.initModel(sequelize);
        Filo.initModel(sequelize);
        Classe.initModel(sequelize);
        Ordem.initModel(sequelize);
        Familia.initModel(sequelize);
        Genero.initModel(sequelize);
        Especie.initModel(sequelize);
        Grupo.initModel(sequelize);
        Tipo.initModel(sequelize);
        Localizacao.initModel(sequelize);
        Sistema.initModel(sequelize);
        Arvore.initModel(sequelize);
        Arvore_Imagens.initModel(sequelize);
        Usuario.initModel(sequelize);
        Data.initModel(sequelize);

        // Define asociaciones entre modelos
        Filo.belongsTo(Reino, { foreignKey: 'reino_id' });
        Reino.hasMany(Filo, { foreignKey: 'reino_id' });

        Classe.belongsTo(Filo, { foreignKey: 'filo_id' });
        Filo.hasMany(Classe, { foreignKey: 'filo_id' });

        Ordem.belongsTo(Classe, { foreignKey: 'classe_id' });
        Classe.hasMany(Ordem, { foreignKey: 'classe_id' });

        Familia.belongsTo(Ordem, { foreignKey: 'ordem_id' });
        Ordem.hasMany(Familia, { foreignKey: 'ordem_id' });

        Genero.belongsTo(Familia, { foreignKey: 'familia_id' });
        Familia.hasMany(Genero, { foreignKey: 'familia_id' });

        Especie.belongsTo(Genero, { foreignKey: 'genero_id' });
        Genero.hasMany(Especie, { foreignKey: 'genero_id' });

        Grupo.belongsTo(Familia, { foreignKey: 'familia_id' });
        Familia.hasMany(Grupo, { foreignKey: 'familia_id' });

        Arvore.belongsTo(Tipo, { foreignKey: 'tipo_id' });
        Arvore.belongsTo(Localizacao, { foreignKey: 'localizacao_id' });
        Arvore.belongsTo(Sistema, { foreignKey: 'sistema_id' });

        Arvore_Imagens.belongsTo(Arvore, { foreignKey: 'arvore_id' });
        Arvore.hasMany(Arvore_Imagens, { foreignKey: 'arvore_id' });

        Data.belongsTo(Usuario, { foreignKey: 'usuario_id' });
        Usuario.hasMany(Data, { foreignKey: 'usuario_id' });

        // Sincroniza todos los modelos con la base de datos
        // await sequelize.sync({ force: true }); // Usa { force: true } para recrear las tablas

        console.log('¡Tablas creadas con éxito!');
    } catch (error) {
        console.error('Error al crear las tablas:', error);
    }
})();
