

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue">
        <ul className="lista-footer">
          <li id="flex">
            <img src="../img/buy-comics-digital-comics.png" id="size" />
            <p className="position">DIGITAL COMICS</p>
          </li>
          <li id="flex">
            <img src="../img/buy-comics-merchandise.png" id="size" />
            <p className="position">DC MERCHANDISE</p>
          </li>
          <li id="flex">
            <img src="../img/buy-comics-subscriptions.png" id="size" />
            <p className="position">SUBSCRIPTION</p>
          </li>
          <li id="flex">
            <img src="../img/buy-comics-shop-locator.png" id="size" />
            <p className="position">COMIC SHOP LOCATOR</p>
          </li>
          <li id="flex">
            <img src="../img/buy-dc-power-visa.svg" id="size" />
            <p className="position">DC POWER VISA</p>
          </li>
        </ul>
      </div>
      <div className="foot-bg">
        <div className="fifthy calc" id="flex">

          <div className="distance">
            <h2 className="m-20" id="white">DC COMICS </h2>
            <ul className="gray">
              <li>Characters </li>
              <li>Comics </li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>
             <h2 className="m-20" id="white">SHOP </h2>
            <ul className="gray">
              <li>Shop DC </li>
              <li>Shop DC Collectibles </li>
            </ul>
          </div>

           <div className="distance">
            <h2 className="m-20" id="white">DC </h2>
            <ul className="gray">
              <li>Terms of use </li>
              <li>Privacy policy (New) </li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshops</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </div>

           <div className="distance">
            <h2 className="m-20" id="white">SITES </h2>
            <ul className="gray">
              <li>DC</li>
              <li>MAD Magazines </li>
              <li>DC kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>

           

        </div>
        <div className="fifthy">
          <img src="../img/dc-logo-bg.png" className="dc_button" />
        </div>
      </div>

      <div className="bg-dark">
        <div className="fifthy">
          <button><h1>SIGN-UP NOW!</h1></button>
        </div>
        <div className="fifthy">
          <ul className="info">
            <li><h2 className="color">FOLLOW US</h2></li>
            <li><img src="../img/footer-facebook.png" /></li>
            <li><img src="../img/footer-twitter.png" /></li>
            <li><img src="../img/footer-youtube.png" /></li>
            <li><img src="../img/footer-pinterest.png" /></li>
            <li><img src="../img/footer-periscope.png" /></li>
          </ul>
        </div>
      </div>

      
    </footer>
  )
}

export default Footer
