import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { AppStyleSheet } from "../styles/AppStyleSheet";

export default function FrontPage() {
  const router = useRouter();

  return (
    <View style={AppStyleSheet.container}>
      <Text style={{ fontSize: 28, marginBottom: 30, fontWeight: "bold" }}>
        🎲 LudoVerse
      </Text>

      <TouchableOpacity
        style={AppStyleSheet.button}
        onPress={() => router.push("/game")}
      >
        <Text style={AppStyleSheet.buttonText}>Play Online</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={AppStyleSheet.button}
        onPress={() => router.push("/game")}
      >
        <Text style={AppStyleSheet.buttonText}>Play with Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={AppStyleSheet.button}>
        <Text style={AppStyleSheet.buttonText}>Computer / AI</Text>
      </TouchableOpacity>

      <TouchableOpacity style={AppStyleSheet.button}>
        <Text style={AppStyleSheet.buttonText}>Local / Pass‑N‑Play</Text>
      </TouchableOpacity>
    </View>
  );
}
