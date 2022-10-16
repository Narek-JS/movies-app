import classes from './style.module.css';

const ButtonUI = (props) => {
    const { children, handleclick, color, text, type, name, size, disabled=false } = props;

    return (
        <button
            className={`${classes['button-ui']} ${color ? classes[`btn-${color}`]: ''} ${size ? classes[`btn-${size}`] : ''}`}
            {...(handleclick && {onClick: handleclick})}
            type={type}
            name={name}
            disabled={disabled}
        >
            {children || text}
        </button>
    );
};

export { ButtonUI };