import React from "react";

function Articles({ articles = [] }) {
  
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((articles, index) => ( 
            <tr  key={index}>
              <td data-testid="article-title">{articles.title}</td>
              <td data-testid="article-upvotes">{articles.upvotes}</td>
              <td data-testid="article-date">{articles.date}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
