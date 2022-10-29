import { FC, ReactNode } from 'react'

interface CloudComponentProps {
  children?: ReactNode
}

const CloudComponent: FC<CloudComponentProps> = ({ children }) => (
  <svg
    className="md:px-2 lg:px-3 cursor-pointer fill-store-abutton-blue lg:text-lg md:text-lg font-medium hover:fill-store-a-red uppercase"
    width="193"
    height="110"
    viewBox="0 0 193 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M77.6421 8.93164C63.4485 8.93164 49.3411 14.7761 39.3047 24.8125C32.9814 31.1358 28.3269 39.0746 25.7456 47.6325C19.5412 48.8037 13.6816 51.8319 9.21365 56.2997C3.3901 62.1233 0 70.306 0 78.5418C0 86.7776 3.3901 94.963 9.21365 100.787C15.0373 106.61 23.2226 110 31.4584 110H172.352C177.609 110 182.835 107.837 186.552 104.12C190.269 100.403 192.432 95.1773 192.432 89.9204C192.432 84.6634 190.269 79.4406 186.552 75.7234C182.857 72.0289 177.673 69.8723 172.449 69.8457C171.429 60.3212 167.114 51.1535 160.335 44.3747C152.529 36.5687 141.558 32.0235 130.519 32.0235C127.839 32.0235 125.165 32.2983 122.537 32.8157C120.614 29.9461 118.424 27.2569 115.979 24.8125C105.943 14.7761 91.8357 8.93164 77.6421 8.93164V8.93164Z"
      // fill="#B2DBEC"
    />
    <path
      d="M25.8383 39.1922L26.1366 39.1359L26.2243 38.8452C28.7827 30.3633 33.3955 22.4972 39.6583 16.2344C49.6009 6.29174 63.5811 0.5 77.6421 0.5C91.7031 0.5 105.683 6.29174 115.626 16.2344C118.046 18.6547 120.216 21.3186 122.121 24.1624L122.307 24.4389L122.633 24.3746C125.231 23.8632 127.873 23.5918 130.519 23.5918C141.426 23.5918 152.27 28.0844 159.982 35.7967C166.678 42.4931 170.944 51.5541 171.952 60.9673L171.999 61.4118L172.446 61.4141C177.539 61.4399 182.597 63.5443 186.198 67.1453C189.822 70.7687 191.932 75.8644 191.932 80.9887C191.932 86.1131 189.822 91.2117 186.198 94.835C182.575 98.4582 177.476 100.569 172.352 100.569H31.4584C23.3552 100.569 15.297 97.2311 9.5672 91.5013C3.83744 85.7716 0.5 77.7134 0.5 69.6101C0.5 61.507 3.8374 53.4515 9.5672 47.7217C13.9618 43.3272 19.7296 40.3453 25.8383 39.1922Z"
      fill="#E3F7FF"
      stroke="#E3F7FF"
    />
    <foreignObject x="10%" y="25%" width="150" height="80">
      {children}
    </foreignObject>
  </svg>
)
export default CloudComponent