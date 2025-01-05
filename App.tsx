import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack'

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

import { NavigationContainer } from '@react-navigation/native'
import I18n from 'i18n-js'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { FontFamily, SharedStyle } from './components/styles'
import { useFonts } from 'expo-font'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'

enum HeaderStyle {
  transparent = 'transparent',
  white = '#fff',
  green = '#4FAFA1',
  red = '#E16E5B',
  yellow = '#FDC055',
  orange = '#EC8C50',
};

const headerTitleStyle = SharedStyle.HeaderTitle;
const headerStyles: Record<HeaderStyle, Partial<NativeStackNavigationOptions>> = {
  [HeaderStyle.transparent]: {
    headerTintColor: '#000',
    headerTitleStyle,
    headerTransparent: true,
  },
  [HeaderStyle.white]: {
    headerStyle: { backgroundColor: '#fff' },
    headerTintColor: '#000',
    headerTitleStyle,
  },
  [HeaderStyle.green]: {
    headerStyle: { backgroundColor: '#4FAFA1' },
    headerTintColor: '#fff',
    headerTitleStyle,
  },
  [HeaderStyle.red]: {
    headerStyle: { backgroundColor: '#E16E5B' },
    headerTintColor: '#fff',
    headerTitleStyle,
  },
  [HeaderStyle.yellow]: {
    headerStyle: { backgroundColor: '#FDC055' },
    headerTintColor: '#000',
    headerTitleStyle,
  },
  [HeaderStyle.orange]: {
    headerStyle: { backgroundColor: '#EC8C50' },
    headerTintColor: '#fff',
    headerTitleStyle,
  },
}
const buildScreenOptions = (title: string, style: HeaderStyle = HeaderStyle.white) => {
  return {
    title,
    ...headerStyles[style],
  };
};

//
// Main Navigator
//
const Stack = createNativeStackNavigator();
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
      options={buildScreenOptions('หนูจ๋า')}
    />
    <Stack.Screen
      name="CPInfo"
      component={CPInfoPage}
      options={buildScreenOptions('Cerebral palsy คืออะไร', HeaderStyle.green)}
    />
    <Stack.Screen
      name="CPCauses"
      component={CPCausesPage}
      options={buildScreenOptions('ปัจจัยเสี่ยงการเกิดโรค', HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPSymptoms"
      component={CPSymptomsPage}
      options={buildScreenOptions(I18n.t('page_title_cpinfo_diagnostic'), HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPCategories"
      component={CPCategoriesPage}
      options={buildScreenOptions('การแบ่งประเภทเด็กภาวะสมองพิการ', HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPDiagnostics"
      component={CPDiagnosticsPage}
      options={buildScreenOptions(I18n.t('page_title_cpinfo_diagnostic'), HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPMedicalTreatments"
      component={CPMedicalTreatmentsPage}
      options={buildScreenOptions(I18n.t('page_title_cpinfo_medical_treatments'), HeaderStyle.red)}
    />
    <Stack.Screen
      name="CPBodyEquipment"
      component={CPBodyEquipmentPage}
      options={buildScreenOptions(I18n.t('cpinfo_body_equipment_title'), HeaderStyle.red)}
    />
    <Stack.Screen
      name="SittingPosition"
      component={SittingPositionPage}
      options={buildScreenOptions(I18n.t('page_title_sitting_position'), HeaderStyle.yellow)}
    />
    <Stack.Screen
      name="SittingPositionInfo"
      component={SittingPositionInfoPage}
      options={buildScreenOptions('', HeaderStyle.yellow)}
    />
    <Stack.Screen
      name="WrongSittingPosition"
      component={WrongSittingPositionPage}
      options={buildScreenOptions(I18n.t('page_title_wrong_sitting_position'), HeaderStyle.orange)}
    />
    <Stack.Screen
      name="WrongSittingPositionInfo"
      component={WrongSittingPositionInfoPage}
      options={buildScreenOptions('', HeaderStyle.orange)}
    />
    <Stack.Screen
      name="Routine"
      component={RoutinePage}
      options={buildScreenOptions('กิจวัตรประจำวัน', HeaderStyle.red)}
    />
    <Stack.Screen
      name="RoutineInfo"
      component={RoutineInfoPage}
      options={({ route }) => {
        const { INDEX, TINT_COLOR } = route.params as any;
        const RAW_DATA = I18n.t(`routine_items`)[INDEX] as any;
        return buildScreenOptions(RAW_DATA.title, TINT_COLOR);
      }}
    />
    <Stack.Screen
      name="Streching"
      component={StrechingPage}
      options={buildScreenOptions(I18n.t('page_title_streching'), HeaderStyle.green)}
    />
    <Stack.Screen
      name="StrechingInfo"
      component={StrechingInfoPage}
      options={buildScreenOptions('', HeaderStyle.green)}
    />
    <Stack.Screen
      name="Exercise"
      component={ExercisePage}
      options={buildScreenOptions(I18n.t('page_title_exercise'), HeaderStyle.yellow)}
    />
    <Stack.Screen
      name="ExerciseInfo"
      component={ExerciseInfoPage}
      options={buildScreenOptions('', HeaderStyle.yellow)}
    />
  </Stack.Navigator>
);

const App = () => {
  const [fontLoaded] = useFonts({
    [FontFamily.DefaultBold]: require('./assets/fonts/RSUTEXT-Bold.otf'),
  });

  return fontLoaded && (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
