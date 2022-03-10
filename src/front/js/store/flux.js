const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},

    actions: {
      setSessionStore: (token, user_id, roles) => {
        const payload = { token, user_id, roles };
        localStorage.setItem("session", JSON.stringify(payload));
        setStore({ session: payload });
      },
      createUser: async (email, password) => {
        const actions = getActions();
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/user`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          actions.setSessionStore(payload.token, payload.id);
          return payload;
        }
        return await response.json();
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
