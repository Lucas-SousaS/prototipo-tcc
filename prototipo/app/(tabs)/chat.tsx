import CustomLogo from "@/components/CustomLogo";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import OpenAI from "openai";
import { useEffect } from "react";

const token = process.env.EXPO_PUBLIC_CHATGPT_API_KEY;
const endpoint = "https://models.github.ai/inference";
const modelName = "openai/gpt-4o-mini";
export default function Chat() {
  const client = new OpenAI({ baseURL: endpoint, apiKey: token, dangerouslyAllowBrowser: true });

  async function RespExe() {
    const response = await client.chat.completions.create({
      messages: [
        { role: "user", content: "remedio bom para dor de cabeça" },
      ],
      temperature: 1.0,
      top_p: 1.0,
      max_tokens: 1000,
      model: modelName,
    });

    console.log(response.choices[0].message.content);
  }

  useEffect(() => {
    RespExe().catch((err) => {
      console.error("The sample encountered an error:", err);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <CustomLogo width={200} height={200} />
        </View>
        <View style={styles.boxInput}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <FontAwesomeIcon size={28} icon="camera" color="#737373" />
            <TextInput
              accessibilityLabel="Faça sua pergunta"
              placeholder="Faça sua pergunta"
              style={styles.inputChat}
            />
          </View>
          <FontAwesomeIcon
            size={28}
            icon="paper-plane"
            color="#00C6FF"
            style={styles.camIcon}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  box: {
    display: "flex",
    width: "80%",
    marginTop: 38,
  },
  inputChat: {
    padding: 10,
  },
  boxInput: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
  },
  camIcon: {},
});
