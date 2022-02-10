import { apiInstance, loginApiInstance } from "./index.js";

const api = apiInstance();

// // 회원 정보 수정
// function modifyUser(user, success, fail) {
//   const loginApi = loginApiInstance();
//   console.log(JSON.stringify(user), "userAPI");
//   loginApi.put(`/user`, JSON.stringify(user)).then(success).catch(fail);
// }
async function modifyUser(user) {
  const loginApi = loginApiInstance();
  console.log(user, "모디파이 유저");
  const response = await loginApi.put(`/user`, JSON.stringify(user));
  return response.data.data;
}

// 회원 가입
// function registerUser(user, success, fail) {
//   api.post(`/user`, JSON.stringify(user)).then(success).catch(fail);
// }
async function registerUser(user) {
  const response = await api.post(`/user`, JSON.stringify(user));
  return response.data.data;
}

// 회원 탈퇴
// function deleteUser(userId, success, fail) {
//   api.delete(`/user/${userId}`).then(success).catch(fail);
// }
async function deleteUser(userId) {
  const response = await api.delete(`/user/${userId}`);
  return response.data.data;
}

//회원 사진 수정
// function modifyUserPic(userId, success, fail) {
//   api.post(`/user/profile/${userId}`).then(success).catch(fail);
// }
async function modifyUserPic(userId) {
  const response = await api.post(`/user/profile/${userId}`);
  return response.data.data;
}

// 비밀번호 확인
// function checkPassword(user, success, fail) {
//   const loginApi = loginApiInstance();
//   loginApi.post(`/user/password/check`, JSON.stringify(user)).then(success).catch(fail);
// }
async function checkPassword(user) {
  const loginApi = loginApiInstance();
  const response = await loginApi.post(`/user/password/check`, JSON.stringify(user));
  return response.data.data;
}

// 비밀번호 변경
// function changePassword(user, success, fail) {
//   const loginApi = loginApiInstance();
//   loginApi.post(`/user/password/change`, JSON.stringify(user)).then(success).catch(fail);
// }
async function changePassword(user) {
  const loginApi = loginApiInstance();
  const response = await loginApi.post(`/user/password/change`, JSON.stringify(user));
  return response.data.data;
}

// 로그인
// function loginUser(user, success, fail) {
//   api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
// }
async function loginUser(user) {
  const response = await api.post(`/user/login`, JSON.stringify(user));
  return response.data.data;
}

// 회원 정보
async function userInfo(userId) {
  const response = await api.get(`/user/${userId}`);
  return response.data.data;
}

// 비밀번호 찾기
// function findUserPassword(userEmail, success, fail) {
//   api.get(`/user/password/sendToEmail/${userEmail}`).then(success).catch(fail);
// }
async function findUserPassword(userEmail) {
  const response = await api.get(`/user/password/sendToEmail/${userEmail}`);
  return response.data.data;
}

//이메일 중복 조회
// function checkDuplication(userEmail, success, fail) {
//   api.get(`/user/duplication?email=${userEmail}`).then(success).catch(fail);
// }
async function checkDuplication(userEmail) {
  const response = await api.get(`/user/duplication?email=${userEmail}`);
  return response.data.data;
}

// 즐겨찾는 병원 조회

export {
  userInfo,
  registerUser,
  modifyUser,
  deleteUser,
  modifyUserPic,
  checkPassword,
  changePassword,
  loginUser,
  findUserPassword,
  checkDuplication,
};
