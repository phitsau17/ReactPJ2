import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/cat';
import CatDetail from './components/CatDetail';

export default function App() {
  return (

    
/*     <View style={styles.container}>
      <Text>Class React Native</Text>
      <StatusBar style="auto" />
    </View> */


    <View>
      <Text>Your First App</Text>
      <Cat/>
      <CatDetail/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
