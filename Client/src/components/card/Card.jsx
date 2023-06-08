import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";



   const Card = ({id, name, status, species, gender, image, origin, onClose, addFav, removeFav, myFavorites}) => {

      const [isFav, setFav] = useState (false);
   
      const handleFavorite = () => {
         if (isFav) {
            setFav(false);
            removeFav(id);
         } else {
            setFav(true);
            addFav(myFavorites);
         }
      };
   //    useEffect(() => {
   //    myFavorites.forEach((fav) => {
   //       if (fav.id === id) {
   //          setFav(true);
   //       }
   //    });
   // }, [myFavorites]);
   const dispatch = useDispatch();
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
      {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
            <button onClick={()=>onClose(id)}>X</button>
         </div>
            <Link to={`/detail/${id}`}>
               <button>Details</button>
               <h3 className="card-name">{name}</h3>
               <div className={styles.dataContainer}>
                  <h2>Id: {id}</h2>
                  <h2>Name: {name}</h2>
                  <h2>Status: {status}</h2>
                  <h2>Specie: {species}</h2>
                  <h2>Gender:{gender}</h2>
                  <h2>Origin: {origin}</h2>
                  <img src={image} alt='' />
               </div>
            </Link>
      </div>
   );
   
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps =(state) => {
   return {
      myFavorites: state.myFavorites
   }
}
export default connect(mapDispatchToProps, mapStateToProps)(Card);


