interface GameSideMenuProps {
    title: string
}

export const GameSideMenu = ({props} : { props: GameSideMenuProps }) => {
    const {
        title
    } = props

    return (
        <>
            <div className={'GameSideMenu'}>
                <span>{title}</span>
            </div>
        </>
    )
}