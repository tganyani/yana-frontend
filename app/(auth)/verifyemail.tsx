import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { AuthButton } from "@/components/ui/authButton";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";

export default function EmailVerification() {
  const { email,reset } = useLocalSearchParams();
  const CELL_COUNT = 4;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleVerification = async () => {
    await axios
      .post("http://172.16.74.153:5000/user/verify", { code: value, email})
      .then((res) => {
        if (res.data?.verified === true && parseInt(reset as string)===0) {
          router.replace("/(auth)/loginmethod");
        }
        if (res.data?.verified === true && parseInt(reset as string)===1){
          router.push({pathname:"/(auth)/resetpassword",params:{email}})
        }

      })
      .catch((err) => console.error(err));
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ gap: 60, padding: 8 }}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text1}>
              Мы отправили Вам код для подтверждения вашей почты
            </Text>
            <Text style={styles.text1}>(desx@gmail.com).</Text>
          </View>
          <View style={styles.codeInput}>
            <CodeField
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                >
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={styles.resendContainer}>
            <View style={styles.resendT}>
              <Text style={styles.resendTtext}>Не пришёл код?</Text>
              <TouchableOpacity style={styles.resendTbtn}>
                <Text style={[styles.resendTtext, { fontWeight: 700 }]}>
                  {" "}
                  Отправить снова
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.resendB}>
              <Text style={styles.resendBtext1}>Код истекает через</Text>
              <Text style={styles.resendTtext}> 01:00</Text>
            </View>
          </View>
          <AuthButton
            title="Подтвердить"
            color={
              value.length === CELL_COUNT
                ? "rgba(255, 159, 247, 1)"
                : "rgba(123, 123, 125, 1)"
            }
            handlePress={handleVerification}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  codeInput: {},
  codeFieldRoot: {
    marginTop: 20,
    justifyContent: "center",
    columnGap: 10,
    flexWrap: "nowrap",
  },
  cell: {
    width: 60,
    height: 70,
    fontSize: 24,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
  },
  cellText: {
    fontSize: 24,
  },
  focusCell: {
    borderColor: "#007aff",
  },
  resendContainer: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 15,
  },
  resendT: { flexDirection: "row", justifyContent: "center", columnGap: 8 },
  resendTtext: { color: "white", fontSize: 14 },
  resendTbtn: { justifyContent: "center", alignItems: "center" },
  resendB: { flexDirection: "row", justifyContent: "center", columnGap: 8 },
  resendBtext1: { color: "rgba(164, 164, 164, 1)", fontSize: 14 },
});
