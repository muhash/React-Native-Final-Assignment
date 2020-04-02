import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {GameEngine} from "react-native-game-engine";
import {Net, L4Tile, L3Tile, L2Tile, CoreTile, Score} from "./renderers/renders";
import {Move} from "./systems/systems";


export default function App() {
    return (
        <GameEngine
            style={styles.container}
            systems={[Move]}
            entities={{
                1: {position: [234, 165], value: 0, renderer: <L4Tile/>},
                2: {position: [314, 248], value: 0, renderer: <L4Tile/>},
                3: {position: [314, 365], value: 0, renderer: <L4Tile/>},
                4: {position: [234, 448], value: 0, renderer: <L4Tile/>},
                5: {position: [112, 448], value: 0, renderer: <L4Tile/>},
                6: {position: [30, 365], value: 0, renderer: <L4Tile/>},
                7: {position: [30, 248], value: 0, renderer: <L4Tile/>},
                8: {position: [112, 165], value: 0, renderer: <L4Tile/>},
                9: {position: [248, 234], value: 4, renderer: <L3Tile/>},
                10: {position: [248, 384], value: 0, renderer: <L3Tile/>},
                11: {position: [98, 384], value: 0, renderer: <L3Tile/>},
                12: {position: [98, 234], value: 0, renderer: <L3Tile/>},
                13: {position: [234, 310], value: 0, renderer: <L2Tile/>},
                14: {position: [110, 310], value: 0, renderer: <L2Tile/>},
                15: {position: [164, 310], value: 0, renderer: <CoreTile/>},
                16: {position: [0, 150], renderer: <Net/>},
                17: {value: 0, renderer: <Score/>}
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
