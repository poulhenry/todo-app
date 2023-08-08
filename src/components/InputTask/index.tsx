import { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { v4 as uuid } from 'uuid'
import { styles } from './styles'
import { theme } from '../../theme'
import { TaskData } from '../../screens/Home'

type InputTaskProps = {
  onInputText: (tasks: TaskData[]) => void
}

export function InputTask({ onInputText }: InputTaskProps) {
  const [valueInput, setValueInput] = useState('')

  function handleSubmitInputTask() {
    const task = {
      id: '1233',
      name: valueInput,
      isCompleted: false,
    }

    onInputText([task])
  }

  return (
    <View style={styles.containerInputTask}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setValueInput}
        value={valueInput}
      />

      <TouchableOpacity onPress={handleSubmitInputTask} style={styles.button}>
        <MaterialIcons
          name="add-circle-outline"
          size={20}
          color={theme.colors.base.gray100}
        />
      </TouchableOpacity>
    </View>
  )
}
