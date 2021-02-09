import React, { useEffect, useState } from 'react'
import {Button, BlogItem, Gap} from '../../components'
import './home.scss'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setDataBlog } from '../../config/redux/action'

const Home = () => {
    const [counter, setCounter] = useState(1);
    const { dataBlog } = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDataBlog(counter))
    }, [dispatch])

    const history = useHistory();

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1 );
        console.log('counter', counter);
    }

    const next = () => {
        setCounter(counter + 1);
        console.log('counter', counter);
    }

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
                <Button title="previous" onClick={previous} />
                <Gap width={20} />
                <p className="text-page">1 / 3</p>
                <Gap width={20} />
                <Button title="next" onClick={next} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
