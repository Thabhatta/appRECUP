import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//IMPORT DA TELA DE CADASTRO:
import TelaCadastro from './src/pages/TelaCadastro';
import TelaListagem from './src/pages/TelaListagem';

//PILHA DE NAVEGAÇÃO:
const AppNavigator = createStackNavigator({
  'TelaListagem':{

    screen: TelaListagem,
    navigationOptions:{
      title: 'LISTAGEM'
    }

  },
  'Cadastro':{

    screen: TelaCadastro,
    navigationOptions:{
      title: 'CADASTRO'
    }

  }
},
{
  //ESTILIZAÇÃO GLOBAL DOS CABEÇALHOS DE NAVEGAÇÃO:
  headerStyle:{
    backgroundColor: '#6ca2f7',
    borderBottomWith:10,
    borderBottomColor:'#c5c5c5'
  },
  headerTitleStyle:{
    color: '#fff',
    fontSize: 30
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;