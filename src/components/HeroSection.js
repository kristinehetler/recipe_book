import CustomImage from ".//CustomImage"

export default function HeroSection(){
    const images = [
        "/foods/burger.jpg",
        "/foods/chicken.avif ",
        "/foods/fish.jpg",
        "/foods/pork.webp",
        "/foods/shrimp.jpg",
        "/foods/squid.jpg",
        "/foods/tapa.jpg",
        "/foods/veges.jpg",
        "/foods/bellpepers.avif"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">Foodies is a place where you can please your soul, tummy and can satisfy your cravings with delicious food recipes of all Philippine cuisine. And our service is absolutely free. So start exloring now!.</p>
                <button className="btn">Explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>  
        </div>
    )
}