import { useContext, useEffect } from "react"
import { withSSRAuth } from "../../utils/withSSRAuth"
import { AuthContext } from "../contexts/AuthContext"
import { setupApiClient } from "../services/api";
import { api } from "../services/apiClient";

export default function Dashboard() {
  const { user } = useContext(AuthContext)


  useEffect(() => {
    api.get('/me').then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, [])
  return (
    <h1>dashboard{user?.email}</h1>
  )
}


export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  const response = await apiClient.get('/me');




  return {
    props: {}
  }
})