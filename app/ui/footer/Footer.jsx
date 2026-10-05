import React from 'react'
import Link  from 'next/link'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h4>Mesob House</h4>
                    <p>Sharing traditions from the Ethiopian highlands — one Gursha at a time.</p>
                </div>

                <div className="footer-hours">
                    <h5>Hospitality Hours</h5>
                    <p>Tuesday – Sunday: 11:30 AM – 11:00 PM</p>
                    <p>Monday: Reserved for Private Banquets</p>
                    <p>Traditional Coffee Ceremony daily at 4:00 PM</p>
                    <p>Jebena Buna & Fresh Roasting All Evening</p>
                </div>

                <div className="footer-account">
                    <h5>Guest Account & Traditions</h5>
                    <ul>
                        <li><Link href="/login">Sign In to Mesob Rewards</Link></li>
                        <li><Link href="/signup">Create Member Profile</Link></li>
                    </ul>
                    <p>Vegan Fasting (Beyaynetu / Tsom)</p>
                    <p>House Tej (Pure Honey Wine)</p>
                </div>

                <div className="footer-location">
                    <h5>Addis Location</h5>
                    <p>Bole Medhanialem, Addis Ababa & express delivery across town.</p>
                    <p>+251 911 234 567</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Mesob House Habesha Dining. Authentic Ethiopian & Eritrean Heritage.</p>
                <div className="footer-bottom-links">
                    <span>Gursha Hospitality</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Table</span>
                </div>
            </div>
        </div>
)
}

export default Footer