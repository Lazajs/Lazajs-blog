export default function Other (props: {}) {
  return (
<svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.958 4.25h.084c1.369 0 2.454 0 3.32.088.888.09 1.629.28 2.277.713.519.346.964.791 1.31 1.31.434.648.623 1.39.713 2.277.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32-.09.888-.28 1.629-.712 2.277a4.753 4.753 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088-.888-.09-1.629-.28-2.277-.712a4.751 4.751 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32.09-.888.28-1.629.713-2.277a4.75 4.75 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713.866-.088 1.951-.088 3.32-.088Zm-.812 3.896C11 8.293 11 8.53 11 9s0 .707.146.854c.147.146.383.146.854.146s.707 0 .854-.146C13 9.707 13 9.47 13 9s0-.707-.146-.854C12.707 8 12.47 8 12 8s-.707 0-.854.146Zm0 3C11 11.293 11 11.53 11 12v3c0 .471 0 .707.146.854.147.146.383.146.854.146s.707 0 .854-.146C13 15.707 13 15.47 13 15v-3c0-.471 0-.707-.146-.854C12.707 11 12.47 11 12 11s-.707 0-.854.146Z"
      fill="#000"
    />

    <style jsx>{`
      svg {
        transform: scale(3.2);
        margin: .8rem;
        margin-left: .7rem;
      }
    `}</style>
  </svg>
  )
}
