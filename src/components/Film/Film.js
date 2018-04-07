import React, {Component} from 'react';
import {Menu, Dropdown} from 'antd';
import Header from '../Header/Header';
import FilmModal from './FilmModal';
import './Film.css'
export default class Film extends Component {

    state = {
        isShowModal: false
    }

    onClick(key) {
        this.props.onChange(this.props.films.find((f) => f.film_id === Number(key)));
    }

    getMenuItem() {
        return (
            <Menu
                className='Film-item'
                onClick={({key}) => this.onClick(key)} 
                selectedKeys={[this.props.filmSelected ? this.props.filmSelected.film_id.toString() : '']}>
                {
                    this.props.films && this.props.films.map((item) => 
                        <Menu.Item key={item.film_id} >
                            <div style={{ display: '-webkit-box' }}>
                                <img alt={item.film_name} width="80" src={item.poster_thumb} />
                                <div style={{margin: 10}}>
                                    <strong>{item.film_name}</strong>
                                    <p className='Film-info'>Thời lượng: {item.film_duration} phút</p>
                                    <p className='Film-info'>Định dạng: {item.film_version}</p>
                                    <p className='Film-info'>Điểm IMDB: {item.imdb_point}</p>
                                </div>
                            </div>
                        </Menu.Item>)
                }
            </Menu>
        );
    }

    render() {
        const headerContent = this.props.filmSelected || {};
        return (
            <div>
                <FilmModal data={headerContent} closeModal={() => this.setState({isShowModal: false})} visible={this.state.isShowModal} />
                <Dropdown trigger={['click']} overlay={this.getMenuItem()}>
                    <div>
                        <Header
                            openModal={() => this.setState({isShowModal: true})}
                            text={headerContent.film_name} 
                            subText={headerContent.film_duration + ' phút - IMDB: ' + headerContent.imdb_point} 
                            img={headerContent.poster_thumb} />
                    </div>
                </Dropdown>
            </div>  
        )

    }
}