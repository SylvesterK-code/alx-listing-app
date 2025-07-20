interface PillProps {
  label: string;
  onClick: () => void;
  active?: boolean;
}
const Pill = ({ label, onClick, active }: PillProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border ${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
  >
    {label}
  </button>
);
export default Pill;
