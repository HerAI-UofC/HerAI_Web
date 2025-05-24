import "../styles/publishBlog.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PublishBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty!");
      return;
    }

    const blogData = {
      title,
      content,
      category,
      date: new Date().toISOString(),
    };
    
    console.log("Blog Published:", blogData);
    alert("Blog published successfully!");
  };

  return (
    /*mt and mb adds padding above and below the ReactQuill text editor */
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-10">
      <h2 className="blog-heading">your blog. your space</h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="Technology">Technology (General)</option>
        <option value="AI">AI</option>
        <option value="Machine Learning">Machine Learning</option>
        <option value="Bioinformatics">Bioinformatics</option>
      </select>

      <ReactQuill
        value={content}
        onChange={setContent}
        className="mb-4"
      />

      <button
        onClick={handlePublish}
        className="publish-button mx-auto block"
      >
        Publish
      </button>
    </div>
  );
};

export default PublishBlog;
