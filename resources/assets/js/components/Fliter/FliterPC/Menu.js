import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
import MenuItem from './MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

function Menu(props) {
    const [open, setOpen] = useState(false);
    const buttonColor = props.isSelect ? 'rgb(229,68,109)' : 'white';
    const buttonBackground = props.isSelect ? 'white' : 'transparent';

    const onClickHandle = (value) => {
        setOpen(!open);
        //props.onClick(value, 'department');
    };

    return (
        <div style={{ position: 'relative', top: '0%', width: '100%' }}>
            <Button
                type="button"
                style={{
                    fontWeight: '300',
                    textAlign: 'right',
                    color: buttonColor,
                    backgroundColor: buttonBackground,
                    borderRadius: '0px',
                    width: '70%',
                    paddingLeft: '0%',
                    outline: 'none',
                    height: '34px',
                    padding: '0px 0px',
                }}
                variant="light"
                onClick={onClickHandle.bind(this, props.title)}
                value={props.title}
            >
                {props.title}
            </Button>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls={props.id}
                aria-expanded={open}
                style={{
                    color: buttonColor,
                    backgroundColor: buttonBackground,
                    position: 'relative',
                    left: '0',
                    borderRadius: '0px',
                    width: '30%',
                    outline: 'none',
                    fontSize: '10px',
                    height: '34px',
                    padding: '0px 0px',
                }}
                variant="light"
            >
                {open ? ' ▲' : ' ▼'}
            </Button>
            <Collapse in={open}>
                <div style={{ width: '100%' }} id={props.id}>
                    {props.children}
                </div>
            </Collapse>
        </div>
    );
}

export default Menu;
