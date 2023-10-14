/* eslint-disable react/prop-types */
export default function NavBar ({handlePreviousClick,handleNextClick}) {
    console.log("coucou",handlePreviousClick);
        return(     
        <>
           <button onClick={handlePreviousClick}>Précédent</button>
            <button onClick={handleNextClick}>Suivant</button>
        </>  
        )}