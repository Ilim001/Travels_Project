import React from "react"
import { Link } from "react-router-dom"
import card from '../../data.js'
import card2 from "../../data2.js"

import './Trp.css'

import icon1 from '../../assets/Mask Group.svg'
import icon2 from '../../assets/Group 28.svg'
import hotel from '../../assets/Group 34.svg'

// import thailand from '../../assets/Rectangle 33.svg'

import pay from '../../assets/Group 255.svg'
import reach from '../../assets/Group 256.svg'
import air from '../../assets/Vector-9.svg'
import star from '../../assets/Ellipse 43.svg'
import grade from '../../assets/Group 274.svg'
import sms from '../../assets/Group 55.svg' 
import phone from '../../assets/Vector-10.svg'
import map from '../../assets/Vector-11.svg'
// import { card1 } from "../../data"
// import footer from '../../assets/image 6.svg'


const Trp = () => {
    return (
        <div className='Section1'>
            <div className="container">
                <div className="section1-box">
                    <div className="section1-text">
                        <h1 className="section1-title1">Happiness Is <span>Travelling</span>.</h1>
                        <h4 className="section1-subtitle2">No matter where in the world you want to go, we can help get you there</h4>
                        <p className="section1-subtitle3">Travel Agency Threats and Opportunities. 
                        The Perspective of Successful OwnersJoin the leader in small-ship cruising on the Great Lakes, 
                        and enjoy fabulous inclusions such as a pre-voyage hotel.</p>

                    </div>
                        <img src={icon1} alt="" id="icon1"/>
                    </div>
                    {/* <div className="section1-nav">
                        <h4 className="section_title4">Location</h4>
                            <input type="text" placeholder="Where are you going?" className="text" autoFocus maxLength={10} />
                        <h4 className="section_title4">Check in</h4>

                            <input type="date" placeholder="Add dates" className="text" />
                        <h4 className="section_title4">Check out</h4>

                            <input type="date" placeholder="Add dates" className="text" />
                            <button className="btn">Search</button>
                    </div> */}
            </div>

            <div className="section2">
                <div className="container"> 
                    <div className="section2_box">
                        <div className="section2_img">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="section2_text">                   
                            <h1 className="section2_title2">We care for 100% customer satifiction</h1>
                            <p className="section2_subtitle4">There was consensus, not surprisingly, 
                            that quality traditional travel agencies provide value for money. 
                            However, this was accompanied by a high level of concern that many consumers</p>
                            <button className="section_btn">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section3">
                <div className="container">
                    <div className="section3_box">
                        <div className="section3_text">
                            <p className="section3_subtitle5">Best Services</p>
                            <h1 className="section3_title3">Our Services</h1>
                            <p className="section3_subtitle6_1">There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumers</p>
                        </div>
                        <div className="section3_category">
                            {card.map((card,index) => (
                                <div className="section3_card" key={index}>
                                <img src={card.img} alt="" />
                                <h2 className="section3_title4">{card.title}</h2>
                                <p className="section3_subtitle6">{card.desc}</p>
                            </div>
                            ))}
                            
                            {/* <div className="section3_card">
                                <img src={taxi} alt="" />
                                <h2 className="section3_title5">Book Taxi</h2>
                                <p className="section3_subtitle6">In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies </p>
                            </div> */}
                            {/* <div className="section3_card">
                                <img src={plane} alt="" />
                                <h2 className="section3_title5">Book Plane</h2>
                                <p className="section3_subtitle6">In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies </p>
                            </div>
                            <div className="section3_card">
                                <img src={tour} alt="" />
                                <h2 className="section3_title5">Book Tour</h2>
                                <p className="section3_subtitle6">In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies </p>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>

            <div className="section4">
                <div className="container">
                    <div className="section4_box">           
                        <div className="section4_text">
                            <h2 className="section4_title6">Best Value Trips</h2>
                            <p className="section4_subtitle7">There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumers</p>
                        </div>
                        <div className="section4_trips">
                            {card2.map((card, index) => (
                                <div className="section4_description" key={index}>
                                    <img src={card.img} alt="" />
                                    <h5 className="section4_title7">{card.title} <span>250$</span></h5>
                                    <p className="section4_subtitle8">{card.desc}</p>
                                    <Link to='/srv' className="Link"><button className="section4_btn">View Details</button></Link>
                                </div>
                            ))}

                            {/* <div className="section4_description">
                                <img src={thailand2} alt="" />
                                <h5 className="section4_title7">Trip to Thailand <span>250$</span></h5>
                                <p className="section4_subtitle8">Join the leader in smallship cruising on the Great Lakes,</p>
                                <Link to='/srv' className="Link"><button className="section4_btn">View Details</button></Link>

                            </div>
                            <div className="section4_description">
                                <img src={thailand3} alt="" />
                                <h5 className="section4_title7">Trip to Thailand <span>250$</span></h5>
                                <p className="section4_subtitle8">Join the leader in smallship cruising on the Great Lakes,</p>
                                <Link to='/srv' className="Link"><button className="section4_btn">View Details</button></Link> 

                            </div>
                            <div className="section4_description">
                                <img src={thailand4} alt="" />
                                <h5 className="section4_title7">Trip to Thailand <span>250$</span></h5>
                                <p className="section4_subtitle8">Join the leader in smallship cruising on the Great Lakes,</p>
                                <Link to='/srv' className="Link"><button className="section4_btn">View Details</button></Link>

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="section5">
                <div className="container"> 
                    <div className="section5_box">
                        <div className="section5_text">
                            <h7 className="section5_title10">Easy and Fast</h7>
                            <h1 className="section5_title8">Book Next Trip in 3 Easy Steps</h1>
                            <p className="section5_subtitle9">There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumers</p>
                    
                            <div className="section5_make">
                                <img src={pay} alt="" />
                                <h7 className="section5_title9">Make Payment</h7>
                                <p className="section5_subtitle10">There was consensus, not surprisingly, that quality traditional travel agencies provide value.</p>
                            </div>
                            <div className="section5_make">
                                <img src={reach} alt="" />
                                <h7 className="section5_title9">Reach Airport on Selected Date</h7>
                                <p className="section5_subtitle10">There was consensus, not surprisingly, that quality traditional travel agencies provide value.</p>
                            </div>
                        </div>
                        
                            <div className="section5_air">
                                <img src={air} alt="" />
                            </div>
                    </div>
                </div>
            </div>
            <div className="section6">
                <div className="container">
                    <div className="section6_box">
                        <div className="section6_text">
                            <p className="section6_subtitle24">Review & Testimonials</p>
                            <h1 className="section6_title20">Tourist Feedback</h1>
                            <p className="section6_subtitle20">There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumers</p>
                        </div>
                        <div className="section6_img">
                            <img src={star} alt="" />
                            
                        </div>
                        <div className="section6_reviews">
                            <img src={grade} alt="" />
                            <p className="section6_subtitle21">There was consensus, not surprisingly, that quality traditional travel agencies provide value for money. However, this was accompanied by a high level of concern that many consumersThere was consensus, not surprisingly, that quality traditional travel agencies</p>
                            <p className="section6_subtitle22">Skylar George</p>
                            <p className="section6_subtitle23">Managing Director, Lovgency</p>   
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="footer_box">
                        <div className="footer_icons">

                            <p className="footer_name">Travelix Pro</p>

                            <p>
                                <img src={sms} alt="" />
                                contact@example.com
                            </p>
                            <p>
                                <img src={phone} alt="" />
                                +777 777-777-777
                            </p>
                            <p>
                                <img src={map} alt="" />
                                View on Google map
                            </p>
                        </div>

                        <ul className="footer_menu">
                            <h3 className="footer_title">Company</h3>
                            <a href=""><li class="footer-item">Help Center</li></a>
                            <a href=""><li class="footer-item">About</li></a>
                            <a href=""><li class="footer-item">Press</li></a>
                            <a href=""><li class="footer-item">Blog</li></a>
                        </ul>
                        <ul className="footer_menu">
                            <h3 className="footer_title">Community</h3>
                            <a href=""><li class="footer-item">User Agreement</li></a>
                            <a href=""><li class="footer-item">Privacy Policy</li></a>
                            <a href=""><li class="footer-item">Community Guidelines</li></a>
                            <a href=""><li class="footer-item">Cookie Policy</li></a>
                        </ul>
                        <ul class="footer-menu">
                            <h3 class="footer-title">Resources</h3>
                            <a href=""><li class="footer-item">Dowloand app</li></a>
                            <a href=""><li class="footer-item">Blog</li></a>
                            <a href=""><li class="footer-item">Sitemap</li></a>
                        </ul>
                        <ul class="footer-menu">
                            <h3 class="footer-title">Supports</h3>
                            <a href=""><li class="footer-item">Help center</li></a>
                            <a href=""><li class="footer-item">Feedback</li></a>
                            <a href=""><li class="footer-item">Contactus</li></a>
                        </ul>
                    </div>    
                </div>      
            </footer>       
        </div>
        

        
    )
}

export default Trp