import { Heading } from "@components/common";
import { useAppSelector } from "@store/hooks";

const Account = () => {
  const AccountInfo = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Heading title="Account Information" />
      <ul>
        <li>FirstName: {AccountInfo?.firstName}</li>
        <li>LastName: {AccountInfo?.lastName}</li>
        <li>Email: {AccountInfo?.email}</li>
      </ul>
    </>
  );
};

export default Account;
