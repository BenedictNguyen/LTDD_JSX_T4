import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import CheckIcon from './checkicon.png';
import RetangleIcon from './Rectangleicon.png';
import PasswordIcon from './Passwordicon.png';

const T4_Ex1 = () => {
  const [lowercaseChecked, setLowercaseChecked] = useState(false);
  const [uppercaseChecked, setUppercaseChecked] = useState(false);
  const [numberChecked, setNumberChecked] = useState(false);
  const [specialChecked, setSpecialChecked] = useState(false);

  const toggleCheckbox = (setter) => {
    setter(prev => !prev);
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(59, 59, 152, 1)',
    }}>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 322,
        height: 605,
        backgroundColor: 'rgba(35, 35, 91, 1)',
      }}>
        <View style={{
          flex: 0.2,
          width: 181,
          height: 64,
        }}>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 25,
            color: 'white',
          }}>PASSWORD{'\n'}GENERATOR</Text>
        </View>

        <View style={{
          width: 297,
          height: 55,
          paddingBottom: 100,
        }}>
          <Image source={PasswordIcon} alt='Passwordicon' />
        </View>

        <View style={{
          flex: 0.7,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 297,
            height: 55,
          }}>
            <Text style={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 20,
              color: 'white',
            }}>Password length</Text>
            <Image source={RetangleIcon} alt='Rectangleicon' />
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 297,
            height: 55,
          }}>
            <Text style={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 20,
              color: 'white',
            }}>Include lower case letters</Text>
            <TouchableOpacity onPress={() => toggleCheckbox(setLowercaseChecked)}
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {lowercaseChecked && (<Image source={CheckIcon} alt='checkicon' />)}
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 297,
            height: 55,
          }}>
            <Text style={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 20,
              color: 'white',
            }}>Include upper case letters</Text>
            <TouchableOpacity onPress={() => toggleCheckbox(setUppercaseChecked)}
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {uppercaseChecked && (<Image source={CheckIcon} alt='checkicon' />)}
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 297,
            height: 55,
          }}>
            <Text style={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 20,
              color: 'white',
            }}>Include numbers</Text>
            <TouchableOpacity onPress={() => toggleCheckbox(setNumberChecked)}
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {numberChecked && (<Image source={CheckIcon} alt='checkicon' />)}
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 297,
            height: 55,
          }}>
            <Text style={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 20,
              color: 'white',
            }}>Include special symbols</Text>
            <TouchableOpacity onPress={() => toggleCheckbox(setSpecialChecked)}
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {specialChecked && (<Image source={CheckIcon} alt='checkicon' />)}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{
            width: 269,
            height: 55,
            backgroundColor: 'rgba(59, 59, 152, 1)',
          }}>
            <Text style={{
              fontFamily: 'Roboto',
              fontSize: 18,
              fontWeight: 700,
              textAlign: 'center',
              paddingTop: 15,
              color: 'white',
            }}>GENERATE PASSWORD </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default T4_Ex1;
