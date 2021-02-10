import React, { useEffect } from 'react'
import {Button, Input, Upload, TextArea, Gap, Link} from '../../components'
import './createBlog.scss'
import { useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setForm, setImgPreview, postToAPI } from '../../config/redux/action'


const CreateBlog = (props) => {
    const { form, imgPreview } = useSelector(state => state.createBlogReducer);
    const { title, body, image } = form;
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log('params: ', props)
    }, [props])

    const onSubmit = () => {
        postToAPI(form);
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

export default withRouter(CreateBlog)
