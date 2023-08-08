import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  containerEmpty: {
    height: 208,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: theme.colors.base.gray300,
  },

  containerTexts: {
    marginTop: 16,
  },
})
