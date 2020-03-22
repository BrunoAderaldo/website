import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import defaultImage from 'assets/images/open-graph-image.png'

function SEO({ title, description, image, lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const customTitle = title || site.siteMetadata.title
  const customImage = image || defaultImage

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={customTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: `${customTitle} | ${site.siteMetadata.title}`
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:locale',
          content: 'en'
        },
        {
          property: 'og:site_name',
          content: customTitle
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.siteUrl}${customImage}`
        },
        {
          property: 'og:image:width',
          content: 1200
        },
        {
          property: 'og:image:height',
          content: 630
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: `${customTitle} | ${site.siteMetadata.title}`
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          property: 'twitter:image',
          content: `${site.siteMetadata.siteUrl}${customImage}`
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
