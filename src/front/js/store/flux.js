const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},

    actions: {
      setSessionStore: (token, user_id) => {
        const payload = { token, user_id };
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
          actions.setSessionStore(payload.token, payload.user_id);
          return payload;
        }
        return await response.json();
      },
    },
  };
};

export default getState;
