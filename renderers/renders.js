import React, {PureComponent} from "react";
import {Image, StyleSheet, View, Text} from "react-native";

var fourthRim = [2, 2, 2, 2, 0, 0, 0, 0];
var thirdRim = [0, 0, 4, 4];
var secondRim = [8, 0];
var core = [16];

class Net extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        return (
                <Image
                    style={[{width: 360, height: 360, tintColor: 'red'}, styles.all, {left: x, top: y}]}
                    source={require('../sprites/net.png')}
                />
        );
    }
}

class L4Tile extends PureComponent {
    render() {
        const x = this.props.position[0]-1;
        const y = this.props.position[1]-1;
        const value = this.props.position[2]-1+1;
        return (
            <Text style={[styles.all, {left: x, top: y, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}]}>
                {fourthRim[value]}
            </Text>
        );
    }
}

class L3Tile extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        var value = this.props.position[2];
        return (
            <Text style={[styles.all, {left: x, top: y, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}]}>
                {thirdRim[value]}
            </Text>
        );
    }
}

class L2Tile extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        var value = this.props.position[2];
        return (
            <Text style={[styles.all, {left: x, top: y, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}]}>
                    {secondRim[value]}
            </Text>
        );
    }
}

class CoreTile extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        return (
            <Text style={[styles.all, {left: x, top: y, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}]}>
                {core[0]}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    all: {
        position: 'absolute'
    }
});

export {Net, L4Tile, L3Tile, L2Tile, CoreTile};
