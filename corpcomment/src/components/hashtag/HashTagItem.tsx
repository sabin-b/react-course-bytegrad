import { useDispatch } from "react-redux";
import { addCompany } from "../../features/feedback.slice";
import { AppDispatch } from "../../store/store";

interface HashTagItemProps {
  company: string;
}

export default function HashTagItem({ company }: HashTagItemProps) {
  const dispatch: AppDispatch = useDispatch();

  //? handle company
  const handleSelectCompany = (company: string) => {
    dispatch(addCompany(company));
  };
  return (
    <li>
      <button onClick={() => handleSelectCompany(company)}>#{company}</button>
    </li>
  );
}
