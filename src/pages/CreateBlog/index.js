import React, { useState } from 'react'
import {Button, Input, Upload, TextArea, Gap, Link} from '../../components'
import './createBlog.scss'
import { useHistory } from 'react-router-dom'


const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();

    const onSubmit = () => {
        console.log('title: ', title);
        console.log('body: ', body);
        console.log('image: ', image);
    }
    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Posts</p>
            <Input label="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Upload onChange={(e) => setImage(e.target.files[0])} />
            <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" onClick={onSubmit} />
            </div>
        </div>
    )
}

export default CreateBlog
