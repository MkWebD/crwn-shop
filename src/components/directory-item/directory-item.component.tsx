import {FC} from 'react'
import {BackgroundImage, Body, DirectoryImageContainer} from "./directory-item.styles"
import {useNavigate} from 'react-router-dom'

import {DirectoryCategory} from "../directory/directory.component";

type DirectoryItemProps = {
    category: DirectoryCategory
}

const DirectoryItem: FC<DirectoryItemProps> = ({category}) => {
    const {imageUrl, title, route} = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryImageContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryImageContainer>
    )
}

export default DirectoryItem