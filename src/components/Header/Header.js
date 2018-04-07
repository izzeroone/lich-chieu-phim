import React, {Component} from 'react';
import './Header.css'
export default class Header extends Component {

    render() {
        return (
            <div className='Header'>
                <div className='Header-box'>
                    <div className='Header-image'>
                         <img alt={this.props.text} width="50px" height="50px" src={this.props.img} />
                         <a className="Header-image__button" onClick={() => this.props.openModal()} style={{color: '#FB4226', fontSize: 12}}>Chi tiết</a>
                    </div>
                    <div style={{paddingLeft: 10}}>
                        <span className='Header-title'>{this.props.text}</span>
                        {this.props.subText && <span>{this.props.subText}</span>}
                    </div>
                </div>
                
            </div>
        )
    }
}