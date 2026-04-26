import { View } from "react-native";

export function Token({ color }) {
  return (
    <View
      style={{
        width: 16, // bigger
        height: 16,
        borderRadius: 8,
        backgroundColor: color,
        borderWidth: 2, // add border
        borderColor: "#fff", // white outline so it stands out
        margin: 1,
      }}
    />
  );
}
