import React, { useState, useEffect } from 'react';
function Test({ endpoint }: { endpoint: string }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async (endpoint: string): Promise<any> => {
        const response = await fetch(`http://localhost:8888/${endpoint}`);
        const data = await response.json();
        return data;
      }
  
      fetchData(endpoint)
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, [endpoint]);
  
    if (isLoading) {
      return <p>Loading...</p>;
    }

  function addToCart(id: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div id="flex-container">
      {products.map((product: { id: any; image: any; name: any; price: any; description: any; }) => {
        const { id, image, name, price, description } = product;

        return (
          <div key={id} className="card">
            <div className="card-body">
              <a style={{ textDecoration: 'none' }} href={`./product?id=${id}`}>
                <div>
                  <img className="mb-5" src={`${image}`} />
                  <h5 className="card-title">{`${name}`}</h5>
                </div>
              </a>
              <h5 className="card-price">{`${price}`} DKK</h5>
              <div className="card-text">{`${description}`}</div>
              <button
                className="basket-button"
                onClick={() => addToCart(id)}
                data-pid={id}
              >
                Add to basket
              </button>
            </div>
          </div>
        );
      })}
</div>
  );
}

export default Test;
