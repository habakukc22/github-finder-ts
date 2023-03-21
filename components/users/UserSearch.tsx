import { useState, useContext, ChangeEvent, SyntheticEvent } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value.trim());
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.length === 0) {
      setAlert("Enter a valid username", "error");
    } else {
      dispatch({ type: "SET_LOADING" });

      const users = await searchUsers(text);

      console.log(users);

      dispatch({ type: "GET_USERS", payload: users });

      setText("");
    }
  };

  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit} action="form-control">
          <div className="relative">
            <input
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              type="text"
              placeholder="Search"
              value={text}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
