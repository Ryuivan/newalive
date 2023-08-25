import React from "react";
import '../index.css';

const WavePage = () => {
    return (
        <div className="wave">
            <div id="wave1">
                <svg viewBox="0 0 1400 312" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_15_774)">
                        <path d="M299.5 6.27983C142.7 -18.9202 34.5 37.7798 0 69.2798V311.78H1516V246.28C1498.5 221.78 1443.7 172.38 1364.5 170.78C1265.5 168.78 1199.06 250.327 1116 239.78C1068.01 233.686 1008.5 205.78 966 172.28C914 131.292 870 120.28 837.5 120.28C769.882 120.28 676 182.78 623.5 196.28C427.5 211.28 495.5 37.7798 299.5 6.27983Z" fill="#9D1317"/>
                        <path d="M299.5 6.27983C142.7 -18.9202 34.5 37.7798 0 69.2798V311.78H1516V246.28C1498.5 221.78 1443.7 172.38 1364.5 170.78C1265.5 168.78 1199.06 250.327 1116 239.78C1068.01 233.686 1008.5 205.78 966 172.28C914 131.292 870 120.28 837.5 120.28C769.882 120.28 676 182.78 623.5 196.28C427.5 211.28 495.5 37.7798 299.5 6.27983Z" fill="black" fill-opacity="0.2"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_15_774" x="0" y="0" width="1516" height="315.78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_15_774"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div id="wave2">
                <svg viewBox="0 0 1400 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g  filter="url(#filter0_i_15_775)">
                        <path d="M162.5 4.5C54.5 -12.857 29 31.0001 -15 75.2799V317.78H1501V252.28C1483.5 227.78 1449.7 128.6 1370.5 127C1271.5 125 1179 215.5 1119 215.5C1070.63 215.5 990.5 160.5 957.5 139.5C905.244 106.246 845.5 103.5 784 139.5C753.287 157.478 667 229 590 195.5C503 134.5 449.5 99.22 353 144C259 160 240.5 17.0356 162.5 4.5Z" fill="#A21418"/>
                        <path d="M162.5 4.5C54.5 -12.857 29 31.0001 -15 75.2799V317.78H1501V252.28C1483.5 227.78 1449.7 128.6 1370.5 127C1271.5 125 1179 215.5 1119 215.5C1070.63 215.5 990.5 160.5 957.5 139.5C905.244 106.246 845.5 103.5 784 139.5C753.287 157.478 667 229 590 195.5C503 134.5 449.5 99.22 353 144C259 160 240.5 17.0356 162.5 4.5Z" fill="black" fillOpacity="0.2"/>
                        <path d="M162.5 4.5C54.5 -12.857 29 31.0001 -15 75.2799V317.78H1501V252.28C1483.5 227.78 1449.7 128.6 1370.5 127C1271.5 125 1179 215.5 1119 215.5C1070.63 215.5 990.5 160.5 957.5 139.5C905.244 106.246 845.5 103.5 784 139.5C753.287 157.478 667 229 590 195.5C503 134.5 449.5 99.22 353 144C259 160 240.5 17.0356 162.5 4.5Z" fill="black" fillOpacity="0.2"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_15_775" x="-15" y="0.614258" width="1516" height="321.166" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_15_775"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default WavePage;


