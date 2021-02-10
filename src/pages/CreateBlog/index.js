import React, { useState } from 'react'
import {Button, Input, Upload, TextArea, Gap, Link} from '../../components'
import './createBlog.scss'
import { useHistory } from 'react-router-dom'


const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();

    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Posts</p>
            <Input label="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Upload />
            <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" />
            </div>
        </div>
    )
}

export default CreateBlog
