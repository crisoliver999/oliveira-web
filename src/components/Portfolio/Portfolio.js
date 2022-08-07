import portfolioImg from "../../images/portfolio.png";

export default function Portfolio() {
    return (
        <div className="background">
            <div className="portfolio">
                <div className="arrow arrow-left-grey"></div>
                <div className="portfolio--slideshow">
                    <h1 className="portfolio--title">portfolio</h1>
                    <img className="portfolio--img" src={portfolioImg} alt="" />
                </div>
                <div className="arrow arrow-right-grey"></div>
            </div>
        </div>
    );
}
