import classes from './style.module.css';

const DescriptionUI = (props) => {
    const { description, rating, year, size, children } = props;

    return (
        <p className={`${classes['description-text']} ${size ? classes[`description-text-${size}`] : ''}`}>
            {children || 
                <p>
                    <span>{year} {rating}</span> 
                    <span>{description}</span>
                </p>
            }
        </p>
    );
};

export { DescriptionUI }