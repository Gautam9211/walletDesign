import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
} from 'react-native';
import React, { useEffect, useRef } from 'react';

import { useNavigation } from '@react-navigation/native';

function HeaderComponent({ hideNotificationIcon = false }) {
  const navigation = useNavigation();
  const rotation = useRef(new Animated.Value(0)).current;
  const rotateImage = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      { iterations: -1 } // Loop indefinitely
    ).start();
  };

  useEffect(() => {
    rotateImage(); // Trigger the animation when component mounts
  }, []);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Animated.Image
            style={{ height: 27, width: 27, transform: [{ rotate }] }}
            source={require('../../assets/Frame.png')}
          />
          <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 2 }}>
            {' '}
            NUCHAIN
          </Text>
        </View>
        {!hideNotificationIcon && (
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Image
              style={{ height: 20, width: 20 }}
              source={require('../../assets/bell.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Header = React.memo(HeaderComponent);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
