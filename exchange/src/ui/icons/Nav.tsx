interface Props {
  filled?: boolean
}

export const HotNavIcon: React.FC<Props> = ({ filled }) =>
  filled ? (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
      <path d='M102.4,50.2C102.4,50.2,102.4,50.2,102.4,50.2L85.1,27.5c-3.5-4.5-3.5-10.9-0.1-15.5l0.8-1.1c1.4-2,1.6-4.6,0.3-6.6C84.8,2,82.4,0.9,80,1.3c-12.1,1.9-21.2,12-21.9,24.1c0,0.2-0.1,0.4-0.1,0.6v18c0,1.4-0.6,2.7-1.6,3.6c-1,1-2.4,1.4-3.8,1.3C50,48.8,48,46.5,48,43.7v-5.4c0-2.6-1.6-4.9-4.1-5.7c-2.5-0.8-5.1,0-6.7,2.1L25.6,50.2c-6.7,8.9-10.1,20.1-9.5,31.3c1.3,24.6,21.5,44.5,46.1,45.5c0.6,0,1.3,0,1.9,0c12.5,0,24.2-4.7,33.3-13.4c9.5-9.1,14.7-21.4,14.7-34.6C112,68.5,108.7,58.6,102.4,50.2z'></path>
      <path
        fill='#ffffff'
        d='M51 80c-5 0-9-4-9-9s4-9 9-9 9 4 9 9S56 80 51 80zM51 68c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S52.7 68 51 68zM77 106c-5 0-9-4-9-9s4-9 9-9 9 4 9 9S82 106 77 106zM77 94c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S78.7 94 77 94zM57 94.9c-.7 0-1.4-.2-2-.8-1.2-1.1-1.4-3-.3-4.2l22-24.9c1.1-1.2 3-1.4 4.2-.3 1.2 1.1 1.4 3 .3 4.2l-22 24.9C58.7 94.6 57.8 94.9 57 94.9zM49 98A3 3 0 1 0 49 104 3 3 0 1 0 49 98z'
      ></path>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
      <path d='M 84 1 C 70.2 1 58.899609 11.700391 58.099609 25.400391 C 58.099609 25.600391 58 25.8 58 26 L 58 42 C 58 43.7 59.3 45 61 45 C 62.7 45 64 43.7 64 42 L 64 26.400391 L 64 26.099609 C 64.5 15.699609 72.799609 7.5 83.099609 7 L 79.300781 21.5 C 78.300781 25.4 79.1 29.399609 81.5 32.599609 L 97.599609 53.699219 C 103.09961 60.999219 106 69.700391 106 78.900391 C 106 89.700391 101.90039 100.00078 94.400391 107.80078 C 86.400391 116.20078 75.6 120.90039 64 120.90039 C 52.4 120.90039 41.599609 116.30078 33.599609 107.80078 C 26.099609 100.10078 22 89.8 22 79 C 22 72.8 23.300391 66.800781 25.900391 61.300781 C 26.600391 59.800781 26 58.000781 24.5 57.300781 C 23 56.600781 21.2 57.199219 20.5 58.699219 C 17.5 65.099219 16 71.9 16 79 C 16 91.4 20.699219 103.09961 29.199219 112.09961 C 38.399219 121.69961 50.7 127 64 127 C 77.3 127 89.600781 121.69961 98.800781 112.09961 C 107.30078 103.09961 112 91.4 112 79 C 112 68.5 108.70039 58.599219 102.40039 50.199219 L 86.300781 29 C 85.000781 27.3 84.599609 25.1 85.099609 23 L 89.099609 7.5996094 C 89.499609 5.9996094 89.199219 4.3 88.199219 3 C 87.199219 1.7 85.7 1 84 1 z M 39.763672 33.507812 C 38.801758 33.46582 37.824219 33.886719 37.199219 34.699219 L 31.5 42.300781 C 30.5 43.600781 30.799609 45.5 32.099609 46.5 C 32.599609 46.9 33.300391 47.099609 33.900391 47.099609 C 34.800391 47.099609 35.700781 46.700391 36.300781 45.900391 L 42 38.300781 C 43 37.000781 42.700391 35.099609 41.400391 34.099609 C 40.912891 33.724609 40.34082 33.533008 39.763672 33.507812 z M 49 56 C 43.5 56 39 60.5 39 66 C 39 71.5 43.5 76 49 76 C 54.5 76 59 71.5 59 66 C 59 60.5 54.5 56 49 56 z M 81.363281 56.837891 C 80.600781 56.875391 79.850781 57.200781 79.300781 57.800781 L 44.300781 96.099609 C 43.200781 97.299609 43.3 99.200781 44.5 100.30078 C 45.1 100.80078 45.8 101.09961 46.5 101.09961 C 47.3 101.09961 48.099219 100.79961 48.699219 100.09961 L 83.699219 61.800781 C 84.799219 60.600781 84.7 58.699609 83.5 57.599609 C 82.9 57.049609 82.125781 56.800391 81.363281 56.837891 z M 49 62 C 51.2 62 53 63.8 53 66 C 53 68.2 51.2 70 49 70 C 46.8 70 45 68.2 45 66 C 45 63.8 46.8 62 49 62 z M 79 82 C 73.5 82 69 86.5 69 92 C 69 97.5 73.5 102 79 102 C 84.5 102 89 97.5 89 92 C 89 86.5 84.5 82 79 82 z M 79 88 C 81.2 88 83 89.8 83 92 C 83 94.2 81.2 96 79 96 C 76.8 96 75 94.2 75 92 C 75 89.8 76.8 88 79 88 z'></path>
    </svg>
  )

