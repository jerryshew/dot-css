import React, { Component } from 'react';
import {ICONS} from './setting';
import {CN, TitleBlock} from './util';
import {NS} from './setting';


export default class Icon extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'account_circle'
        };
    }
    
    handleClick(icon){
        this.setState({
            display: icon
        });
    }

    makeIcons(){
        return (
            <ul className={CN('grid grid-5 text-center text-extra')}>
                {ICONS.map(icon => {
                    return <li key={icon} onClick={() => this.handleClick(icon)} className={CN('column block truncate field icon-item')}>
                                <i className={CN('icon')}>{icon}</i>
                                <p>{icon}</p>
                            </li>
                })}
            </ul>
        );
    };
    render() {
        return (
            <div className="icon-example">
                {TitleBlock('Icon', <span>
                                        This part is the Icons dot css use, 
                                        <span className={CN('color-brown')}>from Google's material icons, 
                                        <a href="https://design.google.com/icons/" target="_blank">Google icons</a>
                                        </span>
                                    </span>)}
                <pre>
                    <code>
                        {`<i class="${NS} icon">${this.state.display}</i>`}
                    </code>
                </pre>
                {this.makeIcons()}
                <br/>
                <h4>Colored icon</h4>
                <div className={CN('grid-10')}>
                    <div className={CN('column')}>
                        <i className={CN('color-red icon')}>favorite</i>
                    </div>
                    <div className={CN('column')}>
                        <i className={CN('color-green icon')}>all_inclusive</i>
                    </div>
                </div>
                <pre>
                    <code>{`<i class="${NS} color-red icon">favorite</i>`}</code>
                </pre>
            </div>
        );
    }
}
