import React, {useState} from 'react';
import {Amplify} from 'aws-amplify';
import {createBlog} from '../graphql/mutations';

const PublishBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pic, setPic] = useState('');
    const [date, setDate] = useState(new Date().toISOString());

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newBlog = {
                title,
                description,
                pic,
                date
            };

            const result = await Amplify.graphql({
                query: createBlog,
                variables: {input: newBlog}
            });

            console.log(result); // or re-direct to new blog or show success message
        } catch (error) {
            console.error("Error creating blog", error);
        }
    };

    return (
        <div>
            <h1>Publish your Blog!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type = "text"
                        value = {title}
                        onChange = {(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <br/>

                <label>
                    Description:
                    <textarea
                        value = {description}
                        onChange = {(e) => setDescription(e.target.value)}
                    />
                </label>
                <br/>

                <label>
                    Picture (URL):
                    <input
                        type = "text"
                        value = {pic}
                        onChange = {(e) => setPic(e.target.value)}
                    />
                </label>
                <br/>
                
                <button type="submit">Publish</button>
            </form>
        </div>
    );

};

export default PublishBlog;