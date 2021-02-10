import React, { useState } from 'react'
import {Button, Input, Upload, TextArea, Gap, Link} from '../../components'
import './createBlog.scss'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setForm, setImgPreview } from '../../config/redux/action'


const CreateBlog = () => {
    const { form, imgPreview } = useSelector(state => state.createBlogReducer);
    const { title, body, image } = form;
    const dispatch = useDispatch();

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    // const [image, setImage] = useState('');
    // const [imagePreview, setImagePreview] = useState(null);
    const history = useHistory();

    const onSubmit = () => {
        console.log('title: ', title);
        console.log('body: ', body);
        console.log('image: ', image);

        const data = new FormData();
        data.append('title', title);
        data.append('body', body);
        data.append('image', image);

        Axios.post('http://localhost:4000/v1/blog/post', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('post success: ', res)
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm('image', file));
        dispatch(setImgPreview(URL.createObjectURL(file)));
    }
    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Posts</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" onClick={onSubmit} />
            </div>
        </div>
    )
}

export default CreateBlog
