/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Container, Row, Col } from 'components/Grid'

const Section = ({ children, title, titleMaxWidth, description, styles }) => {
  return (
    <section sx={{ variant: 'section', ...styles }}>
      <Container>
        <Row styles={{ mb: [3, 4] }}>
          <Col>
            {title && (
              <Styled.h3 sx={{ maxWidth: `${titleMaxWidth}px` }}>
                {title}
              </Styled.h3>
            )}
            {description && (
              <Styled.p
                sx={{
                  fontSize: [1, null, 1],
                  mb: [2, null, 3]
                }}
              >
                {description}
              </Styled.p>
            )}
          </Col>
        </Row>
        <Row>{children}</Row>
      </Container>
    </section>
  )
}

export default Section
