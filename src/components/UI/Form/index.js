import React, { useEffect } from 'react'
import { Col, Container, Row, Form ,Button } from 'react-bootstrap'
import { useState } from 'react'
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'

import { addPost } from '../../../actions/posts.actions';
import { Paper } from '@material-ui/core'

import './styles.css'
import Layout from '../../../containers/Layout'

import { Link } from 'react-router-dom'



 const UploadPost = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState('');
  const [postImg, setPostImg] = useState([]);
 

  const dispatch = useDispatch();
//   useEffect(() => {
//     // dispatch(getPosts());
//   }, []);


  const submitPostForm = (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append('title', title);
    form.append('description', description);
    form.append('category', category);
    form.append('tags', tags);
    for (let pic of postImg) {
      form.append('postImg', pic);
    }

    // dispatch(addPost(form)).then(() => {
    // //   dispatch(getPosts())
    // } );
    dispatch(addPost(form))
  
  }

//   const handleShow = () => setShow(true);

  const handlePostImg = (e) => {
    setPostImg([
      ...postImg,
      e.target.files[0]
    ])
  }
    return (
      <> 
      <Layout />  
      <div className="rosh">
      <Container>
          <Paper>
       <Form className="formmm"
       onSubmit={submitPostForm}
      >
        <Input
          label="Title"
          value={title}
          placeholder={'Title'}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          label="Memories"
          value={description}
          placeholder={'Describe Memory'}
          onChange={(e) => setDescription(e.target.value)}
        />
       
          
            <Input
              label="Tags"
              value={tags}
              placeholder={'#tags'}
              onChange={(e) => setTags(e.target.value)}
            />
      <Row>
          <Col md={6} className="justify-containt-center">
            <label>Select Genre</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
               <option default value="">Select</option>
              <option value="event">Events</option>
              <option value="college">Collage Life</option>
              <option value="travel">Travelling</option>
              <option value="week">Best Memories of week</option>
            </select>
          </Col>
        </Row>
        <Row>
        {
          postImg.length > 0 ?
            postImg.map((pic, index) => <div key={index}>{pic.name}</div>) : null
        }
          <Col md={6} className="justify-containt-center">
        <Form.File className="file-input"
          id="postImg"
          label="Add Pictures"
          onChange={handlePostImg}
          lang="en"
          custom
        />
       <Button variant="primary" type="submit" className="ee"><b style={{color:"white"}}>Submit</b>
  </Button>
       
   
  </Col>
        </Row>
      </Form>
      </Paper>
      </Container>
      </div>
    </>
    )
  }

  export default UploadPost