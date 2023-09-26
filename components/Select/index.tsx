import { fonts, colors } from 'constants/default'
import React, { useState } from 'react'
interface Props {
  sortBy: (val: number)=> void,
  selected: number
  valuesByLang: string[]
}

export default function Select ({ sortBy, selected, valuesByLang }: Props) {
  const [isActive, setActive] = useState(false)

  const handleSelect = (index: number) => {
    sortBy(index)
  }

  return (
    <>
      <span className='holder' onClick={() => setActive(!isActive)}>
        <b>{valuesByLang[selected]}</b>
        {
          isActive
            ? valuesByLang.map((value: string, i) => {
              if (value === valuesByLang[selected]) return ''
              return <p key={value} className='option' onClick={()=> handleSelect(i)}>{value}</p>
            })
            : ''
        }
      </span>

      <style jsx>{`
       .holder {
          width: 8rem;
          font-size: 18px;
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
          padding: 1.2rem;
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
