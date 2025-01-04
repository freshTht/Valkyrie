import React from 'react'
import i18n from 'i18n-js'

import Note from '@app/components/Exercise/Note'
import { VKCarousel } from '@app/components/VKCarousel'
import { VKPageContainer } from '@app/components/VKPageContainer'

const ExerciseTutorialPage: React.FC = () => {
  // STATE
  let [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // componentDidMount
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  // 
  // PARAMS
  // 
  const DATA = i18n.t(`exercise_types`) as unknown as any[];
  const COVER_IMG_FILES = [
    require('@app/assets/colored/Exercise/COM/17ขยับ.gif'),
    require('@app/assets/colored/Exercise/COM/26weat.png'),
    require('@app/assets/colored/Exercise/COM/30ขยับ.gif'),
    require('@app/assets/colored/Exercise/COM/1ขยับ.gif'),
    
  ]
  const IMG_FILES = [
    [
      // require('@app/assets/Exercise/1/1.png'),
      [
        require('@app/assets/colored/Exercise/COM/17ขยับ.gif'),
        require('@app/assets/colored/Exercise/COM/18ขยับ.gif'),
      ],
      [
        require('@app/assets/colored/Exercise/COM/19paraside.png'),
        require('@app/assets/colored/Exercise/COM/20parafront.png'),
        require('@app/assets/colored/Exercise/COM/21paraback.png'),
      ],
      '',
      require('@app/assets/colored/Exercise/COM/22ขยับ.gif'),
      [
        require('@app/assets/colored/Exercise/COM/23ขยับ.gif'),
        require('@app/assets/colored/Exercise/COM/24ขยับ.gif'),
      ],
      require('@app/assets/colored/Exercise/COM/25ขยับ.gif'),
      [
        require('@app/assets/colored/Exercise/COM/25_01-นั่งโยก.gif'),
        require('@app/assets/colored/Exercise/COM/25_01-โยกด้านข้าง.gif'),
      ],
    ], 
    [
      require('@app/assets/colored/Exercise/COM/26weat.png'),
      '',
      require('@app/assets/colored/Exercise/COM/27roller.png'),
      '',
      require('@app/assets/colored/Stretching/15ขยับ.gif'),
      '',
      require('@app/assets/colored/Exercise/COM/29ขยับ.gif'),
    ],
    [
      [
        require('@app/assets/colored/Exercise/COM/30ขยับ.gif'),
        require('@app/assets/colored/Exercise/COM/30-31.gif'),
      ],
    ],
    [
      require('@app/assets/colored/Exercise/COM/1ขยับ.gif'),
    ],
  ]

  // MENU items
  let carouselItems = DATA.map((ITEM, i) => ({
    title: ITEM.title,
    href: 'ExerciseInfo',
    imgSrc: COVER_IMG_FILES[i],
    hrefParams: {
      INDEX: i,
      IMG_SRC: IMG_FILES[i],
    },
  }));

  return (
    <VKPageContainer>
      <Note />
      <VKCarousel data={carouselItems} />
    </VKPageContainer>
  );
}

export default ExerciseTutorialPage
