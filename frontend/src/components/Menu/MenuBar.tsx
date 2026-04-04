// TYPE
type MenuLabel = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const MenuBar = ({ label, isActive, onClick }: MenuLabel) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 bg-white border-2 border-gray-50 shadow-lg rounded-lg transition
        ${isActive ? "bg-yellow-500 text-black" : "bg-white text-black"}
      `}
    >
      {label}
    </button>
  );
};

export default MenuBar;
