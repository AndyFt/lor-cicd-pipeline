import characterData from '../data/characterData.json';
import Character from './Character';

const CharacterGallery = () => {
  const listOfCharacters = characterData.map((char, i) => <Character {...char} key={i} />)

  return (
    <section>
      { listOfCharacters }
    </section>
  );
};

export default CharacterGallery;