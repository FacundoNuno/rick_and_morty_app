import styles from "./Card.module.css";


function Card({id, name, species, status, origin, gender, image, onClose }) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={()=>onClose(id)}>X</button>
         </div>
         <div className={styles.dataContainer}>
            <h2>Id: {id}</h2>
            <h2>Name: {name}</h2>
            <h2>Status: {status}</h2>
            <h2>Specie: {species}</h2>
            <h2>Gender:{gender}</h2>
            <h2>Origin: {origin}</h2>
            <img src={image} alt='' />
         </div>
      </div>
   );
}
export default Card;