export const SettingsNavIcon: React.FC<Props> = ({ filled }) =>
  filled ? (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <path d='M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z'></path>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <path d='M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z'></path>
    </svg>
  )

export const ActivityNavIcon: React.FC<Props> = ({ filled }) =>
  filled ? (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <path d='M 45 4 L 5 4 C 3.347656 4 2 5.347656 2 7 L 2 43 C 2 44.652344 3.347656 46 5 46 L 45 46 C 46.652344 46 48 44.652344 48 43 L 48 7 C 48 5.347656 46.652344 4 45 4 Z M 39 36 L 11 36 C 10.449219 36 10 35.554688 10 35 C 10 34.445313 10.449219 34 11 34 L 39 34 C 39.554688 34 40 34.445313 40 35 C 40 35.554688 39.554688 36 39 36 Z M 39 26 L 11 26 C 10.449219 26 10 25.550781 10 25 C 10 24.449219 10.449219 24 11 24 L 39 24 C 39.554688 24 40 24.449219 40 25 C 40 25.550781 39.554688 26 39 26 Z M 39 16 L 11 16 C 10.449219 16 10 15.550781 10 15 C 10 14.449219 10.449219 14 11 14 L 39 14 C 39.554688 14 40 14.449219 40 15 C 40 15.550781 39.554688 16 39 16 Z'></path>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <path d='M 5 4 C 3.355469 4 2 5.355469 2 7 L 2 43 C 2 44.644531 3.355469 46 5 46 L 45 46 C 46.644531 46 48 44.644531 48 43 L 48 7 C 48 5.355469 46.644531 4 45 4 Z M 5 6 L 45 6 C 45.554688 6 46 6.445313 46 7 L 46 43 C 46 43.554688 45.554688 44 45 44 L 5 44 C 4.445313 44 4 43.554688 4 43 L 4 7 C 4 6.445313 4.445313 6 5 6 Z M 10.8125 14 C 10.261719 14.050781 9.855469 14.542969 9.90625 15.09375 C 9.957031 15.644531 10.449219 16.050781 11 16 L 39 16 C 39.359375 16.003906 39.695313 15.816406 39.878906 15.503906 C 40.058594 15.191406 40.058594 14.808594 39.878906 14.496094 C 39.695313 14.183594 39.359375 13.996094 39 14 L 11 14 C 10.96875 14 10.9375 14 10.90625 14 C 10.875 14 10.84375 14 10.8125 14 Z M 10.8125 24 C 10.261719 24.050781 9.855469 24.542969 9.90625 25.09375 C 9.957031 25.644531 10.449219 26.050781 11 26 L 39 26 C 39.359375 26.003906 39.695313 25.816406 39.878906 25.503906 C 40.058594 25.191406 40.058594 24.808594 39.878906 24.496094 C 39.695313 24.183594 39.359375 23.996094 39 24 L 11 24 C 10.96875 24 10.9375 24 10.90625 24 C 10.875 24 10.84375 24 10.8125 24 Z M 10.8125 34 C 10.261719 34.050781 9.855469 34.542969 9.90625 35.09375 C 9.957031 35.644531 10.449219 36.050781 11 36 L 39 36 C 39.359375 36.003906 39.695313 35.816406 39.878906 35.503906 C 40.058594 35.191406 40.058594 34.808594 39.878906 34.496094 C 39.695313 34.183594 39.359375 33.996094 39 34 L 11 34 C 10.96875 34 10.9375 34 10.90625 34 C 10.875 34 10.84375 34 10.8125 34 Z'></path>
    </svg>
  )

