import headerLogo from "../../images/main-logo.png";

export default function Home() {
    return (
        <header className="background header">
            <img className="header--logo" src={headerLogo} alt="" />
        </header>
    );
}
