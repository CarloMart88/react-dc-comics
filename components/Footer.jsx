

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
        <div className="fifthy"></div>
        <div className="fifthy">
          <img src="../img/dc-logo-bg.png" className="dc_button" />
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
