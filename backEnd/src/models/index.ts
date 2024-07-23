import sequelize from '../config/Config'; // Importa la configuración de Sequelize

// Importa todos los modelos
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
    // Inicializa los modelos
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

    // Sincroniza todos los modelos con la base de datos
    // await sequelize.sync({ force: true }); // Usa { force: true } para recrear las tablas

    console.log('¡Tablas creadas con éxito!');
})();
