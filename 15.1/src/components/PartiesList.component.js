import Party from './Party.component';

const PartiesList = ({ parties, updateParty }) => {
  return (
    <section className='container'>
      {parties.map((party) => { 
        return <Party key={party.name} name={party.name} image={party.image} updateParty={updateParty} />;
      })}
    </section>
  );
};

export default PartiesList;