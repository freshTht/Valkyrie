import { ScrollView, View } from 'react-native';
import VKRootView from './VKRootView';
import { PropsWithChildren } from 'react';
import { Spacing } from './styles/enum/Spacing.enum';

interface OwnProps {
  scrollable?: boolean;
}

// const containerStyle = {
//   flexGrow: 1,
//   padding: Spacing.L,
//   rowGap: Spacing.L,
// };

export const NonScrollableContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <View>
    { children }
  </View>
);

export const ScrollableContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      padding: Spacing.L,
      rowGap: Spacing.L,
    }}
  >
    { children }
  </ScrollView>
);

export const VKPageContainer: React.FC<PropsWithChildren<OwnProps>> = ({ children, scrollable = true }) => {
  const ContainerView = scrollable ? ScrollableContainer : NonScrollableContainer;
  return (
    <VKRootView>
      <ContainerView>
        { children }
      </ContainerView>
    </VKRootView>
  );
};
