import React from 'react';
import '../styles/Small.scss';

const SmallSection = () => {
  return (
    <section className="lower-section">
        <div className="allcard">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="Articles of unisex clothing"/>
                <p>Unisex</p>
                <h1>Lorem ipsum dolor hea</h1>
            </div>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" alt="Articles of women's clothing"/>
                <p>Women</p>
                <h1>Lorem ipsum dolor hea</h1>
            </div>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Articles of men's clothing"/>
                <p>Men</p>
                <h1>Lorem ipsum dolor hea</h1>
            </div>
        </div>
    </section>
  )
}

export default SmallSection