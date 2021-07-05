import React from 'react';
import { View, TextInput, StyleSheet, Picker, Slider, Button, Text, ActivityIndicator } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '../database/firebaseDb';

class TelaCadastro extends React.Component{

    constructor(props){

        super(props);

        // CRAIÇÃO DA STATE:
        this.state = {

            nome: '',
            email: 'SCIFI',
            telefone: '',
        }

    }

    componentDidMount(){

        this.dbRef = firebase.firestore().collection('series');

    }

    //MÉTODO DE CADASTRO
    cadastrar(){

        this.dbRef.add(
            
            //JSON COM OS DADOS A SEREM INSERIDO NA COLLECTION SERIES NO FIRESTORE
            {
                //chave : valor
                nome: this.state.nome,
                email: this.state.email,
                telefone: this.state.telefone,

            }
        ).then( (res)=>{

            this.setState({

                nome: '',
                email: '',
                telefone: '',

            });

            // console.log('DADOS INSERIDOS');
            //REDIRECIONAR PARA A TELA DE LISTAGEM:
            this.props.navigation.navigate('TelaListagem');

        }).catch( (err) => {

            console.log('ERRO: ', err);

        } )

    }

    //MÉTODOS DE CAPTURA DE DADOS
    //NOME
    capturarNome(valor){
        this.setState({
            nome: valor
        })
    }

    //EMAIL
    capturarEmail(valor){
        this.setState({
            email: valor
        })
    }

    //TELEFONE
    capturarTelefone(valor){
        this.setState({
            telefone: valor
        })
    }

    render(){

        return(

            <View>

            {/* <Text>Teste de tela de cadastro</Text> */}
    
            {/* CAMPO DE NOME */}
            <FormRow>
    
               <TextInput 
                    style={styles.input}
                    placeholder='NOME'
                    onChangeText={ valor => this.capturarNome(valor) }
               />
    
            </FormRow>
    
            {/* CAMPO DE EMAIL */}
            <FormRow>
    
                <Picker
                    selectedValue={this.state.email}
                    onValueChange={ valor => this.capturarEmail(valor) }
                >
    
                    <Picker.Item value='' label='' />
    
                </Picker>
    
            </FormRow>
    
            {/* CAMPO DE TELEFONE */}
            <FormRow>
    
                <View style={styles.lineRate}>
    
                    <Text>NOTA:</Text>
                    <Text>{this.state.telefone}</Text>
    
                </View>
    
                <Slider
                    onValueChange={ valor => this.capturarTelefone(valor) }

                />
    
            </FormRow>
    
            {/* BOTÃO DE SALVAR */}
            <Button 
                title="CONCLUIR" 
                // onPress={ () => console.log(this.state) }  
                onPress={ () => this.cadastrar() } 
            />
    
        </View>

        )

    }

}

const styles = StyleSheet.create({

    input:{
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:10
    },
    lineRate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom:10
    }

});

export default TelaCadastro;