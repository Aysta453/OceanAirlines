import store from "../apps/store";

export const getReduxUser = () => {
  const user = store.getState().auth.current.data;
  if (user) return user;
  else return null;
};

export const getReduxGroup = () => {
  const group = store.getState().group.current.data;
  if (group) return group;
  else return null;
};

export const setReduxUser = (key, value) => {
  switch (key) {
    case "name":
      store.getState().auth.current.data.name = value;
      break;
    case "userName":
      store.getState().auth.current.data.userName = value;
      break;
    case "avatarUrl":
      store.getState().auth.current.data.avatarUrl = value;
      break;
    default:
      break;
  }
};

export const getUser = () => {
  const user = localStorage.getItem("msn-user");
  if (user) return JSON.parse(user);
  else return null;
};

export const getToken = () => {
  const user = getUser();
  if (user) return user.accessToken || null;
};

export const setUserStorage = (user) => {
  localStorage.setItem("msn-user", JSON.stringify(user));
};

export const removeUserStorage = () => {
  localStorage.removeItem("msn-user");
};
