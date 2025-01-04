import React from 'react'

import CategoriesByMovement from '@app/components/CPInfo/CategoriesByMovement'
import CategoriesByAnomalies from '@app/components/CPInfo/CategoriesByAnomalies'
import { VKPageContainer } from '@app/components/VKPageContainer'

const CategoriesPage: React.FC = () => {
  return (
    <VKPageContainer>
      <CategoriesByMovement />
      <CategoriesByAnomalies />
    </VKPageContainer>
  )
}

export default CategoriesPage
