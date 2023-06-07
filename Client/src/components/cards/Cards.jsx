import Card from '../card/Card';

function Cards  ({characters, onClose}) {
   const cardsContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
   }
   return (
   <div style={cardsContainer}>
      {
         characters.map(({id, name, species, status, origin, image, gender}) => {
            return(
            <Card 
            key={id}
            id ={id}
            name ={name}
            species ={species}
            status ={status}
            origin = {origin.name}
            gender ={gender}
            image ={image}
            onClose={onClose}
            />);
         })
      }
   </div>)
}
export default Cards;