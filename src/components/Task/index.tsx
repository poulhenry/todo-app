import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../theme'
import { styles } from './styles'

type TaskProps = {
  id?: string
  name: string
  isCompleted: boolean
  onCompletedTask: () => void
  onRemoveTask: () => void
}

export function Task({
  name,
  isCompleted,
  onCompletedTask,
  onRemoveTask,
}: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={onCompletedTask}>
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

      <TouchableOpacity onPress={onRemoveTask}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={22}
          color={theme.colors.base.gray300}
        />
      </TouchableOpacity>
    </View>
  )
}
