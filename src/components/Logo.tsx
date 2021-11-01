import { ReactComponent as SVG } from "../images/xqst-gfx.svg";

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export const Logo = (props: LogoProps) => <SVG {...props} />;
