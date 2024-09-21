import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// FONT
import * as Font from 'expo-font'

// PAGES
import MainPage from '@app/views/MainPage'
import CPInfoPage from '@app/views/CPInfo'
import CPCausesPage from '@app/views/CPInfo/Causes'
import CPSymptomsPage from '@app/views/CPInfo/Symptoms'
import CPCategoriesPage from '@app/views/CPInfo/Categories'
import CPDiagnosticsPage from '@app/views/CPInfo/Diagnostics'
import CPMedicalTreatmentsPage from '@app/views/CPInfo/MedicalTreatments'
import CPBodyEquipmentPage from '@app/views/CPInfo/BodyEquipment'
import RoutinePage from '@app/views/Routine'
import RoutineInfoPage from '@app/views/Routine/Info'
import SittingPositionPage from './views/SittingPosition'
import SittingPositionInfoPage from './views/SittingPosition/Info'
import WrongSittingPositionPage from './views/WrongSittingPosition'
import WrongSittingPositionInfoPage from './views/WrongSittingPosition/Info'
import StrechingPage from './views/Streching'
import StrechingInfoPage from './views/Streching/Info'
import ExercisePage from './views/Exercise'
import ExerciseInfoPage from './views/Exercise/Info'

// LOCALIZATION
require('@app/utils/localizations')

import { Asset } from 'expo-asset'
import { NavigationContainer } from '@react-navigation/native'

//
// Main Navigator
//
const Stack = createStackNavigator();
const AppContainer = () => (
  <Stack.Navigator initialRouteName='Main'>
    <Stack.Screen name="Main" component={MainPage} />
    <Stack.Screen name="CPInfo" component={CPInfoPage} />
    <Stack.Screen name="CPCauses" component={CPCausesPage} />
    <Stack.Screen name="CPSymptoms" component={CPSymptomsPage} />
    <Stack.Screen name="CPCategories" component={CPCategoriesPage} />
    <Stack.Screen name="CPDiagnostics" component={CPDiagnosticsPage} />
    <Stack.Screen name="CPMedicalTreatments" component={CPMedicalTreatmentsPage} />
    <Stack.Screen name="CPBodyEquipment" component={CPBodyEquipmentPage} />
    <Stack.Screen name="SittingPosition" component={SittingPositionPage} />
    <Stack.Screen name="SittingPositionInfo" component={SittingPositionInfoPage} />
    <Stack.Screen name="WrongSittingPosition" component={WrongSittingPositionPage} />
    <Stack.Screen name="WrongSittingPositionInfo" component={WrongSittingPositionInfoPage} />
    <Stack.Screen name="Routine" component={RoutinePage} />
    <Stack.Screen name="RoutineInfo" component={RoutineInfoPage} />
    <Stack.Screen name="Streching" component={StrechingPage} />
    <Stack.Screen name="StrechingInfo" component={StrechingInfoPage} />
    <Stack.Screen name="Exercise" component={ExercisePage} />
    <Stack.Screen name="ExerciseInfo" component={ExerciseInfoPage} />
  </Stack.Navigator>
);

const App = () => {
  const [ fontLoaded, setFontLoaded ] = useState(false)
  
  const loadFontAsync = async () => {
    await Font.loadAsync({
      'rsu-text': require('./assets/fonts/RSUText_Regular.ttf'),
      'rsu-text_bold': require('./assets/fonts/RSUText_Bold.ttf'),
    })
    setFontLoaded(true)
  }
  const loadImageAsync = async () => {
    const images = [
      require("./assets/_brand/bg.png"),   
    ]
    for (let image of images) {
      await Asset.fromModule(image).downloadAsync()
    }
  }

  useEffect(() => {
    // componentDidMount
    loadFontAsync()
    loadImageAsync()

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])
  return fontLoaded && (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
}

export default App;
