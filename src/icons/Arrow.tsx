import { IconProps } from "../utils/types";


const Arrow: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg className={className} height={svgSize} width={svgSize} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="currentColor" fill-rule="evenodd" d="M5.29289,3.70711 C4.90237,3.31658 4.90237,2.68342 5.29289,2.29289 C5.68342,1.90237 6.31658,1.90237 6.70711,2.29289 L11.7071,7.29289 C12.0976,7.68342 12.0976,8.31658 11.7071,8.70711 L6.70711,13.7071 C6.31658,14.0976 5.68342,14.0976 5.29289,13.7071 C4.90237,13.3166 4.90237,12.6834 5.29289,12.2929 L9.58579,8 L5.29289,3.70711 Z"></path> </g></svg>
    );
};

export default Arrow;