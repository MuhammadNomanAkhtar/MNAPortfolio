export const ReadMoreLess = ({children,onReadMoreClick, maxLines = 3}) => {
    return (
        <div className={`line-clamp-[${maxLines}]`}>

        </div>
    )
}
