interface GameSideMenuProps {
    title: string
}

export const GameSideMenu = ({props} : { props: GameSideMenuProps }) => {
    const {
        title
    } = props

    return (
        <>
            <div>
                <span>{title}</span>
            </div>
        </>
    )
}