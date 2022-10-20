import { fonts, colors } from 'constants/default'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Props = {
  values: string[]
  set: Dispatch<SetStateAction<unknown>>
}

export default function Select ({ values, set }: Props) {
  const [isActive, setActive] = useState(false)
  const [selected, setSelected] = useState(values[0])

  useEffect(() => {
    set(selected)
  }, [selected, set])

  const handleSelect = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLParagraphElement

    setSelected(target.textContent || selected)
  }

  return (
    <>
      <span className='holder' onClick={() => setActive(!isActive)}>
        <p>{selected}</p>
        {
          isActive
            ? values.map((value: string) => {
              if (selected === value) return ''
              return <p key={value} className='option' onClick={handleSelect}>{value}</p>
            })
            : ''
        }
      </span>

      <style jsx>{`
       .holder {
          margin-right: 1rem;
          width: 8rem;
          background-color: ${colors.secondary};
          color: ${colors.text};
          text-align: center; 
          font-family: ${fonts.secondary};
          flex-direction: column;
          height: fit-content;
        }

        p {
          padding: 1rem;
          cursor: pointer;
          user-select: none;
        }

        .option:hover {
          background-color: ${colors.hover}
        }
      `}</style>
      </>
  )
}
