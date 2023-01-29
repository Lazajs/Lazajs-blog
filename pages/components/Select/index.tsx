import { fonts, colors } from 'constants/default'
import React, { Dispatch, SetStateAction, useState } from 'react'

type Props = {
  values: string[]
  setState: Dispatch<SetStateAction<string>>,
}

export default function Select ({ values, setState }: Props) {
  const [isActive, setActive] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleSelect = (e: React.SyntheticEvent) => {
    const el = e.target as HTMLParagraphElement
    const text = el.textContent
    setState(text!)
    setSelectedIndex(values.indexOf(text!))
  }

  return (
    <>
      <span className='holder' onClick={() => setActive(!isActive)}>
        <b>{values[selectedIndex]}</b>
        {
          isActive
            ? values.map((value: string) => {
              if (value === values[selectedIndex]) return ''
              return <p key={value} className='option' onClick={handleSelect}>{value}</p>
            })
            : ''
        }
      </span>

      <style jsx>{`
       .holder {
          width: 8rem;
          background-color: ${colors.secondary};
          color: ${colors.text};
          text-align: center; 
          font-family: ${fonts.primary};
          flex-direction: column;
          height: fit-content;
          z-index: 10;
          border: .5px solid ${colors.border};
        }
     
        .holder:first-child {
          margin-right: 1rem;
        }

        p, b {
          display: block;
          font-weight: 500;
          font-size: 1.5rem;
          padding: 1rem;
          cursor: pointer;
          user-select: none;
        }

        .option:hover {
          background-color: ${colors.hover};
        }
      `}</style>
      </>
  )
}
