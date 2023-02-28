import "../index.css";

const Card = ({ id, imgSrc, answer }) => {

  return (
    <>
      {(
        <article className="card">
          <img  src={imgSrc}></img>
          <h5 className="answer">{answer}</h5>
   
      
        </article>
      )}
    </>
  );
};

export default Card;
