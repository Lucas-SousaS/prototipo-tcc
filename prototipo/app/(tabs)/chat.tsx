import CustomLogo from "@/components/CustomLogo";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,

} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import OpenAI from "openai";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const token = process.env.EXPO_PUBLIC_CHATGPT_API_KEY;
const endpoint = "https://models.github.ai/inference";
const modelName = "openai/gpt-4o-mini";

export default function Chat() {
  const insets = useSafeAreaInsets();

  const client = new OpenAI({
    baseURL: endpoint,
    apiKey: token,
    dangerouslyAllowBrowser: true,
  });

  const [reqValue, setReqValue] = useState<string>("");
  const [systemMessages, setSystemMessages] = useState<string[]>([]);
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);

  useEffect(() => {
    setHasMessage(userMessages.length > 0 || systemMessages.length > 0);
  }, [userMessages, systemMessages]);

  async function RespExe(content: string) {
    setIsLoading(true);

    try {
      const response = await client.chat.completions.create({
        messages: [{ role: "user", content }],
        temperature: 1.0,
        top_p: 1.0,
        max_tokens: 1000,
        model: modelName,
      });

      const messageContent = response.choices[0].message.content;

      if (content) {
        setUserMessages((prev) => [...prev, content]);
      }

      if (messageContent) {
        setSystemMessages((prev) => [...prev, messageContent]);
        setReqValue("");
      }
    } catch (error) {
      console.error("Erro ao obter resposta:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "android" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "android" ? 90 : 0} 
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.box}>
          {!hasMessage && (
            <View style={styles.boxLogo}>
              <CustomLogo width={200} height={200} />
              <Text style={styles.logoText}>Como Posso Te Ajudar?</Text>
            </View>
          )}

          <ScrollView style={styles.chatArea}>
            {userMessages.map((userMsg, index) => (
              <View key={`user-${index}`}>
                <View style={styles.messageUserBubble}>
                  <Text style={{ color: "#737373" }}>{userMsg}</Text>
                </View>

                {systemMessages[index] && (
                  <View style={styles.messageBubble}>
                    <Text style={{ color: "#737373" }}>{systemMessages[index]}</Text>
                  </View>
                )}
              </View>
            ))}

            {isLoading && (
              <View style={styles.messageBubble}>
                <Text style={{ fontStyle: "italic", color: "gray" }}>
                  Carregando resposta...
                </Text>
              </View>
            )}
          </ScrollView>

          <View style={styles.boxInput}>
            <View style={styles.inputWrapper}>
              <FontAwesomeIcon size={28} icon="camera" color="#737373" />
              <TextInput
                accessibilityLabel="Faça sua pergunta"
                placeholder="Faça sua pergunta"
                style={styles.inputChat}
                value={reqValue}
                onChangeText={setReqValue}
              />
            </View>

            <Pressable style={styles.camIcon} onPress={() => RespExe(reqValue)}>
              <FontAwesomeIcon size={28} icon="paper-plane" color="#00C6FF" />
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
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
    width: "90%",
    marginTop: 20,
    flex: 1,
  },
  chatArea: {
    flex: 1,
    display: "flex",
    position: "relative",
    marginTop: 20
  },
  messageBubble: {
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    padding: 10,
    alignSelf: "flex-start",
    flexShrink: 0,
    maxWidth: "70%",
    marginBottom: 20,
    color: "#737373"
  },
  messageUserBubble: {
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    padding: 10,
    alignSelf: "flex-end",
    flexShrink: 0,
    marginBottom: 20,
    color: "#737373"
  },

  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    gap: 5,
  },
  inputChat: {
    padding: 5,
    flex: 1,
    width: "100%",
    color: "#737373",
     fontWeight: "semibold",
    fontSize: 15
    },
  boxInput: {
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
    marginBottom: 20
  },
  camIcon: {
    paddingLeft: 10,
  },
  boxLogo: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#737373",
  },
});
