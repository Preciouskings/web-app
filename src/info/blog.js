const fetchSinglePost = async (username) => {
  const query = JSON.stringify({
    query: `{
        user(username: "Preciouskings") {
                  publication {
                
                {
                    post(slug: "data-types-in-javascript-cl9ppazy6000609kz95r3gs0p", hostname: "") {
                        title
                        brief
                        coverImage
                        author {
                        username
                        name
                    }
                }
            }}}
            
        }`,
  });

  const response = await fetch("https://api.hashnode.com/", {
    method: "post",
    body: query,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse);
};

fetchSinglePost("Preciouskings");