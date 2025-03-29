import "../styles/homeBlog.css";
import blog1 from "../img/exampleBlog1.jpg";
import blog2 from "../img/exampleBlog2.jpg";
import blog3 from "../img/exampleBlog3.jpg";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HomeBlog = () => {

    return(
        <>
            <>
                <div class="homeBlog-bg">
                    <div class="homeBlog-header">
                        <div class="row-1">
                            <div class="column-1">
                                <h1>HER</h1>
                            </div>
                            <div class="column-2">
                                <h1>Blogs</h1>
                            </div>
                        </div>
                        <div class="row-2">
                            <h3>A space where ideas are cultivated and shared.<br></br>Join the conversation on AI.</h3>
                        </div>
                    </div>
                </div>
            </>

            <div class="homeBlog-view">
                <div class="blog-catalogue">
                
                </div>

                <div class="reading-list">
                    <NavLink className="blog-button" to="/publishBlog">Create a Blog</NavLink>
                    <h4>Reading List<hr></hr></h4>
                    <img src={blog1} alt="palmTree" id="blog-img1"></img>
                    <img src={blog2} alt="sand" id="blog-img1"></img>
                    <img src={blog3} alt="chasm" id="blog-img1"></img>
                </div> 

            </div>
        </>
    )

};

export default HomeBlog;