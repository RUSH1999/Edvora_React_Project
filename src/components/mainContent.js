import React, {useState} from 'react'
import product_card from "../data/product_data";

const MainContent = () => {
    const [items, setCateg] = useState(product_card);

    const filterItem = (categItem) => {
        const updatedItems = product_card.filter((curElem) => {
                return curElem.category === categItem;
        });
        setCateg(updatedItems);

    }

    const filterState = (categState) => {
        const updatedState = product_card.filter((curElem) => {
                return curElem.state === categState;
        });
        setCateg(updatedState);

    }   
    
    const filterCity = (categCity) => {
        const updatedCity = product_card.filter((curElem) => {
                return curElem.city === categCity;
        });
        setCateg(updatedCity);

    }   



    return (
            
            <div className= "main_content">
               

            <div className="menu-tabs container">
            <h1 className="d-flex">Select Your Headset</h1>
                <div className="menu-tab d-flex justify-content-around">
                        <button className="btn btn-primary" onClick={() => filterItem('headphone')}>Headphones</button>
                        <button className="btn btn-primary" onClick={() => filterItem('Earphone')}>Earphone</button>
                        <button className="btn btn-primary" onClick={() => filterItem('Airpods')}>Airpods</button>                    
                </div>       
            </div>

            <div className="menu-tabs container">
            <h1 className="d-flex">Select Your State</h1>
                <div className="menu-tab d-flex justify-content-around">
                        <button className="btn btn-primary" onClick={() => filterState('Maharashtra')}>Maharashtra</button>
                        <button className="btn btn-primary" onClick={() => filterState('Gujarat')}>Gujarat</button>
                        <button className="btn btn-primary" onClick={() => filterState('Delhi')}>Delhi</button>
                </div>       
            </div>

            <div className="menu-tabs container">
            <h1 className="d-flex">Select Your City</h1>
                <div className="menu-tab d-flex justify-content-around">
                        <button className="btn btn-primary" onClick={() => filterCity('Mumbai')}>Mumbai</button>
                        <button className="btn btn-primary" onClick={() => filterCity('Pune')}>Pune</button>
                        <button className="btn btn-primary" onClick={() => filterCity('Ahmedabad')}>Ahmedabad</button>
                        <button className="btn btn-primary" onClick={() => filterCity('Surat')}>Surat</button>
                </div>       
            </div>

                      {
                            items.map((elem) => {
                                    const { id, product_name, description, price, category, city, state, currency, thumb} = elem;
                                    return (

                                      
                                        <div className="card mt-5">
                                            
                                                <div className="card_img">
                                                    <img src={thumb} alt="Products" className="img-fluid" />
                                                </div>

                                            <div className="card_header col-12 col-md-12 col-lg-8">
                                                
                                                    <h1>{product_name}</h1>
                                                    <p>{description}</p>
                                                
                                                
                                                        <div className="price">
                                                            <p className="price">{price}<span>{currency}</span></p>
                                                        </div>
                                                
                                            </div>
                                            <div className="btn">Add to cart</div>

                                        </div>
                                        
                                   
                                    
                                    )
                            })
                        }  
        
                
            
   

            </div>

    )
}

export default MainContent;
