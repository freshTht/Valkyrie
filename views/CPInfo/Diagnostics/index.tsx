import React from 'react'

import Diagnostics1 from '@app/components/CPInfo/Diagnostics1'
import Diagnostics3 from '@app/components/CPInfo/Diagnostics3'
import { VKPageContainer } from '@app/components/VKPageContainer'

const DiagnosticsPage: React.FC = () => {
  return (
    <VKPageContainer>
      <Diagnostics1/>
      <Diagnostics3/>
    </VKPageContainer>
  )
};

export default DiagnosticsPage
