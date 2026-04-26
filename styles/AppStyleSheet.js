import { StyleSheet } from "react-native";

export const AppStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#333",
  },
  button: {
    backgroundColor: "#4d4dff",
    padding: 14,
    marginVertical: 10,
    borderRadius: 8,
    width: 220,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
});
