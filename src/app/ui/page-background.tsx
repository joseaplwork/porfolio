export default function PageBackground() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed top-0 left-0 z-[-1] dark:hidden"
      >
        <g filter="url(#filter_light)">
          <path
            d="M1335 1015.76C1335 1220.57 495.574 1251 278.073 1251C60.5723 1251 -153 956.561 -153 751.751C-153 546.941 235.13 422 452.631 422C670.131 422 1335 810.947 1335 1015.76Z"
            fill="#BCB9B9"
          />
          <path
            d="M2263.5 1069C2263.5 1291.14 1424.53 1378.75 1160.83 1378.75C897.143 1378.75 579.5 473.877 579.5 251.733C579.5 29.589 1036.93 -143.252 1300.62 -143.252C1564.31 -143.252 2263.5 846.856 2263.5 1069Z"
            fill="#D19843"
          />
          <path
            d="M1691 141C1691 391.737 1459.98 595 1175 595C890.021 595 659 391.737 659 141C659 -109.737 890.021 -313 1175 -313C1459.98 -313 1691 -109.737 1691 141Z"
            fill="#2EBAA1"
          />
          <path
            d="M27.1153 795.293C-204.489 845.253 -432.918 229.419 -476.007 29.6677C-519.095 -170.083 372.409 -614.208 604.014 -664.168C835.619 -714.128 1090.57 -406.489 1133.66 -206.738C1176.75 -6.98744 258.72 745.333 27.1153 795.293Z"
            fill="#79CDDF"
          />
        </g>
        <defs>
          <filter
            id="filter_light"
            x="-777.517"
            y="-969.574"
            width="3341.02"
            height="2648.32"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_12_29"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed top-0 left-0 z-[-1] hidden dark:block"
      >
        <g filter="url(#filter_dark)">
          <path
            d="M1335 1015.76C1335 1220.57 495.574 1251 278.073 1251C60.5723 1251 -153 956.561 -153 751.751C-153 546.941 235.13 422 452.631 422C670.132 422 1335 810.947 1335 1015.76Z"
            fill="#666666"
          />
          <path
            d="M2263.5 1069C2263.5 1291.14 1424.53 1378.75 1160.83 1378.75C897.143 1378.75 579.5 473.877 579.5 251.733C579.5 29.589 1036.93 -143.252 1300.62 -143.252C1564.31 -143.252 2263.5 846.856 2263.5 1069Z"
            fill="#755627"
          />
          <path
            d="M1691 141C1691 391.737 1459.98 595 1175 595C890.021 595 659 391.737 659 141C659 -109.737 890.021 -313 1175 -313C1459.98 -313 1691 -109.737 1691 141Z"
            fill="#1B6356"
          />
          <path
            d="M27.1154 795.293C-204.489 845.253 -432.918 229.419 -476.007 29.6677C-519.095 -170.083 372.409 -614.208 604.014 -664.168C835.619 -714.128 1090.57 -406.489 1133.66 -206.738C1176.75 -6.98744 258.72 745.333 27.1154 795.293Z"
            fill="#175867"
          />
        </g>
        <defs>
          <filter
            id="filter_dark"
            x="-777.517"
            y="-969.574"
            width="3341.02"
            height="2648.32"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_1_21"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
