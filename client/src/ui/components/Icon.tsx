import * as icons from 'lucide-react'

type Props = {
    name: string
    paddings?: boolean
    size?: string
}

export default ({ name, size = "14", paddings = true }: Props) => {
    const Icons: any = icons
    const LucideIcon = Icons[name]

    return (
        <span style={{padding: paddings ? '0 10px' : '0px', display: 'inline-flex', alignItems: 'center'}}>
            <LucideIcon size={size}/>
        </span>
    )
}