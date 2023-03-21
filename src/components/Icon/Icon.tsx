import { ReactSVG } from "react-svg";
import { icons } from './constant';

type IconProps = {
    icon: keyof typeof icons;
}

export function Icon({ icon }: IconProps) {
    return (
        <ReactSVG src={icons[icon]}/>
    );
}
