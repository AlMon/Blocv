import React from "react";

import Twitter from '../../components/icons/Twitter';
import Github from '../../components/icons/Github';

export default () => {
    return (
        <footer className="Footer">
            <nav className="copyright">
                <p>
                    Mondragon.pro | Copyright &copy; 2018
                </p>
            </nav>
            <nav className="Navigation social">
                <ul>
                    <li>
                        <a href="http://twitter.com/albrtk" className="icon twitter" title="Twitter">
                            <Twitter />
                        </a>
                    </li>
                    <li>
                        <a href="http://github.com/almon" className="icon github" title="Github">
                            <Github />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};