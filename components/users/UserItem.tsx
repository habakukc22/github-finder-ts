import Image from "next/image";
import Link from "next/link";
import { User } from "../../context/github/GithubContext";

function UserItem({ user }: { user: User }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <Image src={user.avatar_url} alt="Profile" width={56} height={56} />
          </div>
        </div>

        <div className="">
          <h2 className="card-title">{user.login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            href={`/user/${user.login}`}
          >
            Visit profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
