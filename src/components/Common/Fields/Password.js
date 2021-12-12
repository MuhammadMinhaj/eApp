import { Icon, Input, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const PasswordField = ({ value, setValue, errTxt, placeholder, label }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

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
      accessoryRight={renderIcon}
      accessoryLeft={<Icon name="lock-outline" />}
      secureTextEntry={secureTextEntry}
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
export default PasswordField;
