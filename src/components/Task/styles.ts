import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    minHeight: 64,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.base.gray400,
    borderRadius: 8,
    backgroundColor: theme.colors.base.gray500,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },

  containerTextTask: {
    marginHorizontal: 8,
    flex: 1,
    justifyContent: 'flex-start',
  },

  textCreated: {
    color: theme.colors.base.gray100,
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.regular,
    textDecorationLine: 'none',
  },

  textDone: {
    color: theme.colors.base.gray300,
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.regular,
    textDecorationLine: 'line-through',
  },
})
