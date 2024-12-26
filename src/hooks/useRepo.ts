import { useState, useEffect } from "react";
import { useSession } from "@clerk/clerk-react";

interface Repository {
  name: string;
  visibility: string;
  language: string;
  size: number;
  updated_at: string;
  html_url: string;
}

const useRepo = () => {
  const { isSignedIn, isLoaded, session } = useSession();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubRepos = async (token: string) => {
      let allRepos: Repository[] = [];
      let page = 1;
      const perPage = 100; // Maximum allowed by GitHub API

      while (true) {
        try {
          const response = await fetch(
            `https://api.github.com/user/repos?per_page=${perPage}&page=${page}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            allRepos = allRepos.concat(data);

            // If the number of repos fetched is less than perPage, we have fetched all repos
            if (data.length < perPage) {
              break;
            }

            page++;
          } else {
            console.error(
              "Failed to fetch repositories:",
              response.status,
              await response.text()
            );
            break;
          }
        } catch (error) {
          console.error("Error fetching GitHub repositories:", error);
          break;
        }
      }

      setRepos(allRepos);
      setLoading(false);
    };

    const fetchAccessToken = async () => {
      try {
        const userId = session?.user.id;

        if (userId) {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/github/token?userId=${userId}`);

          if (response.ok) {
            const { accessToken } = await response.json();

            if (accessToken) {
              fetchGitHubRepos(accessToken);
            } else {
              console.error("Access token not found");
              setLoading(false);
            }
          } else {
            console.error("Failed to fetch access token");
            setLoading(false);
          }
        } else {
          console.error("User ID not found");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
        setLoading(false);
      }
    };

    if (isSignedIn && session?.user) {
      fetchAccessToken();
    } else if (isLoaded && !isSignedIn) {
      setLoading(false);
    }
  }, [isLoaded, isSignedIn, session]);

  return { loading, repos };
};

export default useRepo;