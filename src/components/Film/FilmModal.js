import React, {Component} from 'react';
import {Modal, Tooltip} from 'antd';
import './FilmModal.css'

export default class FilmModal extends Component {

    state = {
        detail: null,
    }

    handleCancel = (e) => {
        this.setState({detail: null});
        this.props.closeModal();
    }

    async getFilmDetail(filmId) {
        const detail = await (await fetch(`${process.env.REACT_APP_HOST_URL}/get-film-detail?filmId=${filmId}`)).json();
        this.setState({detail: detail});
        console.log(this.state.detail);
    }


    render() {
        const filmId = this.props.data && this.props.data.film_id;
        this.props.visible && !this.state.detail && this.getFilmDetail(filmId);

        return (
            <Modal
                title={this.props.data && this.props.data.film_name}
                footer={null}
                visible={this.props.visible}
                onCancel={() => this.handleCancel()}>

                {
                    this.state.detail && 
                    <div>
                        <div className='ModalBox'>
                            <img alt={this.state.detail.film_name} width="120" src={this.state.detail.poster} />
                            <div style={{marginLeft: 10}}>
                                <p><span className='ModalText'>'Ngày phát hành:</span> {this.state.detail.publish_date}</p>
                                <p><span className='ModalText'>Thời lượng:</span> {this.state.detail.film_duration} phút</p>
                                <p><span className='ModalText'>Định dạng:</span> {this.state.detail.film_version}</p>
                                <p><span className='ModalText'>Điểm IMDB:</span> {this.state.detail.imdb_point}</p>

                                <p><span className='ModalText'>Thể loại:</span> {this.state.detail.film_category}</p>
                                <p><span className='ModalText'>Quốc gia SX:</span> {this.state.detail.film_country}</p>
                                <p><span className='ModalText'>Đạo diễn:</span> {this.state.detail.film_director}</p>
                                <p style={{width: 360}}><span className='ModalText'>Diễn viên:</span> 
                                    {
                                        this.state.detail.list_actor.map(
                                            (artist, index) => 
                                            <Tooltip key={artist.artist_id} title={'Vào vai: ' + artist.char_name}>
                                                <span style={{cursor: 'pointer'}}>{index ? ', ' : ' '} {artist.artist_name}</span>
                                            </Tooltip>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                        
                        <p style={{marginTop: 5}}><span className='ModalText'>Nội dung:</span></p> 
                        <p className='ModalFilmDescription' dangerouslySetInnerHTML={{__html: this.state.detail.film_description_web_short}}></p>
                        <a className="Button" href={this.state.detail.film_url}>Đặt vé</a>
                    </div>
                }

            </Modal>
        )

    }
}