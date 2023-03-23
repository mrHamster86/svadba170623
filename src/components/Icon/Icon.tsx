import { ReactSVG } from "react-svg";
import { icons } from './constant';

type IconProps = {
    icon: keyof typeof icons;
    mix?: string;
}

export function Icon({ icon, mix }: IconProps) {
    return (
        <ReactSVG src={icons[icon]} className={mix} />
    );
}
