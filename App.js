import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {GameEngine} from "react-native-game-engine"
import {Net, L4Tile1} from "./renderers/renders";

export default function App() {
    return (
        <GameEngine
            style={styles.container}
            entities={{
                1: {position: [210, 75, '112.5deg'], renderer: <L4Tile1/>},
                2: {position: [0, 100], renderer: <Net/>},
            }}>
            <StatusBar hidden={true}/>

        </GameEngine>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
