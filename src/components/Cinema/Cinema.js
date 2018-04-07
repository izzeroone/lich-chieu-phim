import React, {Component} from 'react';
import {Menu, Dropdown} from 'antd';
import Header from '../Header/Header';
import CinemaModal from './CinemaModal';
import './Cinema.js'
export default class Cinema extends Component {

    state = {
        isShowModal: false
    }

    onClick(key) {
        this.props.onChange(this.props.cinemas.find((c) => c.cinema_id === Number(key)));
    }

    getMenuItem() {
        return (
            <Menu
                className='Cinema-item'
                onClick={({key}) => this.onClick(key)} 
                selectedKeys={[this.props.cinemaSelected ? this.props.cinemaSelected.cinema_id.toString() : '']}>
                {
                    this.props.cinemas.map((item) => 
                        <Menu.Item key={item.cinema_id} >
                            <div style={{ display: '-webkit-box' }}>
                                <img alt={item.film_name} width="60" src={item.cinema_image} />
                                <div style={{marginLeft: 10}}>
                                    <strong>{item.cinema_name}</strong>
                                    <p>{item.cinema_address}</p>
                                </div>
                            </div>
                        </Menu.Item>)
                }
            </Menu>
        );
    }

    render() {
        const headerContent = this.props.cinemaSelected || {};
        return (
            <div>
                <CinemaModal data={headerContent} closeModal={() => this.setState({isShowModal: false})} visible={this.state.isShowModal} />
                
                <Dropdown overlay={this.getMenuItem()} trigger={['click']}>
                    <div>
                        <Header
                            openModal={() => this.setState({isShowModal: true})}
                            text={headerContent.cinema_name} 
                            subText={headerContent.cinema_address} 
                            img={headerContent.cinema_image} />
                    </div>
                </Dropdown>
            </div>
        )

    }
}