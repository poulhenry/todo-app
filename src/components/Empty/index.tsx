import { Image, Text, View } from 'react-native'
import { styles } from './styles'
import { theme } from '../../theme'

export function Empty() {
  return (
    <View style={styles.containerEmpty}>
      <Image source={require('../../../assets/Clipboard.png')} alt="" />

      <View style={styles.containerTexts}>
        <Text
          style={{
            color: theme.colors.base.gray300,
            fontFamily: theme.font_family.bold,
          }}
        >
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text
          style={{
            color: theme.colors.base.gray300,
            fontFamily: theme.font_family.regular,
          }}
        >
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
