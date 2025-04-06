import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TopBar } from ".";
import { ScrollView } from "react-native";
import { Divider } from "react-native-paper";

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
];

const ChatList = ({ Item }: any) => (
  <View style={styles.listContainer}>
    <View style={styles.listItem}>
      <Image
        style={{ width: 56, height: 56, borderRadius: 28 }}
        source={require(`@/assets/images/home/pf1.png`)}
        alt="progect-image"
      />
      <View style={styles.listText}>
        <Text style={styles.chatName}>Елизавета Осинская</Text>
        <Text style={styles.lastChat}>Мне все нравится 😉</Text>
      </View>
      <View style={styles.listRight}>
        <View style={styles.online}></View>
        <Text style={styles.time}>12:44</Text>
      </View>
    </View>
    <Divider />
  </View>
);

export default function () {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TopBar />
      </View>
      <View style={styles.topText}>
        <Text style={{ color: "white", fontSize: 20 }}>Сообщения</Text>
      </View>
      <FlatList
        style={styles.chatList}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        data={data}
        renderItem={ChatList}
        keyExtractor={(item: any) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    flex: 1,
  },
  topText: {
    paddingHorizontal: 15,
  },
  chatList: {
    marginTop: 15,
    backgroundColor: "rgba(54, 54, 54, 1)",
    minHeight: "100%",
    padding: 15,
    borderRadius: 32,
  },
  listContainer: {
    rowGap: 20,
    // alignItems:"center",
    justifyContent: "center",
    // backgroundColor:"red",
  },
  listItem: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  listText: {
    justifyContent: "space-around",
  },
  listRight: {
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  chatName: {
    fontSize: 18,
    color: "white",
  },
  lastChat: {
    fontSize: 14,
    color: "white",
  },
  online: {
    backgroundColor: "rgba(255, 159, 247, 1)",
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  time: {
    fontSize: 14,
    color: "rgba(164, 164, 164, 1)",
  },
});
