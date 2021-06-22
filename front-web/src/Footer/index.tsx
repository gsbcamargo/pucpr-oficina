import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';


function Footer() {
    return (
        <footer className="main-footer">
            Aplicativo desenvolvido com ❤️ por Gabriel Schreiner
            <div className="filter-icons"><br/>
                <a href="https://www.youtube.com/watch?v=G1IbRujko-A" target="_new">
                    <YoutubeIcon /><span> </span>
                </a>
                <a href="https://www.youtube.com/watch?v=G1IbRujko-A" target="_new">
                    <LinkedinIcon /><span> </span>
                </a>
                <a href="https://www.youtube.com/watch?v=G1IbRujko-A" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}


export default Footer;