const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},

    actions: {
      setSessionStore: (token, user_id, roles) => {
        const payload = { token, user_id, roles };
        localStorage.setItem("session", JSON.stringify(payload));
        setStore({ session: payload });
      },
      _fetch: async (url, options = {}) => {
        options.header = { "Content-Type": "application/json" };
        const response = await fetch(process.env.BACKEND_URL + url, options);
        if (response.status >= 200 && response.status < 400) {
          return await response.json();
        } else if (response.status > 400 && response.status < 500) {
          const error = await response.json();
          alert(error.message);
        } else {
          alert("Unknown Error");
          console.log(await response.text());
        }
      },
      createUser: async (email, password) => {
        const actions = getActions();
        const options = {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        const response = await actions._fetch(`/api/user`, options);
        const payload = await response.json();
        actions.setSessionStore(payload.token, payload.id);
        return payload;
      },
      createNewSession: async (email, password) => {
        const actions = getActions();
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/token`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          actions.setSessionStore(
            payload.token,
            payload.user_id,
            payload.roles
          );
          return payload;
        } else if (response.status != 200) {
          return "User Not Found!";
        }
        return await response.json();
      },
      getChildren: async () => {
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/children`,
          options
        );
        return response.json();
      },
    },
  };
};

export default getState;
