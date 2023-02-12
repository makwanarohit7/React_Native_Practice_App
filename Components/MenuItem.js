import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

const Item = ({ name, price }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemText}>{price}$</Text>
  </View>
);

const MenuItem = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const renderItem = ({ item }) => {
    return <Item name={item.title} price={item.price} />;
  };

  const getMenu = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json"
      );
      const json = await response.json();
      setData(json.menu);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenu();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};
export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#495E57",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 22,
  },
  headerText: {
    color: "#495E57",
    fontSize: 30,
    textAlign: "center",
  },
});
