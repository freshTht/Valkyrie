import { Button, Modal, Text, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View, ViewProps } from 'react-native';
import FirstTimeMessage from './FirstTimeMessage';
import React from 'react';

// ASYNC STORAGE
import _dontShowOverlay from '@app/utils/preferences/dontShowOverlay'
import { SharedStyle } from './styles';
import { CheckBox } from 'react-native-elements';

interface ModalFooterButtonProps {
  onPress: () => void;
  title: string;
}

export const ModalFooterButton: React.FC<ModalFooterButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[SharedStyle.ModalActionButton]}>
        <Text style={SharedStyle.ModalActionButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};

export const FirstTimeMessageModal = () => {
  // TODO: impl proper state
  let [overlayVisible, setOverlayVisible] = React.useState<boolean>(true);

  const hideModal = React.useCallback(
    () => setOverlayVisible(false),
    [setOverlayVisible],
  );

  return (
    <Modal
      visible={overlayVisible}
      animationType="fade"
      transparent
    >
      {/* onRequestClose={() => setOverlayVisible(false)} */}
      <View style={SharedStyle.ModalBackdrop}>
        <View style={SharedStyle.Modal}>
          <FirstTimeMessage onCloseButtonPress={() => { setOverlayVisible(false) }} />
          
            {/* checkedIcon={<MaterialCommunityIcons name='checkbox-marked' size={12}/>}
            uncheckedIcon={<MaterialCommunityIcons name='checkbox-blank-outline' size={12}/>} */}
          <View style={SharedStyle.ModalFooter}>
            <CheckBox
              title={`ไม่ต้องแสดงข้อความนี้อีก`}
              titleProps={{ style: [ SharedStyle.Content, { marginLeft: 8 } ] }}
              containerStyle={{ paddingVertical: 4 }}
            />
              {/* checked={dontShowOverlayAgain}
              onPress={() => setDontShowOverlayAgain(!dontShowOverlayAgain)} */}
            <ModalFooterButton title="รับทราบ" onPress={hideModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
