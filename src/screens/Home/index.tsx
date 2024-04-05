import { Alert, FlatList, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";
import { useState } from "react";

export function Home(){
  const [participantName, setParticipantName] = useState('')
  const [participants, setParticipants] = useState(['Fulano', 'Ciclano', 'Beltrano'])

  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert('Participante existe', 'Esse participante já foi adicionado')
    }

    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string){
    Alert.alert('Remover participante', `Deseja remover ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ])    
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          value={participantName}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          style={styles.input}
          onChangeText={setParticipantName}
        />

        <Button onPress={handleParticipantAdd}>+</Button>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={(participant) => participant}
        renderItem={({ item }) => {
          return(
            <Participant 
              name={item} 
              onRemove={() => handleParticipantRemove(item)}
            />
          )
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return(
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
            </Text>
          )
        }}
      />
        
    </View>
  )
}