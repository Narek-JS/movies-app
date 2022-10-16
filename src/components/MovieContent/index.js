import { DescriptionUI, HeadingUI } from '../ui';
import FeaturedTitleImage from '../../assets/images/FeaturedTitleImage.png';
import classes from './style.module.css';

const MovieContent = (props) => {
    const { category, title, description, mpaRating, releaseYear } = props;

    const headingTitle = title === 'The Irishman' ? <img src={FeaturedTitleImage} alt={`image-${title}`} /> : title;

    return (
        <div className={classes['movie-contnet']}>
            <span className={classes.category}> {category} </span>
            <HeadingUI size={'lg'}> {headingTitle} </HeadingUI>
            <DescriptionUI description={description} rating={mpaRating} year={releaseYear} size={'lg'} />
        </div>
    );
};

export { MovieContent };