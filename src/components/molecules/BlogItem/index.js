import React from 'react'
import {RegisterBg} from '../../../assets'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'
import { useHistory } from 'react-router-dom'


const BlogItem = (props) => {
    const history = useHistory();
    
    return (
        <div className="blog-item">
            <img cllassName="image-thumb" src={props.image} alt="post" />
            <div className="content-detail">
                <p className="title">{props.title}</p>
                <p className="author">{props.name} - {props.date}</p>
                <p className="body">{props.body}</p>
                <Gap height={20} />
                <Button title="view detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
