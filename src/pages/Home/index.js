import React, { useEffect, useState } from 'react'
import {Button, BlogItem, Gap} from '../../components'
import './home.scss'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const Home = () => {
    const [dataBlog, setDataBlog] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts')
        .then(result => {
            console.log('data: ', result.data)
            const responseAPI = result.data;

            setDataBlog(responseAPI.data)
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }, [])

    const history = useHistory();
    
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="create blog" onClick={() => history.push('/create-blog')} />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    console.log('blog: ', blog)
                })}
            </div>
            <div className="pagination">
                <Button title="previous" />
                <Gap width={20} />
                <Button title="next" />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
