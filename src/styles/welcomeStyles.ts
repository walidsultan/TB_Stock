import { StyleSheet } from 'react-native';

const WelcomeStyles = StyleSheet.create({

    body:{
        padding:10,
        flex: 1
    },
  title:{
    marginTop:10,
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: 'monospace'
  },

  button:{
      width:100,
      height:100,
      backgroundColor: '#ccc',
      borderStyle:'solid',
      borderWidth:2,
      borderRadius:5,
      marginBottom:15,
      justifyContent: 'center',

  },
  buttonText:{
      textAlign:'center'
  },
  buttonsContainer:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center'
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: undefined,
    height: undefined
    },
     buttonHighlight: {
        flex:1,
          justifyContent: 'center'

    }
});

export default WelcomeStyles;