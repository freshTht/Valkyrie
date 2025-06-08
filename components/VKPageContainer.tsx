import { ScrollView, View } from 'react-native';
import VKRootView from './VKRootView';
import { PropsWithChildren } from 'react';
import { Spacing } from './styles/enum/Spacing.enum';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

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

export const ScrollableContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: Spacing.L, // top inset is already handled by Header Bar
        paddingLeft: Spacing.L + insets.left,
        paddingRight: Spacing.L + insets.right,
        paddingBottom: Spacing.L + insets.bottom,
        rowGap: Spacing.L,
      }}
    >
      { children }
    </ScrollView>
  );
};

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
