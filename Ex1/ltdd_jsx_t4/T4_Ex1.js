import React from 'react';
import {Text, Image, Button, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react';
import BookIcon from './bookicon.png';
import NumberIcon from './numbericon.png'
const T4_Ex1 = () => {
  const [quantity, setQuantity] = useState(1);
  return(
    <View style = {{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}>
    <View style = {{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    }}>
     <View style={{  
        width: 360,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        }}>
        <Image source={BookIcon} alt='bookicon' />

        <View style={{
          flexDirection: 'column',
          marginLeft: 20,
        }}>
          <Text style={{
            fontFamily: 'Roboto',
            fontSize: 12,
            fontWeight: '700',
          }}>
            Nguyên hàm tích phân và ứng dụng</Text>

          <Text style={{
            fontFamily: 'Roboto',
            fontSize: 12,
            fontWeight: '700',
            marginTop: 8,
          }}>
            Cung cấp bởi Tiki Trading
          </Text>

          <Text style={{
            fontFamily: 'Roboto',
            fontSize: 18,
            fontWeight: '700',
            color: 'red',
            marginTop: 8,
          }}>
            141.800 đ
          </Text>

          <Text style={{
            fontFamily: 'Roboto',
            fontSize: 12,
            fontWeight: '700',
            color: 'gray',
            textDecorationLine: 'line-through',
            marginTop: 4,
          }}>
            141.800 đ
          </Text>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          }}>
            <TouchableOpacity 
              style={{
              width: 24,
              height: 24,
              backgroundColor: 'lightgray',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 2,
            }}
              onPress = {() => setQuantity(Math.max(quantity - 1, 1))}
            >
              <Text style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 14,
              }}>-</Text>
            </TouchableOpacity>

            <Text style={{
              fontFamily: 'Roboto',
              fontWeight: '700',
              fontSize: 16,
              paddingHorizontal: 15,
            }}>
              {(donGia * quantity).toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} đ</Text>

            <TouchableOpacity 
              style={{
              width: 24,
              height: 24,
              backgroundColor: 'lightgray',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 2,
            }}
              onPress = {() => setQuantity(quantity + 1)}
            >
              <Text style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 14,
              }}>+</Text>
            </TouchableOpacity>

            <Text style={{
              fontFamily: 'Roboto',
              fontSize: 12,
              fontWeight: '700',
              color: 'rgba(19, 79, 236, 1)',
              marginLeft: 20,
            }}>
              Mua sau
            </Text>
          </View>
        </View>
    </View>
    
    <View style = {{
        width: 360,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: 12,
          paddingRight: 10
          }}>Mã giảm giá đã lưu</Text>
          <TouchableOpacity>
            <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 12,
                color: 'rgba(19, 79, 236, 1)',
              }}>Xem tại đây?</Text>
          </TouchableOpacity>
    </View>

    <View style = {{
      //flex: 0.2,
      width: 360,
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
    }}>
      <TouchableOpacity style = {{
        width: 208,
        height: 45,
        borderColor: 'rgba(128, 128, 128, 1)',
        borderWidth: 2
      }}> 
        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: 18,
          textAlign: 'center',
          paddingTop: 12
        }}>Mã giảm giá</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {{
        width: 99,
        height: 45,
        backgroundColor: 'rgba(10, 94, 183, 1)',
        borderWidth: 2
      }}> 
        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: 20,
          textAlign: 'center',
          paddingTop: 12,
          color: 'white'
        }}>Áp dụng</Text>
      </TouchableOpacity>
    </View>
  </View>
  
  <View style = {{
      flex: 0.5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
    }}>
      <View style = {{
        width: 360,
        height: 51,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10
      }}>
        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: 12,
          textAlign: 'center',
        }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>

        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: 12,
          textAlign: 'center',
          color: 'rgba(10, 94, 183, 1)',
        }}>Nhập tại đây?</Text>
      </View>

      <View style = {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
        <View style = {{
          width: 360,
          height: 51,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
          <Text style = {{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 18,
            textAlign: 'center',
          }}>Tạm tính</Text>

          <Text style = {{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 18,
            textAlign: 'center',
            color: 'red',
          }}>141.800 đ</Text>
        </View>
      </View>
    </View>
    <View style = {{
      flex: 0.5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style = {{
        width: 360,
        heigh: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20
      }}>
        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: 18,
          color: 'rgba(128, 128, 128, 1)'
        }}>Thành tiền</Text> 

        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: 18,
          color: 'red'
        }}>141.800 đ</Text> 
      </View>

      <TouchableOpacity style = {{
        width: 360,
        height: 45,
        backgroundColor: 'rgba(229, 57, 53, 1)',
      }}>
        <Text style = {{
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          paddingTop: 12
        }}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    
    </View>
    
</View>
  );
};
export default T4_Ex1;

















