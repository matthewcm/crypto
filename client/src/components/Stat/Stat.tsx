import { SelectOption } from '../../types/SelectOption';

const Stat = ({
  label,
  value,
}: SelectOption) => (

  <div className="stat">
    <div className="stat-value text-2xl">{label}</div>
    <div className="stat-title">{value}</div>
  </div>
);

export default Stat;
