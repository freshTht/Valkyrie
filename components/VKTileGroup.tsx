import { FlatList, FlatListProps, StyleProp, ViewStyle } from "react-native";
import { Spacing } from "./styles/enum/Spacing.enum";
import { VKTile, VKTileModel } from "./VKTile";
import { SharedStyle } from "./styles";
import React from "react";

export type VKTileGroupVariant = 'carousel' | 'grid' | 'stackered-grid';

const getFlatListPropsFor = (variant: VKTileGroupVariant): Partial<FlatListProps<any>> => {
  switch (variant) {
    case 'carousel':
      return {
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        fadingEdgeLength: Spacing.XL3,
        contentContainerStyle: {
          gap: Spacing.M,
        },
      };
    case 'grid':
      return {
        numColumns: 2,
        columnWrapperStyle: {
          gap: Spacing.M,
        },
        contentContainerStyle: {
          padding: Spacing.L,
          gap: Spacing.M,
        },
        showsVerticalScrollIndicator: true,
      };
    case 'stackered-grid':
      return {
        numColumns: 2,
        columnWrapperStyle: {
          gap: Spacing.M,
          marginTop: -Spacing.XL,
        },
        contentContainerStyle: {
          paddingTop: Spacing.XL3,
          paddingHorizontal: Spacing.L,
        },
        showsVerticalScrollIndicator: true,
      };
  }
};

const tileStyleFor: { [variant in VKTileGroupVariant]: StyleProp<ViewStyle>} = {
  carousel: SharedStyle.CarouselTile,
  grid: SharedStyle.GridTile,
  'stackered-grid': SharedStyle.GridTile,
}

const getPositionalStyleFor = (variant: VKTileGroupVariant, index: number): StyleProp<ViewStyle> => {
  switch (variant) {
    case 'stackered-grid':
      if (index % 2 == 1) {
        return { marginTop: Spacing.XL3 }
      }
      else {
        return { marginBottom: Spacing.XL3 }
      }
  }
  return 
}

interface OwnProps {
  variant: VKTileGroupVariant;
  data: VKTileModel[];
};

type VKTileGroupProps = OwnProps & Omit<FlatListProps<VKTileModel>, 'renderItem'>;

export const VKTileGroup: React.FC<VKTileGroupProps> = ({ data, variant, ...flatListProps }) => {
  const variantProps = getFlatListPropsFor(variant);
  const tileStyle = tileStyleFor[variant];

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <VKTile
          key={item.title}
          data={item}
          styles={[ tileStyle, getPositionalStyleFor(variant, index) ]}
        />
      )}
      {...variantProps}
      {...flatListProps}
    />
  );
};
