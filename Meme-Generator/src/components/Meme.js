import memesData from "../memesData";
const Meme = () => {
  function handleClick() {
    const randomMeme = Math.floor((Math.random() * 100))
    console.log(memesData.data.memes[randomMeme].url);
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top Text" />
        <input className="form--input" type="text" placeholder="Bottom Text" />
        <button onClick={handleClick} className="form--button">
          Get new meme image 🖼
        </button>
      </div>
    </main>
  );
};

export default Meme;
