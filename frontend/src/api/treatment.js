import { apiInstance, loginApiInstance } from "./index.js";

const api = apiInstance();

// 특정 진료 정보 반환
async function treatmentInfo(treatmentId) {
    return (await api.get(`/treatment/${treatmentId}`)).data.data;
}

// 사용자 진료 정보 반환
async function userTreatmentInfo(userId, treatmentType) {
    // console.log(userId, treatmentType, typeof treatmentType, "진료정보 api");
    return (await api.get(`/treatment/user/${userId}?treatmentType=${treatmentType}`)).data.data;
}

// 의사 진료 정보 반환
async function doctorTreatmentInfo(doctorId) {
    return (await api.get(`/treatment/doctor/${doctorId}`)).data.data;
}
// 의사 진료 정보 모두반환
async function doctorTreatmentAllInfo(doctorId) {
    return (await api.get(`/treatment/doctor/all/${doctorId}`)).data.data;
}

// 진료 정보 등록
async function addTreatment(treatmentInfo) {
    return await api.post(`/treatment`, JSON.stringify(treatmentInfo));
}

// 진료 상태 수정
async function treatmentState(treatmentId) {
    return await api.post(`/treatment/${treatmentId}`);
}

// 결제 정보 수정
async function treatmentPay(treatmentId) {
    return await api.post(`/treatment/payment/${treatmentId}`);
}

// 의사의 전체 진료 정보 반환
async function treatments(doctorId) {
    return (await api.get(`/treatment/doctor/all/${doctorId}`)).data.data;
}

export { treatmentInfo, userTreatmentInfo, doctorTreatmentInfo, addTreatment, treatmentState, treatmentPay, treatments };
