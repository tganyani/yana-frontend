import { StyleSheet } from "react-native";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter, usePathname } from "expo-router";
import { useAssets } from "expo-asset";

export function WelcomeComponent({
  image,
  prevPage,
  nextPage,
  bText,
  sText,
}: {
  image: string;
  prevPage: string;
  nextPage: string;
  bText: string;
  sText: string;
}) {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ gap: 60, padding: 15 }}
        >
          <View style={styles.header}>
            <Link href={"/(auth)" as any} style={styles.link}>
              Пропустить
            </Link>
          </View>
          <View style={styles.bgImage}>
            <Image
              style={{ height: 261 }}
              source={require("@/assets/images/welcome/wbg1.png")}
              alt="welcome-image1"
            />
          </View>
          <View style={styles.dots}>
            <View
              style={[
                styles.dot,
                {
                  backgroundColor:
                    pathName == "/" ? "rgba(255, 159, 247, 1)" : "white",
                },
              ]}
            ></View>
            <View
              style={[
                styles.dot,
                {
                  backgroundColor:
                    pathName == "/welcome2"
                      ? "rgba(255, 159, 247, 1)"
                      : "white",
                },
              ]}
            ></View>
            <View
              style={[
                styles.dot,
                {
                  backgroundColor:
                    pathName == "/welcome3"
                      ? "rgba(255, 159, 247, 1)"
                      : "white",
                },
              ]}
            ></View>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.bigText}>{bText}</Text>
            {/*  */}
            <Text style={styles.smallText}>{sText}</Text>
            {/**/}
          </View>
          <View style={styles.footer}>
            {prevPage !== "" ? (
              <TouchableOpacity
                style={styles.buttonPrev}
                onPress={() => router.push(`${prevPage}` as any)}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: "rgba(255, 159, 247, 1)" },
                  ]}
                >
                  Вернуться
                </Text>
              </TouchableOpacity>
            ) : (
              <View></View>
            )}
            <TouchableOpacity
              style={[
                styles.buttonNext,
                { backgroundColor: "rgba(255, 159, 247, 1)" },
              ]}
              onPress={() => router.push(`${nextPage}` as any)}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: "white",
                  },
                ]}
              >
                Далее
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 5, gap: 50 },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bgImage: {},
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 12,
  },
  infoText: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  bigText: {
    color: "rgba(255, 159, 247, 1)",
    fontSize: 21,
  },
  smallText: {
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    fontSize: 18,
  },
  buttonNext: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonPrev: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});
