import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";


import "./index.css";
import { site, author, twitter, og } from "../../config/meta";





const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{site.title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <meta name="author" content={author.name} />
      <meta name="description" content={author.description} />
      <meta name="Keywords" content={site.Keywords} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={author.name} />
      <meta name="twitter:description" content={author.description} />
      <meta name="twitter:creator" content={twitter.creator} />

      <meta name="og:title" content={og.title} />
      <meta name="og:description" content={og.description} />
      <meta name="og:url" content={og.url} />
      <meta name="og:site_name" content={og.site_name} />
      <meta name="og:type" content={og.type} />

      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
      <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet"/>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

    </Helmet>
    {children()}

  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
