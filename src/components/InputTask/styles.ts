import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  containerInputTask: {
    flexDirection: 'row',
    alignContent: 'center',
    gap: 4,
    marginTop: -25,
  },

  input: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    borderColor: theme.colors.base.gray700,
    backgroundColor: theme.colors.base.gray500,
    padding: 16,
    color: theme.colors.base.gray100,
  },

  onFocusInput: {
    borderColor: theme.colors.brand.purple_dark,
  },

  button: {
    borderRadius: 6,
    color: theme.colors.base.gray100,
    backgroundColor: theme.colors.brand.blue_dark,
    padding: 18,
  },
})
