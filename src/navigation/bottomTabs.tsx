import { ifIphoneX } from 'react-native-iphone-x-helper';
import { IconCatPaw, IconChat, IconProfile } from '~/assets';
import { createBottomTabNavigator, moderateScale } from '~/modules';
import { ChatScreen, HomeScreen, ProfileScreen } from '~/screens';
import { Routes } from '~/utils';

const BottomTab = createBottomTabNavigator();

export const BottomTabs = () => (
  <BottomTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#EC537E',
      tabBarInactiveTintColor: '#434141',
      headerShown: false,
      tabBarShowLabel: false,
      tabBarLabelStyle: {
        backgroundColor: 'red',
      },
      tabBarItemStyle: {
        height: 45,
        borderRadius: 20,
      },
      tabBarStyle: {
        borderTopColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: ifIphoneX(moderateScale(30), moderateScale(15)),
        left: 116,
        right: 116,
        height: moderateScale(42),
        borderRadius: 55,
        paddingHorizontal: moderateScale(12),
        elevation: 3,
        shadowColor: '#bfbfc0',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 16,
      },
    }}
  >
    <BottomTab.Screen
      name={Routes.Home}
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => <IconCatPaw color={color} />,
      }}
    />
    <BottomTab.Screen
      name={Routes.Chat}
      component={ChatScreen}
      options={{
        tabBarIcon: ({ color }) => <IconChat color={color} />,
      }}
    />
    <BottomTab.Screen
      name={Routes.Profile}
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => <IconProfile color={color} />,
      }}
    />
  </BottomTab.Navigator>
);
