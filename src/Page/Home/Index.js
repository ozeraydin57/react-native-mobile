import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import sitil from './IndexCss'

export default function Index({ navigation }) {
    return (
        <View>
            <Text style={sitil.Baslik}>Home screen</Text>
            <Button
                title="Detay sayfasına git"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}