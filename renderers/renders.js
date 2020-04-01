import React, { PureComponent } from "react";
import {Image, StyleSheet, View} from "react-native";

const RADIUS = 20;

class Net extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        return (
            <Image
                style={[{width: 360, height: 360, tintColor: 'red'}, styles.all, { left: x, top: y }]}
                source={require('../sprites/net.png')}
            />
        );
    }
}

class L4Tile1 extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        const angle = this.props.position[2];
        return (
            <Image
                style={[{width: 53, height: 134.4, tintColor: 'blue'}, styles.all, { left: x, top: y, transform:[{rotateZ: angle}]}]}
                source={require('../sprites/l4tile.png')}
            />
        );
    }
}

const styles = StyleSheet.create({
    all: {
        position: 'absolute'
    }
});

export { Net, L4Tile1 };
