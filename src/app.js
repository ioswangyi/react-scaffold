/**
 * Created by chenqu on 2017/9/4.
 */
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.onClick = ::this.onClick;
    }

    onClick() {
        console.log('test');
    }

    render() {
        return (
            <div onClick={this.onClick}>这是一个得失<h1>123</h1></div>
        );
    }
}