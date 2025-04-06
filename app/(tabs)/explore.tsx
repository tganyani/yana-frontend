import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Text as Text2 } from "react-native-paper";
import { TopBar } from ".";

const data = [
  {
    id: 1,
    position: "UX/UI дизайнер",
    image: "",
  },
  {
    id: 2,
    position: "UX/UI дизайнер",
    image: "",
  },
  {
    id: 3,
    position: "UX/UI дизайнер",
    image: "",
  },
  {
    id: 4,
    position: "UX/UI дизайнер",
    image: "",
  },
  {
    id: 5,
    position: "UX/UI дизайнер",
    image: "",
  },
  {
    id: 6,
    position: "UX/UI дизайнер",
    image: "",
  },
  {
    id: 7,
    position: "UX/UI дизайнер",
    image: "",
  },
  {
    id: 8,
    position: "UX/UI дизайнер",
    image: "",
  },
  {
    id: 9,
    position: "UX/UI дизайнер",
    image: "",
  },
  {
    id: 10,
    position: "UX/UI дизайнер",
    image: "",
  },
];

const ExploreCard = ({ item }: any) => (
  <View style={styles.card}>
    <View style={styles.title}>
      <Text style={[styles.textColor, styles.titleText]}>{item.position}</Text>
    </View>
    <View style={styles.image}>
      <View style={styles.imageInner}>
        <Image
          style={{ height: 164, width: 155, borderRadius: 20 }}
          source={require(`@/assets/images/home/bg2.png`)}
          alt="progect-image"
        />
      </View>
    </View>
    <View style={styles.bottom}>
      <View style={styles.bottomInneContainer}>
        <View style={styles.bottomInner1}>
          <Text style={[styles.textColor, styles.bottomText]}>Марк Исаев</Text>
          <View style={styles.indicator}></View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.textColor,{fontSize:10}]}>Написать автору</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TopBar />
      </View>
      <View style={styles.titleContainer}>
        <Text2 style={{ color: "white", fontSize: 20 }}>
          Поиск исполнителя
        </Text2>
      </View>
      <FlatList
        style={styles.cardContainer}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        data={data}
        renderItem={ExploreCard}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
  },
  titleContainer: {
    paddingHorizontal: 15,
  },
  cardContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
    
  },
  card: {
    height: 231,
    width: 163,
    backgroundColor: "rgba(54, 54, 54, 1)",
    position: "relative",
    borderRadius: 22,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    width: "100%",
  },
  bottom: {
    position: "absolute",
    top: 165,
    width: "100%",
    height: 55,
  },
  textColor: {
    color: "white",
  },
  titleText: {
    fontSize: 10,
    backgroundColor: "#232323",
    textAlign: "center",
    height: 28,
    width: 109,
    top: -10,
    paddingTop: 12,
    borderRadius: 14,
    zIndex: 2,
  },
  imageInner: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomInner1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 4,
  },
  bottomText: {
    fontSize: 14,
  },
  indicator: {
    backgroundColor: "rgba(19, 227, 152, 1)",
    height: 6,
    width: 6,
    borderRadius: 3,
  },
  bottomInneContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
  },
  button: {
    width: 111,
    height: 22,
    backgroundColor: "rgba(255, 159, 247, 1)",
    alignItems: "center",
    borderRadius: 11,
    justifyContent:"center"
  },
});