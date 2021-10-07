import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { AntDesign , Ionicons } from "@expo/vector-icons/";


interface CartProps {
    onPress: () => void
}

const Cart = ({onPress}: CartProps) => {
    return (
        <View>
            <Pressable
                onPress={() => onPress}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                })}>
                <Ionicons
                    name="cart-outline"
                    size={24}
                    color="#FFFFFF"
                    style={{ marginRight: 28 }}
                />
            </Pressable>
        </View>
    )
}

export default Cart;