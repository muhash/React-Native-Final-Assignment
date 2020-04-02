import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {GameEngine} from "react-native-game-engine";
import {Net, L4Tile, L3Tile, L2Tile, CoreTile} from "./renderers/renders";
import {MoveFinger} from "./systems/systems";


export default function App() {
    return (
        <GameEngine
            style={styles.container}
            systems={[MoveFinger]}
            entities={{
                1: {position: [234, 165, 0], renderer: <L4Tile/>},
                2: {position: [314, 248, 1], renderer: <L4Tile/>},
                3: {position: [314, 365, 2], renderer: <L4Tile/>},
                4: {position: [234, 448, 3], renderer: <L4Tile/>},
                5: {position: [112, 448, 4], renderer: <L4Tile/>},
                6: {position: [30, 365, 5], renderer: <L4Tile/>},
                7: {position: [30, 248, 6], renderer: <L4Tile/>},
                8: {position: [112, 165, 7], renderer: <L4Tile/>},
                9: {position: [248, 234, 0], renderer: <L3Tile/>},
                10: {position: [248, 384, 1], renderer: <L3Tile/>},
                11: {position: [98, 384, 2], renderer: <L3Tile/>},
                12: {position: [98, 234, 3], renderer: <L3Tile/>},
                13: {position: [234, 310, 0], renderer: <L2Tile/>},
                14: {position: [110, 310, 1], renderer: <L2Tile/>},
                15: {position: [164, 310], renderer: <CoreTile/>},
                16: {position: [0, 150], renderer: <Net/>},
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
