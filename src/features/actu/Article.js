import React from 'react';
// import PropTypes from 'prop-types';
import {} from './redux/hooks';
import PropTypes from 'prop-types';

export default function Article(props) {
  return (
    <div className="actu-article">
      <div className="flex items-center p-4 bg-white border-2 border-red rounded-lg shadow-sm dark:bg-gray-800">
        <div id="body" className="flex flex-col ml-5">
          <h4 id="title" className="text-xl font-semibold mb-2">{props.title}</h4>
          <p id="desc" className="text-gray-800 mt-2">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};
Article.defaultProps = {
  title: 'Breaking News'
};
