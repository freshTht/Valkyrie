import React, { useEffect, useState } from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

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
import I18n from 'i18n-js'
import { SafeAreaProvider } from 'react-native-safe-area-context'

enum HeaderStyle {
  white = 'white',
  green = 'green',
  red = 'red',
  yellow = 'yellow',
  orange = 'orange',
};
const headerStyles: Record<HeaderStyle, Partial<StackNavigationOptions>> = {
  white: {
    headerStyle: { backgroundColor: '#fff' },
    headerTintColor: '#000',
  },
  green: {
    headerStyle: { backgroundColor: '#4FAFA1' },
    headerTintColor: '#fff',
  },
  red: {
    headerStyle: { backgroundColor: '#E16E5B' },
    headerTintColor: '#fff',
  },
  yellow: {
    headerStyle: { backgroundColor: '#FDC055' },
    headerTintColor: '#000',
  },
  orange: {
    headerStyle: { backgroundColor: '#EC8C50' },
    headerTintColor: '#fff',
  },
}
const buildScreenHeaderOptions = (title: string, style: HeaderStyle = HeaderStyle.white) => {
  return {
    title,
    ...headerStyles[style],
  };
};

//
// Main Navigator
//
const Stack = createStackNavigator();
const AppContainer = () => (
  <Stack.Navigator
    initialRouteName='Main'
    screenOptions={{
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen
      name="Main"
      component={MainPage}
      options={buildScreenHeaderOptions('หนูจ๋า')}
    />
    <Stack.Screen
      name="CPInfo"
      component={CPInfoPage}
      options={buildScreenHeaderOptions('Cerebral palsy คืออะไร', HeaderStyle.green)}
    />
    <Stack.Screen
      name="CPCauses"
      component={CPCausesPage}
      options={buildScreenHeaderOptions('ปัจจัยเสี่ยงการเกิดโรค', HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPSymptoms"
      component={CPSymptomsPage}
      options={buildScreenHeaderOptions(I18n.t('page_title_cpinfo_diagnostic'), HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPCategories"
      component={CPCategoriesPage}
      options={buildScreenHeaderOptions('การแบ่งประเภทเด็กภาวะสมองพิการ', HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPDiagnostics"
      component={CPDiagnosticsPage}
      options={buildScreenHeaderOptions(I18n.t('page_title_cpinfo_diagnostic'), HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPMedicalTreatments"
      component={CPMedicalTreatmentsPage}
      options={buildScreenHeaderOptions(I18n.t('page_title_cpinfo_medical_treatments'), HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPBodyEquipment"
      component={CPBodyEquipmentPage}
      options={buildScreenHeaderOptions(I18n.t('cpinfo_body_equipment_title'), HeaderStyle.red)}
    />
    <Stack.Screen
      name="SittingPosition"
      component={SittingPositionPage}
      options={buildScreenHeaderOptions(I18n.t('page_title_sitting_position'), HeaderStyle.yellow)}
    />
    <Stack.Screen
      name="SittingPositionInfo"
      component={SittingPositionInfoPage}
      options={buildScreenHeaderOptions('', HeaderStyle.yellow)}
    />
    <Stack.Screen
      name="WrongSittingPosition"
      component={WrongSittingPositionPage}
      options={buildScreenHeaderOptions(I18n.t('page_title_wrong_sitting_position'), HeaderStyle.orange)}
    />
    <Stack.Screen
      name="WrongSittingPositionInfo"
      component={WrongSittingPositionInfoPage}
    />
    <Stack.Screen
      name="Routine"
      component={RoutinePage}
      options={buildScreenHeaderOptions('กิจวัตรประจำวัน',HeaderStyle.red)}
    />
    <Stack.Screen
      name="RoutineInfo"
      component={RoutineInfoPage}
    />
    <Stack.Screen
      name="Streching"
      component={StrechingPage}
      options={buildScreenHeaderOptions(I18n.t('page_title_streching'), HeaderStyle.green)}
    />
    <Stack.Screen
      name="StrechingInfo"
      component={StrechingInfoPage}
    />
    <Stack.Screen
      name="Exercise"
      component={ExercisePage}
      options={buildScreenHeaderOptions(I18n.t('page_title_exercise'), HeaderStyle.yellow)}
    />
    <Stack.Screen
      name="ExerciseInfo"
      component={ExerciseInfoPage}
    />
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
  }, [])
  return fontLoaded && (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
