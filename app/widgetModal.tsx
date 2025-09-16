import { View } from 'react-native';
import WidgetScreen from './(tabs)/widget';

export default function WidgetModalScreen() {
  return <View style={{ flex: 1, paddingBottom: 16}}>
    <WidgetScreen />
  </View>;
}