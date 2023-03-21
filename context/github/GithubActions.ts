import axios from "axios";
const url = process.env.NEXT_PUBLIC_GITHUB_URL;
const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const github = axios.create({
  baseURL: url,
  headers: { Authorization: `token ${token}` },
});

export const searchUsers = async (text: any) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);
  // console.log(response.data.items);

  return response.data.items;
};

export const getUserAndRepos = async (login: string | string[] | undefined) => {
  const params = new URLSearchParams({ sort: "created", per_page: "10" }); //this 10 was a number before

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  console.log(user.data);
  console.log(repos.data);
  return { user: user.data, repos: repos.data };
};
