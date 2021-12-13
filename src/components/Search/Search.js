import { Icon, Input } from '@ui-kitten/components';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

const Search = () => {
    const [value, setValue] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = props => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name="funnel-outline" />
        </TouchableWithoutFeedback>
    );

    return (
        <View style={{ margin: 10 }}>
            <Input
                value={value}
                placeholder="Search..."
                accessoryLeft={<Icon name="search" />}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={nextValue => setValue(nextValue)}
            />
        </View>
    );
};
export default Search;
