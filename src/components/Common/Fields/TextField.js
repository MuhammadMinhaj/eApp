import { Icon, Input, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const TextField = ({
  value,
  setValue,
  errTxt,
  iconName,
  placeholder,
  label,
}) => {
  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        {errTxt && <Text style={styles.captionText}>{errTxt}</Text>}
      </View>
    );
  };

  return (
    <Input
      value={value}
      label={label}
      placeholder={placeholder}
      caption={renderCaption}
      accessoryLeft={<Icon name={iconName} />}
      onChangeText={nextValue => setValue(nextValue)}
      size="large"
    />
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#dd0808',
  },
});
export default TextField;
