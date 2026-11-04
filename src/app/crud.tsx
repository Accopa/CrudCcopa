import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const crud = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CREAR CRUD</Text>
        
        <View style={styles.inputContainer}>
        <TextInput
        placeholder='Coloca tu DNI'
        style={styles.input}
        keyboardType='numeric'
        >

        </TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder='Coloca tus nombres'
        style={styles.input}
        >

        </TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder='Coloca tu Correo Electronico'
        style={styles.input}
        keyboardType='email-address'
        >

        </TextInput>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
        placeholder='Coloca tu celular'
        style={styles.input}
        keyboardType='number-pad'
        >

        </TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={{color : 'white'}}> CREATE </Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button}>
            <Text style={{color : 'white'}}> READ </Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button}>
            <Text style={{color : 'white'}}> UPDATE </Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button}>
            <Text style={{color : 'white'}}> DELETE </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default crud



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'darkblue',
    padding : 10,
    
  },

  titulo : {
    textAlign : 'center',
    fontSize : 28,
    color : 'white',
  },

  inputContainer : {
    marginTop :20,
  },
  
  input : {
    backgroundColor :'white',
    borderRadius : 5,
    paddingHorizontal : 20,
    paddingVertical : 20,
  },

  buttonContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginVertical : 50,
  },

  button : {
    backgroundColor : 'red',
    padding : 20,
    borderRadius : 20,
  }
});
