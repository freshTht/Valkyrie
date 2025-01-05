import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_SKIP_ABOUT_MODAL = 'skipAboutModal';

export const useSkipAboutModal = (onValueReady: (value: boolean) => void) => {
  const [value, setValue] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    AsyncStorage.getItem(KEY_SKIP_ABOUT_MODAL)
    .then((result) => {
        const isTrue = result === 'true';
        onValueReady(isTrue);
        setValue(isTrue);
      });
  }, [setValue]);

  const setSkip = React.useCallback((value: boolean) => {
    setValue(value);
    AsyncStorage.setItem(KEY_SKIP_ABOUT_MODAL, `${value}`);
  }, [setValue]);

  const toggleSkip = React.useCallback(() => {
    setSkip(!value);
  }, [value, setSkip]);

  return {
    shouldSkip: value,
    setSkip,
    toggleSkip,
  };
};
