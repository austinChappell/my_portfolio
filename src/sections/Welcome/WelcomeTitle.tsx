// External Dependencies
import React, { useState, useEffect } from 'react';

// Internal Dependencies
import Text from '../../components/Text';
import Cursor from './Cursor';

// Local Typings
interface CharacterData {
  charArray: string[];
  isAccented: boolean;
}

// Local Variables
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
const WelcomeTitle: React.FC = () => {
  const [charCount, setCharCount] = useState(0);

  let count = 0;

  useEffect(() => {
    let timeout: number;

    if (charCount < allCharCount) {
      timeout = window.setTimeout(() => {
        setCharCount(charCount + 1);
      }, 80);
    }

    return (() => {
      clearTimeout(timeout);
    })
  }, [charCount]);

  return (
    <Text
      alignment="center"
      as="h1"
      fontColor="white"
      fontSize="xxl"
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
  )
}

export default WelcomeTitle;
