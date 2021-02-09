import React, { useEffect, useState } from 'react'
import {Button, BlogItem, Gap} from '../../components'
import './home.scss'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    const [dataBlog, setDataBlog] = useState([]);
    // const {dataBlogs, name} = useSelector(state => state);
    const { dataBlogs } = useSelector(state => state.HomeReducer);
    const dispatch = useDispatch();

    // console.log('state global: ', stateGlobal);
    console.log('data blog state global:', dataBlogs)
    useEffect(() => {
        setTimeout(() => {
            // dispatch({type: 'UPDATE_NAME'})
        }, 3000);
        
        Axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=2')
        .then(result => {
            // console.log('data: ', result.data)
            const responseAPI = result.data;

            setDataBlog(responseAPI.data);
            dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data})
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }, [dispatch])

    const history = useHistory();
    
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="create blog" onClick={() => history.push('/create-blog')} />
            </div>
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