export const PortfolioNavIcon: React.FC<Props> = ({ filled }) =>
  filled ? (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <path d='M 48.898438 13.5 C 46.601563 7.800781 42.199219 3.398438 36.5 1.101563 C 36.199219 1 36 1 35.699219 1.101563 C 35.5 1.199219 35.300781 1.398438 35.199219 1.601563 L 34.199219 3.898438 C 31.699219 2.800781 29 2.199219 26.199219 2 C 26.101563 2 26.101563 2 26 2 C 26 2 25.898438 2 25.898438 2 C 25.601563 2 25.300781 2 25 2 C 12.300781 2 2 12.300781 2 25 C 2 25.300781 2 25.601563 2 25.898438 C 2 25.898438 2 26 2 26 C 2 26.101563 2 26.101563 2 26.101563 C 2.601563 38.300781 12.699219 48 25 48 C 31 48 36.398438 45.699219 40.5 41.898438 L 23.601563 25 L 4 25 C 4 13.398438 13.398438 4 25 4 L 25 23.601563 L 41.898438 40.5 C 45.699219 36.398438 48 31 48 25 C 48 21.800781 47.300781 18.699219 46.101563 15.800781 L 48.398438 14.800781 C 48.601563 14.699219 48.800781 14.5 48.898438 14.300781 C 49 14 49 13.800781 48.898438 13.5 Z M 44.300781 14.300781 C 44.300781 14.398438 44.300781 14.300781 44.300781 14.300781 C 44.300781 14.398438 44.300781 14.398438 44.300781 14.300781 L 29.5 20.398438 L 36.601563 3.300781 C 41 5.398438 44.601563 8.898438 46.601563 13.300781 Z'></path>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <path d='M 35.90625 1 C 35.566406 1.0625 35.28125 1.300781 35.15625 1.625 L 34.21875 3.9375 C 31.449219 2.726563 28.390625 2.027344 25.1875 2 C 25.054688 1.972656 24.914063 1.972656 24.78125 2 C 24.769531 2 24.761719 2 24.75 2 C 12.289063 2.132813 2.183594 12.207031 2 24.65625 C 1.925781 24.867188 1.925781 25.101563 2 25.3125 C 2.167969 37.859375 12.414063 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 21.726563 47.296875 18.601563 46.0625 15.78125 L 48.375 14.84375 C 48.625 14.746094 48.824219 14.550781 48.933594 14.304688 C 49.039063 14.058594 49.039063 13.78125 48.9375 13.53125 C 46.507813 7.667969 41.90625 3.316406 36.46875 1.0625 C 36.320313 1.003906 36.160156 0.984375 36 1 C 35.96875 1 35.9375 1 35.90625 1 Z M 36.59375 3.40625 C 40.875 5.421875 44.441406 8.835938 46.59375 13.40625 L 44.8125 14.15625 C 44.800781 14.15625 44.792969 14.15625 44.78125 14.15625 C 44.449219 14.117188 44.121094 14.246094 43.90625 14.5 C 43.90625 14.511719 43.90625 14.519531 43.90625 14.53125 L 29.53125 20.46875 L 35.5625 5.90625 C 35.574219 5.886719 35.585938 5.863281 35.59375 5.84375 C 35.648438 5.757813 35.691406 5.664063 35.71875 5.5625 C 35.746094 5.503906 35.765625 5.4375 35.78125 5.375 Z M 23.90625 4.03125 C 23.9375 4.03125 23.96875 4.03125 24 4.03125 L 24 24 L 4.03125 24 C 4.53125 13.210938 13.128906 4.578125 23.90625 4.03125 Z M 26 4.03125 C 28.640625 4.152344 31.140625 4.742188 33.4375 5.75 L 26.75 21.9375 C 26.589844 22.3125 26.671875 22.75 26.960938 23.039063 C 27.25 23.328125 27.6875 23.410156 28.0625 23.25 L 44.25 16.5625 C 45.378906 19.144531 46 22 46 25 C 46 30.4375 43.914063 35.367188 40.53125 39.09375 L 26 24.5625 Z M 4.03125 26 L 24.5625 26 L 39.09375 40.53125 C 35.367188 43.914063 30.4375 46 25 46 C 13.722656 46 4.546875 37.148438 4.03125 26 Z'></path>
    </svg>
  )
