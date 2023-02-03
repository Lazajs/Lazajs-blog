import useI18n from 'hooks/useI18n'

export default function NotAvaible () {
  const text = useI18n('notavaible')

  return (
    <>
      <p>{text.text}</p>
      <style jsx>{`
        p {
          color: white;
          display: inline-block;
          padding: .2rem;
          position: absolute;
          top: 7rem;
          left: 50%;
          font-size: 1.5rem;
          transform: translateX(-20%);
          opacity: .5;
        }
      `}</style>
    </>
  )
}
