import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";


interface ILogo {
    src: string | StaticImport,
    alt: string,
    width?: number | `${number}` | undefined,
    height?: number | `${number}` | undefined,
    fill?: boolean,
    size?: string,
    quality?: number,
    priority?: boolean,
    placeholder?: string,
    onLoad?: () => void,
    onError?: () => void,
    loading?: string,
    blurDataURL?: string
}

const Logo = (props: ILogo) => <Image src={props.src} alt={props.alt} height={props.height} width={props.width} priority />

export default Logo