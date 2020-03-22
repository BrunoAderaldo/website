/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Container, Row, Col } from 'components/Grid'
import SocialIcons from 'components/SocialIcons'

export default ({
  title,
  titleImage,
  description,
  descriptionMaxWidth,
  socialIcons
}) => {
  return (
    <section
      sx={{
        variant: 'section.hero',
        bg: 'background.primary'
      }}
    >
      <Container>
        <Row>
          <Col>
            {titleImage && (
              <img src={titleImage} sx={{ mb: [30], maxWidth: 260 }} />
            )}
            {title && <Styled.h1>{title}</Styled.h1>}
            <Styled.p
              sx={{
                variant: 'p.medium',
                color: 'text.tertiary',
                fontWeight: 700,
                maxWidth: `${descriptionMaxWidth}px`,
                mb: 25
              }}
            >
              {description}
            </Styled.p>
            {socialIcons && <SocialIcons />}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
