// import { GetNews } from "../actions/newsActions";
import { fetchPage, getContent } from "../actions/pagesAction";
import { fetchLanding } from "../actions/landingActions";
import { getNews, getAllNews } from "../actions/newsActions";
import { getCabangs } from "../actions/cabangActions";
import { getAllKarir, getKarirById } from "../actions/karirActions";
import { postKontak } from "../actions/kontakActions";
import { subscribeEbook } from "../actions/ebookActions";

export {
  // page action
  fetchLanding,
  fetchPage,
  getContent,
  getNews,
  getAllNews,
  // cabang
  getCabangs,
  // karir
  getAllKarir,
  getKarirById,
  // kontak
  postKontak,
  // ebook
  subscribeEbook
};
