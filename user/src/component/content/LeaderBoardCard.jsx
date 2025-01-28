import avtar from "../../assets/avatar1.png";

const LeaderBoardCard = ({ title, winnerName, items }) => {
  return (
    <div className="border-green-700  border rounded-3xl  border-dashed shadow-lg p-4 bg-primary ">
      <div className="p-3 border rounded-3xl border-green-700 shadow-sm bg-gray-50">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <img src={avtar} alt="winner" className="w-16 mb-3 mx-auto rounded-full" />
          <h3 className="text-sm font-semibold mb-3 text-green-700">{winnerName}</h3>
          {/* <div className="custom-page">
            <h1 className="custom-txt" aria-label={winnerName}>
              {winnerName.split('').map((character, index) => (
                <span
                  key={index}
                  className="custom-character"
                  style={{ '--i': index }}
                >
                  {character}
                </span>
              ))}
            </h1>
          </div> */}
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-2 px-2 transition-all duration-300 ease-in-out hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-lg">
              <span>{item.name}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default LeaderBoardCard
