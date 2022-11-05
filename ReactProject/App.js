import React from "react";
import { NavigationContainer } from '@react-navigation/native';

//navigation
import BottomStack from "./src/navigation/BottomStack";

const App = () => {
  return (
    <NavigationContainer>
      <BottomStack />
    </NavigationContainer>
  );
};

export default App;