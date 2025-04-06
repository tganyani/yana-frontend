
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Profile () {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Profile Page</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



