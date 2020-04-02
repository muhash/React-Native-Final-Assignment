import React, {PureComponent} from "react";
import {Image, StyleSheet, View, Text} from "react-native";

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

class Score extends PureComponent {
    render() {
        var value = this.props.value;
        return (
            <Text style={[styles.all, {left: 50, top: 50, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}]}>
                Score: {value}
            </Text>
        );
    }
}


class L4Tile extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        var value = this.props.value;
        return (
            <Text style={[styles.all, {left: x, top: y, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}]}>
                {value}
            </Text>
        );
    }
}

class L3Tile extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        var value = this.props.value;
        return (
            <Text style={[styles.all, {left: x, top: y, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}]}>
                {value}
            </Text>
        );
    }
}

class L2Tile extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        var value = this.props.value;
        return (
            <Text style={[styles.all, {left: x, top: y, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}]}>
                    {value}
            </Text>
        );
    }
}

class CoreTile extends PureComponent {
    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        var value = this.props.value;
        return (
            <Text style={[styles.all, {left: x, top: y, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}]}>
                {value}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    all: {
        position: 'absolute'
    }
});

export {Net, L4Tile, L3Tile, L2Tile, CoreTile, Score};
