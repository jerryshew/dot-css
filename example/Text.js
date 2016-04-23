import React, { Component } from 'react';
import {CN} from './util';
import {BLOG_URL} from './setting';

export default class Text extends Component {
    render() {
        return (
            <div>
                <h2>Text</h2>
                <blockquote>
                    <p>This part is about text</p>
                </blockquote>
                <ul>
                    <li>
                        <h3>Display Block element</h3>
                        <a href={BLOG_URL} className={CN('bg-orange block')} target="_blank">block</a>
                        <br/>
                    </li>
                    <li>
                        <h3>Truncate text</h3>
                        <div style={{'width': '200'}} className={CN('truncate')}>
                            hello, this will not show the fully text.
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Break word</h3>
                        <div style={{'width': '200'}} className={CN('break-word')}>
                            <a href="https://www.google.com/design/spec/style/color.html" target="_blank">
                                https://www.google.com/design/spec/style/color.html
                            </a>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Text Align</h3>
                        <div className={CN('bg-tiny_gray grid grid-3')}>
                            <p className={CN('padding text-left column')}>
                                this content is text align left
                            </p>
                            <p className={CN('padding text-center column')}>
                                this content is text align center
                            </p>
                            <p className={CN('padding text-right column')}>
                                this content is text align right
                            </p>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Float</h3>
                        <div className={CN('padding bg-tiny_gray')}>
                            <span className={CN('float-none')}>this content is float none</span>
                            <span className={CN('float-left')}>this content is float left</span>
                            <span className={CN('float-right')}>this content is float right</span>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h3>Text size</h3>
                        <div className={CN('padding bg-tiny_gray')}>
                            <p className={CN('text-major')}>Text major</p>
                            <p className={CN('text-content')}>Text content</p>
                            <p className={CN('text-extra')}>Text extra</p>
                        </div>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}