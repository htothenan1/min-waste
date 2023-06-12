import { getUsers } from "../../lib/users";

export default async function Home() {
  const { users } = await getUsers();

  return (
    <section className="py-20">
      <div className="flex">
        <h1>Users</h1>

        <ul className="mt-4 flex flex-col gap-1">
          {users?.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
