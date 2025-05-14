import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const backgroundMap = {
    1: require('../assets/img/gamebg1.png'),
    2: require('../assets/img/gamebg2.png'),
    3: require('../assets/img/gamebg3.png'),
    4: require('../assets/img/gamebg4.png'),
    5: require('../assets/img/gamebg5.png'),
};

const MainScreen = ({ navigation }) => {
    const selectedBackgroundId = useSelector(state => state.selectedBackground.selectedBackgroundId);
    const backgroundImage = backgroundMap[selectedBackgroundId] || require('../assets/img/gamebg1.png');

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
        >   

            <Image source={require('../AppManager/loader3.png')} style={{flex: 1, width: '100%', height: '100%', position: 'absolute'}}/>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home');
                }}
                style={{
                    backgroundColor: '#AD00E9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    position: 'absolute',
                    bottom: 50,
                    borderColor: '#fff',
                    borderWidth: 3,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            >
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 16 }}>
                    Start
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default MainScreen;
