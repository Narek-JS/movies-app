import { useEffect,useRef, useState } from 'react';
import { ClosedMenu, OpenedMenu } from '../Menu';

import classes from './style.module.css';

const SideBar = () => {
    const [ open, setOpen ] = useState(false);
    const timeoutIdRef = useRef(null);
    const asideRef = useRef(null);

    useEffect(() => {
        if(asideRef.current) {
            asideRef.current.onmouseleave = () => {
                timeoutIdRef.current = setTimeout(() => {
                    setOpen(false);
                }, 500);
            };
            asideRef.current.onmouseenter = () => {
                if(timeoutIdRef.current !== null) {
                    clearTimeout(timeoutIdRef.current);
                };
                setOpen(true);
            }
        };
    }, []);

    return (
        <aside className={classes['side-bar']} ref={asideRef}>
            {open ? <OpenedMenu /> : <ClosedMenu />}
        </aside>
    );
};

export default SideBar;