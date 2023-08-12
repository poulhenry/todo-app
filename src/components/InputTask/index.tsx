import { TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '../../theme'

type InputTaskProps = {
  valueInput: string
  setValueInput: (value: string) => void
  onInputText: () => void
}

export function InputTask({
  valueInput,
  setValueInput,
  onInputText,
}: InputTaskProps) {
  return (
    <View style={styles.containerInputTask}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setValueInput}
        value={valueInput}
      />

      <TouchableOpacity onPress={onInputText} style={styles.button}>
        <MaterialIcons
          name="add-circle-outline"
          size={20}
          color={theme.colors.base.gray100}
        />
      </TouchableOpacity>
    </View>
  )
}
