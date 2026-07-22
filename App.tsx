import { Text, TouchableOpacity, View } from 'react-native';
import { handleDelete } from "./src/utils/deleteItem";
import { theme } from './src/ui/theme';
import { styles} from "./src/ui/styles";


export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
      <Text style={styles.itemFont}>Coffee</Text>
        <TouchableOpacity
          onPress={handleDelete}
          style={styles.buttonStyle}
          activeOpacity={0.8}>
          <Text style={{color: theme.colourWhite, letterSpacing: 1}}>Delete</Text>
        </TouchableOpacity>
    </View>
  </View>
  );
}