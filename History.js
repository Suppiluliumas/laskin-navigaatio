import React from "react";
import { View, Text } from "react-native";

const History = ({ data }) => {
  return (
    <View>
      <Text>Calculation History:</Text>
      {data.map((item, index) => (
        <Text key={index}>{`${item.text1} ${item.sign} ${item.text2} = ${item.result}`}</Text>
      ))}
    </View>
  );
};

export default History;