import React from 'react'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'
import { useHistory } from 'react-router-dom'


const BlogItem = (props) => {
    const history = useHistory();
    const {image, title, name, date, body, _id} = props
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="view detail" onClick={() => history.push(`/detail-blog/${props._id}`)} />
            </div>
        </div>
    )
}

export default BlogItem
