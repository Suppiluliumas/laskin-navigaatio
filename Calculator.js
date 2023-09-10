import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import History from "./History";
export default function Calculator({ navigation }) {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);
  const [result, setResult] = useState(0);
  const [sign, setSign] = useState("");

  const addition = () => {
    setSign("+");
    setResult(parseInt(text1) + parseInt(text2));
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View>
      <Text>{"Result:" + result}</Text>
      <TextInput
        inputMode="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text1) => setText1(text1)}
        value={text1.toString()}
      />
      <TextInput
        inputMode="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text2) => setText2(text2)}
        value={text2.toString()}
      />

      <View style={buttons}>
        <Button onPress={addition} title="+" />
        <Button
          onPress={() => navigation.navigate("History")}
          title="History"
        />

        <Button onPress={subtraction} title="-" />
      </View>
    </View>
  );
}
