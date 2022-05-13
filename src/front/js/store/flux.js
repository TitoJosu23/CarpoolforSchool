import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      children: [],
      guardians: [],
      schools: [],
      userSchools: [],
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
          toast.error(error.message, { position: "top-center" });
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
        try {
          return await actions._fetch(`/api/access`);
        } catch (error) {
          actions.clearSession();
          return error;
        }
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
        try {
          const payload = await actions._fetch(`/api/guardians`);
          setStore({ guardians: payload });
          return payload;
        } catch (error) {
          return error;
        }
      },
      getSchools: async () => {
        const actions = getActions();
        try {
          const payload = await actions._fetch(`/api/schools`);
          setStore({ schools: payload });
          return payload;
        } catch (error) {
          return error;
        }
      },
      getUserSchools: async () => {
        const actions = getActions();
        try {
          const payload = await actions._fetch(`/api/user/schools`);
          setStore({ userSchools: payload });
          return payload;
        } catch (error) {
          return error;
        }
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
      getSchoolGuardians: async () => {
        const actions = getActions();
        const payload = await actions._fetch("/school/guardians");
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
      reqAccess: async (school_id) => {
        const actions = getActions();
        const options = {
          method: "POST",
          body: JSON.stringify({
            school_id: school_id,
          }),
        };
        const payload = await actions._fetch(`/api/school/access`, options);
        if (payload.status == undefined)
          toast.info("Request Sucessfully Sent!", { position: "top-center" });
        return payload;
      },
      getPendingRides: async () => {
        const actions = getActions();
        const payload = await actions._fetch("/api/ride/requests");
        return payload;
      },
    },
  };
};

export default getState;
