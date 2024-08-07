import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session)

  return(
    <div>
      {session.user.email}
    </div>
  )
}