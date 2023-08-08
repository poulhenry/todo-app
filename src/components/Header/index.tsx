import { Image, View } from 'react-native'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../../../assets/Logo.png')} alt="" />
    </View>
  )
}
