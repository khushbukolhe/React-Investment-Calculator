import logoIC from '../assets/investment-calculator-logo.png'

const Header=()=>{
    return(

        <header id='header'>
            <img src={logoIC} alt='investment calculator logo'/>
            <h1>
                Welcome to the Investment Calculator
            </h1>
        </header>
    );
}

export default Header;