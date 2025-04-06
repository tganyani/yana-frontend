import { ScrollView, StyleSheet, View, Text, FlatList } from "react-native";
import { Appbar } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Avatar, Button, Card, Text as Text2 } from "react-native-paper";
import { Chip } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

const data = [
  {
    id: 1,
    name: "Елизавета Брусник",
    image: "img2.png",
    cover: "img1.png",
    field: "ДИЗАЙНЕР",
    position: "UX/UI дизайнер",
  },
  {
    id: 2,
    name: "Елизавета Брусник",
    image: "img2.png",
    cover: "img1.png",
    field: "ДИЗАЙНЕР",
    position: "UX/UI дизайнер",
  },
  {
    id: 3,
    name: "Елизавета Брусник",
    image: "img2.png",
    cover: "img1.png",
    field: "ДИЗАЙНЕР",
    position: "UX/UI дизайнер",
  },
];

const HomeCard = ({ item }: any) => {
  return (
    <Card style={{ backgroundColor: "#363636" }}>
      <Card.Title
        title={
          <Chip
            textStyle={{ color: "white" }}
            style={{
              height: 40,
              width: 148,
              borderRadius: 20,
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            {item.position}
          </Chip>
        }
        style={{ padding: 15 }}
      />
      <Card.Cover
        style={{ marginHorizontal: 15 }}
        source={require("@/assets/images/home/img1.png")}
      />
      <Card.Actions>
        <Avatar.Image
          size={40}
          source={require(`@/assets/images/home/img2.png`)}
        />
        <View>
          <Text2 style={[styles.textColor]} variant="titleLarge">
            {item.name}
          </Text2>
          <Text2
            style={{ color: "rgba(255, 255, 255, 1)" }}
            variant="bodyMedium"
          >
            {item.field}
          </Text2>
        </View>
        <Avatar.Icon
          style={{ backgroundColor: "#FF9FF7" }}
          size={40}
          color="white"
          icon={({ size, color }) => (
            <AntDesign name="like1" size={size} color={color} />
          )}
        />
        <Avatar.Icon
          style={{ backgroundColor: "#FF9FF7" }}
          color="white"
          size={40}
          icon={({ size, color }) => (
            <Ionicons name="chatbubble" size={size} color={color} />
          )}
        />
      </Card.Actions>
    </Card>
  );
};
export const TopBar = ()=>(<Appbar.Header style={styles.appBar}>
  <Appbar.Content color="white" title="CREATIFY" />
  <Appbar.Action
    color="white"
    icon={({ size, color }) => (
      <AntDesign name="search1" size={size} color={color} />
    )}
    onPress={() => {}}
  />
  <Appbar.Action
    color="white"
    icon={({ size, color }) => (
      <MaterialCommunityIcons
        name="tune-variant"
        size={size}
        color={color}
      />
    )}
    onPress={() => {}}
  />
</Appbar.Header>)
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TopBar/>
      </View>
      <View style={styles.subText}>
        <Text style={[styles.textColor, { fontSize: 20 }]}>Галерея</Text>
      </View>
      <FlatList
        style={styles.cardContainer}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        data={data}
        renderItem={HomeCard}
        keyExtractor={(item: any) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
  },
  appBar: {
    backgroundColor: "#232323",
  },
  textColor: {
    color: "white",
  },
  subText: {
    padding: 15,
  },
  cardContainer: {
    padding: 15,
    marginBottom: 15,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
