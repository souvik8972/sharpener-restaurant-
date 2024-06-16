
import classes from "./Header.module.css"
import HeaderCart from "./HeaderCart"

const Header = () => {
    return (
        <div>
            <header className={classes.header}>
                <h1> PracMeal</h1>
                <HeaderCart/>
                
            </header>
            <div className={classes["main-image"]}>
            <div className={classes.description}>
                <h1>Super Delicious Menu</h1>
                <p>Ready to taste the best food in town?</p>
                
            </div>
                <img src="https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431768.jpg?t=st=1718539256~exp=1718542856~hmac=afed6a925c5354ce140c335766ecf54d1920e4c1367a976b16422e95a5244e37&w=1380" />
            </div>

        </div>
    )
}

export default Header
