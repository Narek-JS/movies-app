import classes from './style.module.css';

const HeadingUI = (props) => {
    const { text, children, size } = props;

    return (
        <h1 className={`${classes['heading-title']} ${size ? classes[`heading-title-${size}`] : ''}`}>
            {children || text}
        </h1>
    )
};

export { HeadingUI };