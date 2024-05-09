const fetchPostsByUsername = async (username) => {
  const query = JSON.stringify({
    query: `{
                user(username: "") {
                  publication {
                    posts(page: 0) {
                      _id
                      cuid
                      coverImage
                      title
                    }
                }
            }
        }`,
  });

  const response = await fetch("", {
    method: "post",
    body: query,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse);
};

fetchPostsByUsername("");
