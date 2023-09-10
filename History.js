import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
export default function History({ route }) {
  const { data } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>{`${item.text1} ${item.sign} ${item.text2} = ${item.result}`}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" />
    </View>
  );
}
