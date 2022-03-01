const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},

    actions: {
      createNewSession: async (email, password) => {
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
          localStorage.setItem("session", JSON.stringify(payload));
          setStore({ session: payload });
          return payload;
        }
      },
    },

  };
};

export default getState;
