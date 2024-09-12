import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit: "contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{zIndex: "10"}}>
                        <form className='d-flex'>
                            <input className="form-control me-2" type="search" placeholder='Search' aria-label='Search' />
                            <button className='btn btn-outline-success text-white bg-success' type='submit'>Search</button>
                        </form>

                    </div>
                    <div className="carousel-item active">
                        <img src="https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=2048x2048&w=is&k=20&c=E9VM2Sy_lOK4EECz9jPhoKxIoz7f0sY5TJS5hJKIn6Y=" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.jpg?s=2048x2048&w=is&k=20&c=_AdAtGBXgtZjfJQVbDYS6Eku8m3h05p2E2p0V1uKlUo=" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=2048x2048&w=is&k=20&c=5qfqYi5DEhhVjJ-DIYB4MxUq31EmkvyEnNgNLm5LVpY=" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="3"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=2048x2048&w=is&k=20&c=8TokrDFU7l0NCqcEng6hHp6EqYn1dcwyH7uc9tbIN3U=" className='d-block w-100' style={{filter: "brightness(30%)"}} alt='4'/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
