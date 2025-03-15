import { View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button mode="contained" onPress={() => console.log("Pressed")}>
        Press me
      </Button>
    </View>
  );
}
