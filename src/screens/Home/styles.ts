import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
  },

  content: {
    marginHorizontal: 24,
  },

  infoTasks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
  },

  labelCreate: {
    fontFamily: theme.font_family.bold,
    color: theme.colors.brand.blue,
    fontSize: 14,
  },

  labelComplete: {
    fontFamily: theme.font_family.bold,
    color: theme.colors.brand.purple,
    fontSize: 14,
  },

  labelQuantity: {
    borderRadius: 10,
    width: 24,
    height: 20,
    backgroundColor: theme.colors.base.gray400,
    color: theme.colors.base.gray200,
    paddingTop: 2,
    paddingHorizontal: 8,
    fontSize: 12,
  },
})
