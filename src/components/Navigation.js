import { useState } from 'react';
import './Navigation.scss';

export const Navigation = ({items, onMenu}) => {
    const [isOpen, setOpen] = useState(false);

    const onChange = (e) => {
        setOpen(e.target.checked);
    }

    const onClick = (key) => {
        setOpen(false);
        onMenu(key);
    }

    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={isOpen} onChange={onChange} />

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        {items.map( item => (
                            <button key={item.key} className="navigation__link" onClick={() => onClick(item.key)}>{item.label}</button>
                        ))}                        
                    </li>
                </ul>
            </nav>
        </div>
    )
}
