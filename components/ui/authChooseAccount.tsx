import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export function ChooseProfileType({
  mainText,
  btnText2,
  btnText1,
  link1,
  link2,
}: any) {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ gap: 40, padding: 15 }}
        >
          <View style={styles.image}>
            <Image
              source={require("@/assets/images/auth/auth-bg.png")}
              alt="auth-image1"
            />
          </View>
          <View style={styles.qTextContainer}>
            <Text style={styles.qText}>{mainText}</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => router.push(link1)}
              style={[
                styles.button,
                { backgroundColor: "rgba(255, 159, 247, 1)" },
              ]}
            >
              <Text style={styles.buttonText}>{btnText1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push(link2)}
              style={[
                styles.button,
                { backgroundColor: "rgba(135, 58, 129, 1)" },
              ]}
            >
              <Text style={styles.buttonText}>{btnText2}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
  },
  qText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 15,
  },
  qTextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 295,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
