interface ItemProps {
  name: string;
  packed: boolean;
}

export default function Item({ name, packed }: ItemProps) {
  return (
    <li className="item">
      <label>
        <input checked={packed} type="checkbox" /> {name}
      </label>
      <button>❌</button>
    </li>
  );
}
