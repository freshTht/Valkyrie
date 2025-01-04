import React from 'react'

import MedicalTreatments from '@app/components/CPInfo/MedicalTreatments'
import { VKPageContainer } from '@app/components/VKPageContainer'

const MedicalTreatmentsPage: React.FC = () => {
  return (
    <VKPageContainer>
      <MedicalTreatments />
    </VKPageContainer>
  );
};

export default MedicalTreatmentsPage
