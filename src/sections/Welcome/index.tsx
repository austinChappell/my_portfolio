// External Dependencies
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';

// Internal Dependencies
import Section from '../../components/Section';
import {
  colors,
  ids,
} from '../../constants';
import Text from '../../components/Text';
import Cursor from './Cursor';

// Local Typings
interface CharacterData {
  charArray: string[];
  isAccented: boolean;
}

// Local Variables
const StyledSection = styled(Section)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});
const characters: CharacterData[][] = [
  [
    {
      charArray: 'Hi. I\'m '.split(''),
      isAccented: false,
    },
    {
      charArray: 'Austin'.split(''),
      isAccented: true,
    },
    {
      charArray: ','.split(''),
      isAccented: false,
    },
  ],
  [],
  [
    {
      charArray: 'a Full-Stack Developer...'.split(''),
      isAccented: false,
    },
  ],
];

const allCharCount = characters
  .map(charSet =>
    charSet.map(chars =>
      chars.charArray.join('')
    )
  )
  .reduce((acc, curr) =>
    acc + curr.reduce((a, c) =>
      a + c.length, 0
    ), 0
  );
      
// Component Definition
const Welcome: React.FC = () => {
  const [charCount, setCharCount] = useState(0);

  let count = 0;

  useEffect(() => {
    if (charCount < allCharCount) {
      setTimeout(() => {
        setCharCount(charCount + 1);
      }, 80);
    }
  }, [charCount]);

  return (
    <StyledSection
      backgroundColor={colors.black}
      id={ids.welcome}
    >
      <Text
        alignment="center"
        as="h1"
        fontColor="white"
        fontSize="xl"
      >
        {characters.map((charSet, index) => {
          if (charSet.length === 0) {
            return <br key={index} />
          }

          return charSet.map((char, charArrIndex) => {
            if (char.isAccented) {
              return (
                <Text
                  as="span"
                  fontColor="brand"
                  key={`${char.charArray?.join('')}-${charArrIndex}`}
                >
                  {char.charArray.map((char, charIndex) => {
                    count += 1;

                    if (count > charCount) {
                      return null;
                    }

                    if (count === charCount) {
                      return (
                        <React.Fragment key={charIndex}>
                          {char}
                          <Cursor />
                        </React.Fragment>
                      )
                    }

                    return char;
                  })}
                </Text>
              )
            }

            return char.charArray.map((char, charIndex) => {
              count += 1;

              if (count > charCount) {
                return null;
              }

              if (count === charCount) {
                return (
                  <React.Fragment key={charIndex}>
                    {char}
                    <Cursor />
                  </React.Fragment>
                )
              }
                      
              return char;
            });
          })
        })}
      </Text>
    </StyledSection>
  )
}

export default Welcome;
