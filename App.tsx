import { ActivityIndicator, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import Home from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <ActivityIndicator size={50} />
  }

  return (
    // <View>
    //   <Home />

    //   <StatusBar style="auto" />
    // </View>
    <Home />
  )
}
