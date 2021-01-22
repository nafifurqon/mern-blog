import React from 'react';
import { IcFacebook, IcGithub, IcInstagram, IcLinkedin, IcTelegram, Logo } from '../../../assets';
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={IcFacebook} />
                    <Icon img={IcLinkedin} />
                    <Icon img={IcInstagram} />
                    <Icon img={IcTelegram} />
                    <Icon img={IcGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
