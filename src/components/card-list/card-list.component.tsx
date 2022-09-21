import './card-list.styles.css'
import Card from '../card/card.component';
import React from 'react';
import { Monster } from '../../App'; //import Monster type

type CardListProps = {
    monsters: Monster[];
}
const CardList = ({monsters}: CardListProps) => (
    <div className="card-list">
        {monsters.map(monster => {
            return <Card monster={monster} />
        })}
    </div>
)

export default CardList;


//-------class component--------

// import {Component} from 'react';
// import './card-list.styles.css'
// import Card from '../card/card.component';

// class CardList extends Component {
//     render () {
//         const {monsters} = this.props;
//         return  (
//             <div className="card-list">
//                 {monsters.map(monster => {
//                     return (
//                         <Card monster={monster} />
//                     )
//                     })
//                 }
//             </div>
//         )
        
    
//     }
// }

// export default CardList;