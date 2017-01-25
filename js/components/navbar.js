var React = require('react');

var Navbar = function(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="navbar__left">
                    <a href="#" onClick={props.onInfoClicked}>
                        WHAT ?
                    </a>
                </li>
                <li>
                    <a href="#" onClick={props.onNewGameClicked}>
                        + NEW GAME
                    </a>
                </li>
            </ul>
        </nav>
    );
};

module.exports = Navbar;
