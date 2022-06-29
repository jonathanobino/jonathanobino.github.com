import React from 'react';

const BlogPost = ({ title, postData }) => {
  return (
    <div className="blogpost" style={{ backgroundImage: postData.image }}>
      <div
        className="content"
        style={{ background: postData.dominant || 'rgba(255,255,255,0.5)' }}
      >
        <p>{title}</p>
        <p>
          <Link to={`/posts/${postData.id}`}>View</Link>
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
