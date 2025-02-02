import Link from 'next/link'


const LinkComponent = ({ link, name }) => {
    return (
        <Link href={link}>
            <div className="text-sm w-full p-3 flex justify-center items-center bg-other text-primary ring-1 rounded-lg font-bold sm:text-xl tracking-wider capitalize">
                <div>{name}</div>
            </div>
        </Link>
    )
}

export default LinkComponent