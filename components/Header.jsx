

const Header = () => {

  const lists = [
    {
      id: 1,
      type:"CHARACTERS"

    }
    ,
    {
      id: 2,
      type:"COMICS"

    }
    ,
    {
      id: 3,
      type:"MOVIES"

    }
    ,
    {
      id: 4,
      type:"TV"

    }
    ,
   {
      id: 5,
      type:"GAMES"

    },
      {
      id: 6,
      type:"COLLECTIBLES"

    }
    ,
    {
      id: 7,
      type:"VIDEOS"

    }
    ,
    {
      id: 8,
      type:"FANS"

    }
    ,
    {
      id: 9,
      type:"NEWS"

    }
    ,
    {
      id: 10,
      type:"SHOP"

    }
 

]
  return (
    <header>
      <div className="container-fluid" id="flex">
        <div id="flex">
          <img src="../img/dc-logo.png" alt="" />
        </div>
        <div id="">
          <nav>
          <ul className="lista_header" id="flex">

            <li className="bonus">CHARACTERS</li>
            <li className="bonus">COMICS</li>
            <li className="bonus">MOVIES</li>
            <li className="bonus">TV</li>
            <li className="bonus">GAMES</li>
            <li className="bonus">COLLECTIBLES</li>
            <li className="bonus">VIDEOS</li>
            <li className="bonus">FANS</li>
            <li className="bonus">NEWS</li>
            <li className="bonus">SHOP</li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
