import axios from "axios";

const HEADER = "application/json";
const DOMAIN = "http://192.168.110.34:8090/kh_mini_project/";

const DjApi = {
  // 로그인 기능 ( userLogin이 useState의 프로퍼티로 역할)
  userLogin: async function (id, pw) {
    const loginObj = {
      id: id,
      pwd: pw,
    };
    return await axios.post(DOMAIN + "LoginServlet", loginObj, HEADER); // 백엔드 통신 주소
  },
  // 회원 정보 조회
  memberInfo: async function (id) {
    const regCmd = {
      cmd: "MemberInfo",
      id: id,
    };
    return await axios.post(DOMAIN + "MemberServlet", regCmd, HEADER);
  },
  // 회원 가입
  memberReg: async function (id, pwd, name, mail) {
    const memberObj = {
      id: id,
      pwd: pwd,
      name: name,
      mail: mail,
    };
    return await axios.post(DOMAIN + "MemberRegServlet", memberObj, HEADER);
  },
  // 회원 가입 여부 확인
  memberRegCheck: async function (id) {
    const regCheck = {
      id: id,
    };
    return await axios.post(DOMAIN + "MemberCheck", regCheck, HEADER);
  },

  memberDelete: async function (id) {
    const memberDel = {
      id: id,
    };
    return await axios.post(DOMAIN + "MemberDelServlet", memberDel, HEADER);
  },

  findMember: async function () {
    const regCmd = {
      cmd: "MemberInfo",
      id: "ALL",
    };
    return await axios.post(DOMAIN + "MemberServlet", regCmd, HEADER);
  },

  memberUpdate: async function (id, pwd, name, mail) {
    const memberObj = {
      id: id,
      pwd: pwd,
      name: name,
      mail: mail,
    };
    return await axios.post(DOMAIN + "MemberUpdateServlet", memberObj, HEADER);
  },

  galleryList: async function () {
    const regCmd = {
      cmd: "GalleryInfo",
      gal_id: "ALL",
    };
    return await axios.post(DOMAIN + "GalleryServlet", regCmd, HEADER);
  },

  galleryReg: async function (title, content, img_url, user_id) {
    const reqCmd = {
      title: title,
      content: content,
      image_url: img_url,
      user_id: user_id,
    };
    return await axios.post(DOMAIN + "GalleryRegServlet", reqCmd, HEADER);
  },

  galleryDetail: async function (gal_id) {
    const detailObj = {
      gal_id: gal_id,
    };
    return await axios.post(DOMAIN + "GalleryDetailServlet", detailObj, HEADER);
  },

  galleryDelete: async function (gal_id) {
    const deleteObj = {
      gal_id: gal_id,
    };
    return await axios.post(DOMAIN + "GalleryDeleteServlet", deleteObj, HEADER);
  },

  galleryUpdate: async function (gal_id, title, content) {
    const updateObj = {
      gal_id: gal_id,
      title: title,
      content: content,
    };
    return await axios.post(DOMAIN + "GalleryUpdateServlet", updateObj, HEADER);
  },
};

export default DjApi;
