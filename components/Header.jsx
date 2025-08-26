

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
            {lists.map((list) => {
              const { id , type} = list;
              return (<li className="bonus" key={id}>{type}</li>)
            })}
          </ul>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
