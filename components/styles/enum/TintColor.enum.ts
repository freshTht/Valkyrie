export enum TintColor {
    LightGrey = '#EBEBEB',
    Green = '#009688',
    Red = '#EF5350',
    Yellow = '#FFC107',
    Orange = '#F57C00',
    Blue = '#03A9F4',
};

export const getContrastedColor = (tintColor: TintColor): string => {
    switch (tintColor) {
        case TintColor.Green:
        case TintColor.Red:
        case TintColor.Blue:
        case TintColor.Orange:
            return '#fff';
        case TintColor.Yellow:
        case TintColor.LightGrey:
            return '#000';
    }
};
