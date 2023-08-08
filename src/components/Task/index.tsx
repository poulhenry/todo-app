import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../theme'
import { styles } from './styles'

type TaskProps = {
  id?: string
  name: string
  isCompleted: boolean
}

export function Task({ name, isCompleted }: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name={
            isCompleted
              ? 'checkbox-marked-circle'
              : 'checkbox-blank-circle-outline'
          }
          size={22}
          color={
            isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue
          }
        />
      </TouchableOpacity>

      <View style={styles.containerTextTask}>
        <Text style={isCompleted ? styles.textDone : styles.textCreated}>
          {name}
        </Text>
      </View>

      <TouchableOpacity>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={22}
          color={theme.colors.base.gray300}
        />
      </TouchableOpacity>
    </View>
  )
}
