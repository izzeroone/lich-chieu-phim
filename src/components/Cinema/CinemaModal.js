import React, {Component} from 'react';
import {Modal} from 'antd';
import CinemaMap from './CinemaMap';

export default class CinemaModal extends Component {

    state = {
        detail: null,
    }

    handleCancel = (e) => {
        this.setState({detail: null});
        this.props.closeModal();
    }

    async getCinemaDetail(cinemaId) {
        const detail = await (await fetch(`${process.env.REACT_APP_HOST_URL}/get-cinema-detail?cinemaId=${cinemaId}`)).json();
        this.setState({detail: detail});
    }

    getMap(cinema) {
        const {cinema_latitude, cinema_longitude} = cinema;
        if(!cinema_latitude || !cinema_longitude) {
            return (<div></div>);
        }
        return (
            <div style={{marginTop: 10}}>
                <a targCet="_blank" href={`https://www.google.com/maps/search/?api=1&query=${cinema_latitude},${cinema_longitude}`}>Xem trên Google Maps</a>
                <CinemaMap lat={cinema_latitude} lng={cinema_longitude} />
            </div>
        );
    }

    render() {
        const cinemaId = this.props.data && this.props.data.cinema_id;
        this.props.visible && !this.state.detail && this.getCinemaDetail(cinemaId);

        return (
            <Modal
                title={this.props.data && this.props.data.cinema_name}
                footer={null}
                visible={this.props.visible}
                onCancel={() => this.handleCancel()}>

                {
                    this.state.detail && 
                    <div>
                        <div style={{ display: '-webkit-box' }}>
                            <img alt={this.state.detail.cinema_name} width="120" src={this.state.detail.cinema_image_poster} />
                            <div style={{marginLeft: 10}}>
                                <p ><span className='ModalText'>Địa chỉ:</span> {this.state.detail.cinema_address}</p>
                                <p><span className='ModalText'>Điện thoại:</span> <a href={'tel:' + this.state.detail.cinema_phone}>{this.state.detail.cinema_phone}</a></p>
                                <p><span className='ModalText'>Email:</span> <a href={'mailto:' + this.state.detail.cinema_email}>{this.state.detail.cinema_email}</a></p>
                                <p><span className='ModalText'>Phòng chiếu:</span> {this.state.detail.room_info}</p>
                                <p><span className='ModalText'>Giờ mở cửa:</span> {this.state.detail.opening_closing_time}</p>
                                <p><span className='ModalText'>Giới thiệu:</span></p> 
                            </div>
                        </div>
                        <p className='ModalCinemaDesciption' dangerouslySetInnerHTML={{__html: this.state.detail.cinema_description}}></p>
                        {this.getMap(this.state.detail)}
                    </div>
                }

            </Modal>
        )

    }
}