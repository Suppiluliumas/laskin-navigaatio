import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
export default function Calculator({ navigation }) {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);
  const [result, setResult] = useState(0);
  const [sign, setSign] = useState("");
  const [data, setData] = useState([]);
  console.log(navigation);
  const addition = () => {
    setSign("+");
    setResult(parseInt(text1) + parseInt(text2));
  };
  useEffect(() => {
    setLastData();
  }, [sign, result]);
  const setLastData = () => {
    if (sign !== "") {
      setData([...data, { text1, sign, text2, result }]);
    }
    setSign("");
  };

  const subtraction = () => {
    setSign("-");
    setResult(parseInt(text1) - parseInt(text2));
  };

  const buttons = StyleSheet.create({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  });


  return (
    <View>
      <Text>{"Result:" + result}</Text>
      <TextInput
        keyboardType="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text1) => setText1(text1)}
        value={text1.toString()}
      />
      <TextInput
        keyboardType="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text2) => setText2(text2)}
        value={text2.toString()}
      />

      <View style={buttons}>
        <Button onPress={addition} title="+" />
        <Button
          onPress={() => {
            navigation.navigate("History", { data: data });
          }}
          title="History"
        />

        <Button onPress={subtraction} title="-" />
      </View>
    </View>
  );
}
