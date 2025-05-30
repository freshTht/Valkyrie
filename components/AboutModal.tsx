import { Button, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AboutModalContent from './AboutModalContent';
import React from 'react';

import { SharedStyle } from './styles';
import { BottomSheet, CheckBox, Divider } from 'react-native-elements';

import { useSkipAboutModal } from '@app/utils/preferences/useSkipAboutModal';
import { SafeAreaView } from 'react-navigation';

interface ModalFooterButtonProps {
  onPress: () => void;
  title: string;
}

export const ModalFooterButton: React.FC<ModalFooterButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={SharedStyle.ModalActionButton}>
        <Text style={SharedStyle.ModalActionButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
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
      <Button title="ชี้แจงจากคณะผู้จัดทำ" onPress={() => setVisible(true)}/>
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
            
            <Divider style={{ width: '100%' }} />
            <View style={SharedStyle.ModalFooter}>
              <CheckBox
                title={`ไม่ต้องแสดงข้อความนี้อีก`}
                titleProps={{ style: [ SharedStyle.Content, { marginLeft: 8 } ] }}
                containerStyle={{ paddingVertical: 4 }}
                checked={shouldSkip === true}
                onPress={toggleSkip}
              />
              <ModalFooterButton title="รับทราบ" onPress={hideModal} />
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
};
