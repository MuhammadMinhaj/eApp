import {
    Icon,
    Layout,
    MenuItem,
    OverflowMenu,
    TopNavigation,
    TopNavigationAction
} from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

const MenuIcon = props => <Icon {...props} name="menu-outline" />;

const EditIcon = props => <Icon {...props} name="shopping-cart-outline" />;

const PersonIcon = props => <Icon {...props} name="person" />;

const InfoIcon = props => <Icon {...props} name="info" />;

const LogoutIcon = props => <Icon {...props} name="log-out" />;

const TopNavigationAccessoriesShowcase = () => {
    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={PersonIcon} onPress={toggleMenu} />
    );

    const renderRightActions = () => (
        <>
            <TopNavigationAction icon={EditIcon} />
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={InfoIcon} title="About" />
                <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
            </OverflowMenu>
        </>
    );

    const renderBackAction = () => <TopNavigationAction icon={MenuIcon} />;

    return (
        <Layout style={styles.container} level="1">
            <TopNavigation
                alignment="center"
                title="eApp Store"
                subtitle="Browse to get your desired product"
                accessoryLeft={renderBackAction}
                accessoryRight={renderRightActions}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 20,
    },
});
export default TopNavigationAccessoriesShowcase;
