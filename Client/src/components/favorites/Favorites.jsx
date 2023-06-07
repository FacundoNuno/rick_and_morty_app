import { connect } from "react-redux"
import Card from "../card/Card"

const Favorites = ({myFavorites}) => {

    return (
        <div>
            {
                myFavorites?.map(({id, name, specie, gender, image, origin, status, onClose}) =>{
                    return(
                        <Card 
                        key={id}
                        id={id}
                        name={name}
                        species={specie}
                        gender={gender}
                        image={image}
                        origin={origin}
                        status={status}
                        onClose={onClose}
                        />
                    )
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);