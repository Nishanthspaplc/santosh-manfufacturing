(function () {
    "use strict";

    var footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-4 col-md-6">
                    <h5>Santosh Manufacturing</h5>
                    <p class="footer-about">Santosh Manufacturing Units Pvt Ltd — manufacturer and importer of Home Appliances, Decorative Lighting (POWERLAM), Interior Decor Solutions (POWERLAM), and Plywood. Serving dealers, distributors, and wholesalers across India.</p>
                    <div class="social-links mt-3">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5>Quick Links</h5>
                    <div class="footer-links">
                        <a href="index.html"><i class="fas fa-chevron-right"></i> Home</a>
                        <a href="about.html"><i class="fas fa-chevron-right"></i> About Us</a>
                        <a href="products.html"><i class="fas fa-chevron-right"></i> Products</a>
                        <a href="contact.html"><i class="fas fa-chevron-right"></i> Contact</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5>Products</h5>
                    <div class="footer-links">
                        <a href="products.html#appliances"><i class="fas fa-chevron-right"></i> Home Appliances</a>
                        <a href="products.html#lighting"><i class="fas fa-chevron-right"></i> Decorative Lighting</a>
                        <a href="products.html#interior"><i class="fas fa-chevron-right"></i> Interior Decor</a>
                        <a href="products.html#plywood"><i class="fas fa-chevron-right"></i> Plywood</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5>Contact Info</h5>
                    <div class="footer-contact">
                        <p><i class="fas fa-map-marker-alt"></i> D-142, Sector 63, Noida, U.P.</p>
                        <p><i class="fas fa-phone-alt"></i> Decorative Lighting: +91 7814740670</p>
                        <p><i class="fas fa-phone-alt"></i> Interior Decor: +91 9818314804</p>
                        <p><i class="fas fa-phone-alt"></i> Home Appliances: +91 8930469888</p>
                        <p><i class="fas fa-envelope"></i> info@santoshmanufacturing.com</p>
                        <p><i class="fas fa-clock"></i> Mon - Sat: 9AM - 6PM</p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start">
                        &copy; 2026<a href="#">Santosh Manufacturing</a>. All Rights Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end mt-2 mt-md-0">
                        GST: 09ABJCS3272R1ZG
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;

    var placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.outerHTML = footerHTML;
    }
})();
