import React, { Component } from 'react';
import {NS, ICONS} from './setting';

const makeIcons = () => {
    return (
        <ul className={`${NS} grid grid-5 text-center text-extra`}>
            {ICONS.map(icon => {
                return <li key={icon} className={`${NS} column padding field`}>
                            <i className={`${NS} icon`}>{icon}</i>
                            <p>{icon}</p>
                        </li>
            })}
        </ul>
    );
};

export default class Icon extends Component {
    render() {
        return (
            <div>
                <h4>
                    Icon
                </h4>
                <p>Use Google's material icons, <a href="https://design.google.com/icons/" target="_blank">Google icons</a></p>
                <pre>
                    <code>
                        &lt;i class="dot-icon"&gt;account_circle&lt;/i&gt;
                    </code>
                </pre>
                {makeIcons()}
            </div>
        );
    }
}