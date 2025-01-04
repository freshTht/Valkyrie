import { ScrollView } from 'react-native';
import VKRootView from './VKRootView';
import { PropsWithChildren } from 'react';
import { Spacing } from './styles/enum/Spacing.enum';

export const VKPageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <VKRootView>
      <ScrollView
        style={{
          flex: 1,
          height: '100%',
          backgroundClip: 'red',
        }}
        contentContainerStyle={{
          height: '100%',
          padding: Spacing.L,
          rowGap: Spacing.L,
        }}
      >
        { children }
      </ScrollView>
    </VKRootView>
  );
};
