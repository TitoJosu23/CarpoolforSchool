import { toast } from "react-toastify";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      children: [],
      guardians: [],
      schools: [],
    },

    actions: {
      getCurrentSession: () => {
        const session = JSON.parse(localStorage.getItem("session"));
        return session;
      },
      setSessionStore: (token, user_id, roles) => {
        const payload = { token, user_id, roles };
        localStorage.setItem("session", JSON.stringify(payload));
        setStore({ session: payload });
      },
      _fetch: async (url, options = {}) => {
        const actions = getActions();
        const session = actions.getCurrentSession();
        if (session != null) {
          options.headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,
          };
        } else {
          options.headers = { "Content-Type": "application/json" };
        }
        const response = await fetch(process.env.BACKEND_URL + url, options);
        if (response.status >= 200 && response.status < 400) {
          return await response.json();
        } else if (response.status >= 400 && response.status < 500) {
          const error = await response.json();
          toast(error.msg);
          throw error;
        } else {
          alert("Unknown Error");
          console.log(await response.text());
          throw "unknown error";
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
        const payload = await actions._fetch(`/api/user`, options);
        return payload;
      },
      createNewSession: async (email, password) => {
        const actions = getActions();
        const options = {
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
        };
        const payload = await actions._fetch(`/api/token`, options);
        actions.setSessionStore(payload.token, payload.user_id, payload.role);
        return payload;
      },
      getChildren: async () => {
        const actions = getActions();
        return await actions._fetch(`/api/children`);
      },
      getSelf: async () => {
        const actions = getActions();
        return await actions._fetch(`/api/access`);
      },
      clearSession: () => {
        localStorage.removeItem("session");
        setStore({ session: null });
      },
      createSchool: async (
        school_name,
        school_address,
        school_phone,
        email
      ) => {
        const actions = getActions();
        const options = {
          method: "POST",
          body: JSON.stringify({
            email: email,
            school_name: school_name,
            school_address: school_address,
            school_phone: school_phone,
          }),
        };
        const payload = await actions._fetch(`/api/school`, options);
        return payload;
      },
      getGuardians: async () => {
        const actions = getActions();
        const payload = await actions._fetch(`/api/guardians`);
        setStore({ guardians: payload });
        return payload;
      },
      getSchools: async () => {
        const actions = getActions();
        const payload = await actions._fetch(`/api/schools`);
        setStore({ schools: payload });
        return payload;
      },
      getSchool: async () => {
        const actions = getActions();
        const payload = await actions._fetch(`/api/school/detail`);
        setStore({ schools: payload });
        return payload;
      },
      createGuardian: async (first_name, last_name, phone, email) => {
        const actions = getActions();
        const options = {
          method: "POST",
          body: JSON.stringify({
            email: email,
            first_name: first_name,
            last_name: last_name,
            phone: phone,
          }),
        };
        const payload = await actions._fetch(`/api/guardian`, options);
        return payload;
      },
      updateGuardian: async (first_name, last_name, address, phone) => {
        const actions = getActions();
        const options = {
          method: "PUT",
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            address: address,
            phone: phone,
          }),
        };
        const payload = await actions._fetch("/api/guardian", options);
        return payload;
      },
      getGuardianSchools: async () => {
        const actions = getActions();
        const payload = await actions._fetch("/user/schools");
        setStore({ schools: payload });
        return payload;
      },
      addChild: async (first_name, last_name, class_grade, age, school_id) => {
        const actions = getActions();
        const options = {
          method: "POST",
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            class_grade: class_grade,
            age: age,
            school_id: school_id,
          }),
        };
        const payload = await actions._fetch(`/api/child`, options);
        return payload;
      },
    },
  };
};

export default getState;
