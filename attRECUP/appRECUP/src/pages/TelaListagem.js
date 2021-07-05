import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDb';

class TelaListagem extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            isLoading: true,
            nomeArr:[]
        }

    }

    componentDidMount(){

        this.firestoreRef = firebase.firestore().collection('nome');
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);

    }

    componentWillUnmount(){

        this.unsubscribe();

    }

    //MÉTODO DE RECUPERA OS DADOS
    getDados = (querySnapshot) => {

        const nomeArr = [];
        
        //PERCORRE TODOS OS DOCUMENTOS
        querySnapshot.forEach( (res) => {

            const { nome, email, telefone } = res.data();

            //ADICIONA OS DADOS DE UM DOCUMENTO POT VEZ NO ARRAY QUE ALIMENTA A STATE
            serieArr.push({

                key: res.id,
                res,
                nome,
                email,
                telefone,

            });

        });

    }

    render(){

        return(

           this.state.nomeArr.map( (item, i) => {
            //    console.log(item.nome);
            //console.log('ARRAY DE DADOS ->', this.state.nomeArr);


                return(
                    <ListItem
                        key={i}
                        bottomDivider
                        onPress={ ()=>{
                                      
                                        this.props.navigation.navigate('TelaCadastro', { seriesKey: item.key });
                                        //console.log(item.key);
                                    
                                      } }
                    >

                        <ListItem.Content>
                            <ListItem.Title>{ item.nome }</ListItem.Title>
                            <ListItem.Subtitle>{ item.email }</ListItem.Subtitle>
                            <ListItem.Subtitle>{ item.telefone }</ListItem.Subtitle>
                        </ListItem.Content>

                    </ListItem>
                );

           })

        );

    }

}

export default TelaListagem;