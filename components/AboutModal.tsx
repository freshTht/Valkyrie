import { Modal, Text, View } from 'react-native';
import AboutModalContent from './AboutModalContent';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { SharedStyle } from './styles';

import { useSkipAboutModal } from '@app/utils/preferences/useSkipAboutModal';
import { SafeAreaView } from 'react-navigation';
import { VKCheckBox } from './VKCheckBox';
import { VKTouchable } from './VKTouchable';
import { ButtonSize, VKButton } from './VKButton';
import { TintColor } from './styles/enum/TintColor.enum';

interface ModalFooterButtonProps {
  onPress: () => void;
  title: string;
}

export const ModalFooterButton: React.FC<ModalFooterButtonProps> = ({ onPress, title }) => {
  return (
    <VKTouchable onPress={onPress}>
      <View style={[ SharedStyle.Button ]}>
        <Text style={[ SharedStyle.ButtonText ]}>{title}</Text>
      </View>
    </VKTouchable>
  );
};

export const AboutModal = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const { shouldSkip, toggleSkip } = useSkipAboutModal((shouldSkip) => {
    if (!shouldSkip) {
      setVisible(true);
    }
  });
  
  const hideModal = React.useCallback(
    () => setVisible(false),
    [setVisible],
  );

  return (
    <>
      <VKButton
        title="ชี้แจงจากคณะผู้จัดทำ"
        leadingIcon={
           <MaterialIcons
              name="info-outline"
              size={17}
              color="#fff"
            />
        }
        onPress={() => setVisible(true)}
        tintColor={TintColor.Blue}
        size={ButtonSize.Small}
        style={{ marginHorizontal: 'auto' }}
      />
      <Modal
        visible={visible}
        animationType="fade"
        onRequestClose={hideModal}
        statusBarTranslucent
        transparent
      >
        <View style={SharedStyle.ModalBackdrop} onTouchEnd={hideModal}>
          <SafeAreaView style={SharedStyle.Modal} onTouchEnd={(e) => e.stopPropagation()}>
            <AboutModalContent onCloseButtonPress={hideModal} />

            <View style={SharedStyle.ModalFooter}>
             <VKCheckBox
                title="ไม่ต้องแสดงข้อความนี้อีก"
                checked={shouldSkip === true}
                onPress={toggleSkip}
                checkedColor={TintColor.Blue}
              />
              <VKButton title="รับทราบ" onPress={hideModal} tintColor={TintColor.Blue} />
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
};
