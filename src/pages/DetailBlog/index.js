import React, { useEffect } from 'react'
import {RegisterBg} from '../../assets'
import './detailBlog.scss'
import {Gap, Link} from '../../components'
import { useHistory, withRouter } from 'react-router-dom'
import Axios from 'axios'

const DetailBlog = (props) => {
    useEffect(() => {
        const id = props.match.params.id
        Axios(`http://localhost:4000/v1/blog/post/${id}`)
        .then(res => {
            console.log('success: ', res)
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }, [props])
    
    const history = useHistory();
    
    return (
        <div className="detail-blog-wrapper">
            <img className="img-thumb" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date post</p>
            <p className="blog-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Gap height={20} />
            <Link title="kembali ke Home" onClick={() => history.push('/')} />
        </div>
    )
}

export default withRouter(DetailBlog)
