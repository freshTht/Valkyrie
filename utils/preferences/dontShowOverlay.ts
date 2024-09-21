import AsyncStorage from '@react-native-async-storage/async-storage';

const dontShowOverlay = {
  async load() : Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem('dontShowOverlayAgain');
      if (value !== null) {
        // We have data!! -> store them in the state
        return JSON.parse(value);
      }
      return false
    } catch (error) {
      // Error retrieving data
      console.warn(`[ERROR] ${error}`)
      return false
    }
  },
  async save(dontShowOverlayAgain: boolean) {
    try {
      await AsyncStorage.setItem('dontShowOverlayAgain', `${dontShowOverlayAgain}`);
    } catch (error) {
      // Error saving data
    }
  },
};

export default dontShowOverlay