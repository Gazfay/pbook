import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  const fontFamilyStyle = { fontFamily: 'SpaceMono' };

  return <Text {...props} style={[props.style, fontFamilyStyle]} />;
}
