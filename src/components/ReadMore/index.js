// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ReactContainer,
  ReactHeading,
  ReactNote,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setReadMore] = useState(false)

  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const OnClickReadMore = () => setReadMore(prevState => !prevState)

  return (
    <MainContainer>
      <ReactContainer>
        <ReactHeading>React Hooks</ReactHeading>
        <ReactNote>Hooks are a new addition to react</ReactNote>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={OnClickReadMore}>
          {buttonText}
        </Button>
      </ReactContainer>
    </MainContainer>
  )
}

export default ReadMore
