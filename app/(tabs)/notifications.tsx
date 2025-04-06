import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Notifications () {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Notification Page</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
