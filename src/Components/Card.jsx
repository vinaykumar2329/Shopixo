 const Card = ({ item }) => {
  return (
    <div className=" w-55 shrink-0 cursor-pointer bg-white text-black p-2 border-2">
      <img
        src={item.image}
    
        className=" h-60 w-full object-contain"
      />

      <p className="text-sm font-semibold mt-2 truncate">
        {item.title}
      </p>

      <p className="text-gray-500 text-xs">
        Min. {Math.floor(Math.random() * 40 + 50)}% Off
      </p>
    </div>
  );
};

export default Card;
