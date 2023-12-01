import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "contextProvider/Provider/ContextProvider";
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
