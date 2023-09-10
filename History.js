import { View } from "react-native";

export default function History() {
  useEffect(() => {
    setLastData();
  }, [sign, result]);
  const setLastData = () => {
    if (sign !== "") {
      setData([...data, { text1, sign, text2, result }]);
    }
    setSign("");
  };
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
