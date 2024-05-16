import { useAuthStore } from "../App";
import { Login } from "../components/Login/Login";

export default function Authentication() {

  const {login} = useAuthStore()

  return (
    <>
      <Login onLogin={login} />
    </>
  );
}