import { colors } from 'constants/default'

export default function Spinner () {
  return (
    <div className="spinner">
      <style jsx>{`
        .spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .spinner::after {
          content: '';
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 4px solid ${colors.react};
          border-top-color: ${colors.text};
          border-radius: 50%;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
