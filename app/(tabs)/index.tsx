import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}> 
        <ImageBackground
        source={{ uri: "https://pushpro-staging-data.s3.us-east-2.amazonaws.com/documents/15/1729859052570_contractor1-logo.jpg" }}
        style={styles.backgroundImage}
      >
      </ImageBackground>
      <Text style={styles.text}>Home screen</Text>
        <ImageBackground
        source={{ uri: "https://pushpro-staging-data.s3.us-east-2.amazonaws.com/documents/15/1729859053189_login-img.png" }}
        style={styles.backgroundImage}
      >
      </ImageBackground>
      <Text style={styles.text}>Home screen</Text>
        <ImageBackground
        source={{ uri: "https://pushpro-staging-data.s3.us-east-2.amazonaws.com/documents/15/1729859051390_zillow.svg" }}
        style={styles.backgroundImage}
      >
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents:'none'
  },
  backgroundImage: {
    width: 200,
    height: 100, 
    flex:1,   
    alignItems: 'center',
    justifyContent: 'center',
    margin:100
  },
  text: {
    color: 'white',
    marginTop:100,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
