import { MENU_LINKS } from '../../../constants/menuLinks';
import classes from './styles/closedStyles.module.css';

const ClosedMenu = () => {

    return (
        <nav className={classes['closed-nav-menu']}>
            <ul className={classes['active-menu-lists']}>
                { MENU_LINKS.map((item) => (
                    <li key={item.id}>
                        <a href='/'>
                            <img src={item.icon} alt={`image-${item.lable}`} />
                        </a>
                    </li>
                  ))
                }
            </ul>
        </nav>
    );
};


export { ClosedMenu };