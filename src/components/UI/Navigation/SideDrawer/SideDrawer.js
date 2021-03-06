import React from 'react';
import Logo from '../../Logo/Logo'
import classes from './SideDrawer.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../Backdrop/Backdrop'
import Aux from '../../../../hoc/Aux'
const SideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}

export default SideDrawer;

