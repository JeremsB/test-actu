import React from 'react';
// import PropTypes from 'prop-types';
import {} from './redux/hooks';
import Article from './Article';

export default function ListArticles() {
  const articles = [
    {
      title: 'Article 1',
      desc: "test grinning face"
    },
    {
      title: 'Article 2',
      desc: "party popper"
    },
    {
      title: 'Article 3',
      desc: "woman dancing"
    }
  ];

  return (
    <div className="actu-list-articles">
      <div className="bg-red-500">
        {articles.map((article) => (
          <Article title={article.title} desc={article.desc}/>
        ))}
      </div>
    </div>
  );
};

ListArticles.propTypes = {};
ListArticles.defaultProps = {};
