import React, { useEffect, useState } from 'react'
import {Button, BlogItem, Gap} from '../../components'
import './home.scss'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    const [dataBlog, setDataBlog] = useState([]);
    const stateGlobal = useSelector(state => state);
    const dispatch = useDispatch();

    console.log('state global: ', stateGlobal);
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'UPDATE_NAME'})
        }, 3000);
        
        Axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=2')
        .then(result => {
            // console.log('data: ', result.data)
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
            <p>{stateGlobal.name}</p>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return <BlogItem 
                    key={blog._id} 
                    image={`http://localhost:4000/${blog.image}`} 
                    title={blog.title} 
                    body={blog.body}
                    name={blog.author.name} 
                    date={blog.createdAt} />
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
