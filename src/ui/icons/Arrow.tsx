export const ArrowIcon = () => (
  <svg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.54384 4.68549C4.15476 4.94947 3.62088 4.90908 3.27611 4.56431L0.447678 1.73588C0.0571541 1.34536 0.0571541 0.712191 0.447678 0.321667C0.838203 -0.0688573 1.47137 -0.0688573 1.86189 0.321667L3.98322 2.44299L6.10456 0.321641C6.49509 -0.0688834 7.12825 -0.0688836 7.51878 0.321641C7.9093 0.712165 7.9093 1.34533 7.51878 1.73585L4.69035 4.56428C4.68546 4.56917 4.68054 4.574 4.67557 4.57876C4.63407 4.61862 4.58997 4.65419 4.54384 4.68549Z'
      fill='#8C8C8C'
    />
  </svg>
)

export const SwapArrowIcon: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <span onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'auto' }}>
    <svg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.99306 0.595215H5.99306V13.8259L7.88066 11.9383L9.29487 13.3525L6.43665 16.2107L6.44116 16.2152L5.02694 17.6294L0.75 13.3525L2.16421 11.9383L3.99306 13.7671V0.595215Z'
        fill='currentColor'
      />
    </svg>
  </span>
)
