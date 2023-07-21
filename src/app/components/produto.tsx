export default function Produto() {

  let productList = [
    {
      name: 'Câmera retrô',
      value: 90.00
    },
    {
      name: 'DVD Perícles ao vivo',
      value: 30.00
    },
    {
      name: 'Livro diário de um banana',
      value: 20.00
    },
    {
      name: 'Livro A elite do atraso',
      value: 20.00
    },
    {
      name: 'Livro A elite do atraso',
      value: 20.00
    }

  ];

  return (

    <div className="flex flex-row flex-wrap grid-rows-3 content-start w-full h-full">
      {productList.map( produto => {
        return (
          <>
          <div className="product-container border-slate-400 p-5">
          <div className="product-image-container">
            <img src="img/vapo_cam.jpg" className="product-image"></img>
          </div>
    
    
          <div className="product-label">
              <span> {produto.name} </span>
          </div>
        </div>
        </>
        )
      })}
    </div>



  );
}