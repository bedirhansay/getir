import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "context";
import { RootNavigators } from "navigations";
import "react-native-gesture-handler";

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <RootNavigators />
      </NavigationContainer>
    </ContextProvider>
  );
}
