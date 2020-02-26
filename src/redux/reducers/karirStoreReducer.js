const defaultState = {
  karirList: {
    title: "Karir",
    description:
      "Berikut ini lowongan kerja yang tersedia di Topgrowth Futures saat ini",
    background_image:
      "https://topgrowth.sgp1.digitaloceanspaces.com/Karir-1581920607204.jpg",
    karirlist: [
      {
        id: 11,
        divisi: "Finance",
        description: "Finance",
        status: true,
        order: null,
        image_url: null,
        bahasaId: 1,
        createdAt: "2020-02-12T04:55:05.977Z",
        detail: [
          {
            id: 14,
            description:
              "<p>Minimum Kualifikasi:</p><ul><li>Memiliki sertifikasi financial consultant/planner</li><li>Memiliki pengetahuan yang luas mengenai sosial media</li><li>Handal dalam bercerita / menjelaskan</li><li>Memiliki kepercayaan diri untuk berbicara di depan banyak orang</li><li>Memiliki kemampuan komunikasi dan presentasi yang baik</li></ul>",
            qualification:
              "<p>Deskripsi pekerjaan :d</p><ul><li>Sebagai penyedia konten:<ul><li>Memberikan tips dan saran mengenai cara memiliki kehidupan keuangan yang sehat pada sosial media perusahaan (IG, FB, Podcast)</li><li>Memberikan konsultasi melalui sosial media</li><li>Berdiskusi mengenai topik-topik keuangan yang menarik melalui podcast</li></ul></li><li>Memberikan seminar / webinar mengenai cara mencapai tujuan keuangan dan memulai investasi</li></ul>",
            bahasaId: 1,
            karirId: 11
          }
        ]
      },
      {
        id: 22,
        divisi: "Commercial",
        description: "Commercial Description",
        status: true,
        order: null,
        image_url: "",
        bahasaId: 1,
        createdAt: "2020-02-17T00:28:22.755Z",
        detail: [
          {
            id: 19,
            description:
              "<p>Deskripsi pekerjaan :d</p><ul><li>Sebagai penyedia konten:<ul><li>Memberikan tips dan saran mengenai cara memiliki kehidupan keuangan yang sehat pada sosial media perusahaan (IG, FB, Podcast)</li><li>Memberikan konsultasi melalui sosial media</li><li>Berdiskusi mengenai topik-topik keuangan yang menarik melalui podcast</li></ul></li><li>Memberikan seminar / webinar mengenai cara mencapai tujuan keuangan dan memulai investasi</li></ul>",
            qualification:
              "<p>Memiliki sertifikasi financial consultant/planner</p><ul><li>Memiliki pengetahuan yang luas mengenai sosial media</li><li>Handal dalam bercerita / menjelaskan</li><li>Memiliki kepercayaan diri untuk berbicara di depan banyak orang</li><li>Memiliki kemampuan komunikasi dan presentasi yang baik</li></ul><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>",
            bahasaId: 1,
            karirId: 22
          }
        ]
      }
    ]
  },
  karir: {}
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_ALL_KARIR": {
      return {
        ...state,
        karirList: action.payload
      };
    }

    case "GET_DETAIL_KARIR": {
      return {
        ...state,
        karir: action.payload
      };
    }
    default:
      return state;
  }
};
