/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Col } from 'components/Grid'

const Feature = ({ item }) => {
  const { image, imageAlt, title, text, link } = item

  return (
    <Col styles={{ mb: [20] }}>
      {image && (
        <img
          src={image}
          alt={imageAlt || 'feature'}
          sx={{
            mb: [15],
            maxWidth: 25
          }}
        />
      )}
      <Styled.h4>{title}</Styled.h4>
      <Styled.p
        sx={{ color: 'text.body', fontWeight: 600, lineHeight: '28px' }}
      >
        {text}
      </Styled.p>
    </Col>
  )
}

export default Feature
