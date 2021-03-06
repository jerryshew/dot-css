import React, { Component } from 'react';
import {CN, TitleBlock} from './util';
import {NS} from './setting';

export default class Grid extends Component {
    render() {
        return (
            <div className='grid-example'>
                {TitleBlock('Grid')}
                <ul>
                    <li>
                        <h4>Same width column</h4>
                        <div className={CN('grid-5 text-center text-extra')}>
                            <div className="row">
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`grid-(1~16)
<div class="${NS} grid-5">
    <div class="row">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
</div>`
}                            
                            </code>
                        </pre>
                        <div className={CN('grid text-center')}>
                            <div className="row-3">
                                <div className="column">
                                    <p>1/3</p>
                                </div>
                                <div className="column">
                                    <p>1/3</p>
                                </div>
                                <div className="column">
                                    <p>1/3</p>
                                </div>
                            </div>
                            <div className="row-5">
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                                <div className="column">
                                    <p>1/5</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="${NS} grid">
    <div class="row-3">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
    <div class="row-5">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
</div>`
}                                   
                            </code>
                        </pre>
                        <ul className={CN('grid-4 text-center')}>
                            <li className="column">
                                <p>1/4</p>
                            </li>
                            <li className="column">
                                <p>1/4</p>
                            </li>
                            <li className="column">
                                <p>1/4</p>
                            </li>
                            <li className="column">
                                <p>1/4</p>
                            </li>
                        </ul>
                        <br/>
                    </li>
                    <li>
                        <h3>Column width, divide to 16 part</h3>
                        <div className={CN('grid text-center')}>
                            <div className="row">
                                <div className="column-2">
                                    <p>2</p>
                                </div>
                                <div className="column-6">
                                    <p>6</p>
                                </div>
                                <div className="column-2">
                                    <p>2</p>
                                </div>
                                <div className="column-2">
                                    <p>2</p>
                                </div>
                                <div className="column-4">
                                    <p>4</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column-8">
                                    <p>8</p>
                                </div>
                                <div className="column-8">
                                    <p>8</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`column-(1~16)
<div class="${NS} grid">
    <div class="row">
        <div class="column-2"></div>
        <div class="column-6"></div>
        <div class="column-2"></div>
        <div class="column-2"></div>
        <div class="column-4"></div>
    </div>
</div>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Column width, divide to 16 part</h3>
                        <div className={CN('grid text-center')}>
                            <div className="row">
                                <div className="column-3">
                                    <p>3</p>
                                </div>
                                <div className="column-5">
                                    <p>5</p>
                                </div>
                                <div className="float-right column-4">
                                    <p>4</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <pre>
                            <code>
{`<div class="grid">
    <div class="row">
        <div class="column-3"></div>
        <div class="column-5"></div>
        <div class="float-right column-4"></div>
    </div>
</div>`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h3>Basic grid layout</h3>
                        <div className={CN('basic grid-4')}>
                            <div className="row">
                                <div className="column">a</div>
                                <div className="column">b</div>
                                <div className="column">c</div>
                                <div className="column">d</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
