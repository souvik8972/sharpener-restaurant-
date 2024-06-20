/* eslint-disable react/prop-types */

import classes from "./Header.module.css"
import HeaderCart from "./HeaderCart"

const Header = ({ onShowcart }) => {
    return (
        <div>
            <header className={classes.header}>
                <h1> PracMeal</h1>
                <HeaderCart onShowcart={onShowcart}/>
                
            </header>
            <div className={classes["main-image"]}>
            <div className={classes.description}>
                <h1>Super Delicious Menu</h1>
                <p>Ready to taste the best food in town?</p>
                
            </div>
                <img src="https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431768.jpg?t=st=1718854567~exp=1718858167~hmac=d3f671c04ff018afe8d3837cbb57f661495a4842a6a76bc805017d904d3e7f65&w=1380" />
            </div>

        </div>
    )
}

export default Header
