import React, {useState} from "react";
import {MainLayout} from "../layouts/MainLayout";
import {Form} from "react-bootstrap";
import {Button, FormControl, FormLabel, Input} from "@chakra-ui/react";

const AddPost = () => {
    const [title, setTitle] = useState()
    const [shortDescription, setShortDescription] = useState()
    const [imageURL, setImageURL] = useState()

    const submit = () => {
        const localStoragePosts = JSON.parse(localStorage.getItem("posts"))
        if (localStoragePosts) {
            localStorage.setItem("posts", JSON.stringify([...localStoragePosts, {
                title,
                image: imageURL,
                description: shortDescription
            }]))
        } else {
            localStorage.setItem("posts", JSON.stringify([{
                title,
                image: imageURL,
                description: shortDescription
            }]))
        }
        setTitle("")
        setShortDescription("")
        setImageURL("")
    }

    return (
        <MainLayout>
            <h1>Add new post</h1>
            <div style={{padding: "10px", borderRadius: "8px", border: "1px solid #e3e3e3"}}>
                <Form onSubmit={e => {
                    e.preventDefault()
                    submit()
                }} style={{width: "60%"}}>
                    <FormControl className="mb-3">
                        <FormLabel>Title</FormLabel>
                        <Input type="text" placeholder="Title" value={title}
                               onChange={e => setTitle(e.target.value)}/>
                    </FormControl>

                    <FormControl className="mb-3" controlId="formBasicPassword">
                        <FormLabel>Short description</FormLabel>
                        <Input type="text" placeholder="Short description" value={shortDescription}
                               onChange={e => setShortDescription(e.target.value)}/>
                    </FormControl>

                    <FormControl className="mb-3" controlId="formBasicPassword">
                        <FormLabel>Image URL</FormLabel>
                        <Input type="text" placeholder="Image URL" value={imageURL}
                               onChange={e => setImageURL(e.target.value)}/>
                    </FormControl>
                    <Button colorScheme="teal" variant="primary" type="submit">
                        Add new post
                    </Button>
                </Form>
            </div>
        </MainLayout>
    )
}

export {AddPost}