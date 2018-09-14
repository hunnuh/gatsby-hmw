import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";


import "./index.css";
import { site, author, twitter, og } from "../../config/meta";


import appleicon57x57 from "../assets/favicon/apple-icon-57x57.png";
import appleicon60x60 from "../assets/favicon/apple-icon-60x60.png";
import appleicon72x72 from "../assets/favicon/apple-icon-72x72.png";
import appleicon76x76 from "../assets/favicon/apple-icon-76x76.png";
import appleicon114x114 from "../assets/favicon/apple-icon-114x114.png";
import appleicon120x120 from "../assets/favicon/apple-icon-120x120.png";
import appleicon144x144 from "../assets/favicon/apple-icon-144x144.png";
import appleicon152x152 from "../assets/favicon/apple-icon-152x152.png";
import appleicon180x180 from "../assets/favicon/apple-icon-180x180.png";
import androidicon192x192 from "../assets/favicon/android-icon-192x192.png";
import favicon32x32 from "../assets/favicon/favicon-32x32.png";
import favicon96x96 from "../assets/favicon/favicon-96x96.png";
import favicon16x16 from "../assets/favicon/favicon-16x16.png";
import manifest from "../assets/favicon/manifest.json";
import msicon from "../assets/favicon/ms-icon-144x144.png";



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{site.title}</title>



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


      <link rel="apple-touch-icon" sizes="57x57" href={`${appleicon57x57}`}/>
      <link rel="apple-touch-icon" sizes="60x60" href={`${appleicon60x60}`}/>
      <link rel="apple-touch-icon" sizes="72x72" href={`${appleicon72x72}`}/>
      <link rel="apple-touch-icon" sizes="76x76" href={`${appleicon76x76}`}/>
      <link rel="apple-touch-icon" sizes="114x114" href={`${appleicon114x114}`}/>
      <link rel="apple-touch-icon" sizes="120x120" href={`${appleicon120x120}`}/>
      <link rel="apple-touch-icon" sizes="144x144" href={`${appleicon144x144}`}/>
      <link rel="apple-touch-icon" sizes="152x152" href={`${appleicon152x152}`}/>
      <link rel="apple-touch-icon" sizes="180x180" href={`${appleicon180x180}`}/>
      <link rel="icon" type="image/png" sizes="192x192"  href={`${androidicon192x192}`}/>
      <link rel="icon" type="image/png" sizes="32x32" href={`${favicon16x16}`}/>
      <link rel="icon" type="image/png" sizes="96x96" href={`${favicon32x32}`}/>
      <link rel="icon" type="image/png" sizes="16x16" href={`${favicon96x96}`}/>
      <link rel="manifest" href={`${manifest}`}/>
      <meta name="msapplication-tilecolor" content="#ffffff"/>
      <meta name="msapplication-tileimage" content={`${msicon}`}/>
      <meta name="theme-color" content="#ffffff"/>

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
