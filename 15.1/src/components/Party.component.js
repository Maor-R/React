import { GiVote } from 'react-icons/gi';

const Party = ({  image, name, updateParty }) => {
  return (
    <article className='card'>
      <img src={image} alt={`${name} `} />
      <h4>{name} </h4>
      <button className='btn btn-transparent mt' onClick={() => updateParty( name)} >
        <GiVote />
      </button>
    </article>
  );
};

export default Party;