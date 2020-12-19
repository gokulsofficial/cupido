import React, { useState, useEffect } from 'react';
import CupidoCard from 'react-tinder-card';
import './CupidoCard.css'
import database from './Firebase';
function CupidoCards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        const unsubscribe = database
        .collection('people')
        .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <div>
            <div className="cupidoCards__cardContainer">
                {people.map(person => (
                    <CupidoCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}>
                        <div style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </CupidoCard>
                ))}
            </div>
        </div>
    )
}

export default CupidoCards
