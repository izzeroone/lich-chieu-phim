import React, { Component } from 'react';
import {Carousel} from 'antd';
import './ImageList.css'

class ImageList extends Component{
    render(){
        const {films, onChange} = this.props;
        return <Carousel autoplay={true}>
            {films && films.map(film => {
                return (
                <div key = {film.film_id}>
                    <img class="PosterImg" src={film.poster_landscape} alt=""/>
                </div>);
            })
            }
        </Carousel>
    }
}

export default ImageList;