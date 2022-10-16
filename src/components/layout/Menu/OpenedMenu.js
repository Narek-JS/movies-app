import { MENU_LINKS } from '../../../constants/menuLinks';
import classes from './styles/openedStyle.module.css';

const OpenedMenu = () => {

    return (
        <nav className={classes['opened-nav-menu']}>
            <ul className={classes['active-menu-lists']}>
                { MENU_LINKS.map((item) => (
                    <li key={item.id}>
                        <a href='/'>
                            <img src={item.icon} alt={`image-${item.lable}`} />
                            <span>{item.lable}</span>
                        </a>
                    </li>
                  ))
                }
            </ul>
        </nav>
    );
};


export { OpenedMenu };