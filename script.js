var EduQuiz = (function () {
  "use strict";

  /* ----------------------------------------------------------
     0. CONFIG — edit peserta & soal di sini
     ---------------------------------------------------------- */
  var participants = ["ADHWA RAFAIZ", "AIMAN CAILANI KASWA", "ALIF ANDRI WIJAYA", "ARKAN ATAYA NARISKAL", "DEEYA HILMY FATHURRAHMAN", "DIMAS RAYHAN ABRAR", "FAUZAN IBRAHIM HISYAM", "FUDHAIL KOKOH ALFATIH", "HABIL RAMA ABDILLAH", "HAFIZ YUSUF WARDHANA", "M. RAFIF SAVA ARIVYA", "M.ALHAFIZ", "MUHAMMAD ABDUL RAHMAN", "MUHAMMAD MARFEL", "MUHAMMAD NAUFAL", "MUHAMMAD NUR HASSAN SYAHME", "MUHAMMAD NUR HUSEIN SYAHME", "PARNAUNGAN SITOMPUL", "RAFA HABIB MAHASIN", "SALMAN AL-FARISY YUNUS", "SHABIAN AL BELDEN", "YAZID HILAL ERDANI", "YUSUF FAHRI NUR HIDAYAT", "ZAIDAN FARHAN MU'AFA", "ZAMZAMI ABDULLAH", "ABDUL KARIM ZAIDAN", "AQIL FATHURRAHMAN SAFIY", "AZZAM HAFIZH SYAUQI", "MUHAMMAD SHODIQ MURTADHO"];

  var questions = [
      // ==========================================
  // 1. ISIM MUFRAD (الاسم المفرد)
  // Marfu': Dammah | Mansub: Fathah | Majrur: Kasrah
  // ==========================================
  { question: "جَاءَ الطَّالِبُ إِلَى الْفَصْلِ، كلمة (الطَّالِبُ) مرفوع بـ ...", options: ["الضمة", "الألف", "الواو", "الفتحة"], answer: 0 },
  { question: "الْمُعَلِّمُ شَرَحَ الدَّرْسَ، كلمة (الْمُعَلِّمُ) مرفوع بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الألف"], answer: 2 },
  { question: "نَجَحَ الطَّالِبُ فِي الِامْتِحَانِ، كلمة (الطَّالِبُ) مرفوع بـ ...", options: ["الواو", "الضمة", "الفتحة", "النون"], answer: 1 },
  { question: "الْكِتَابُ جَدِيدٌ، كلمة (الْكِتَابُ) مرفوع بـ ...", options: ["الضمة", "الألف", "الكسرة", "الفتحة"], answer: 0 },
  { question: "دَخَلَ الطَّبِيبُ الْمُسْتَشْفَى، كلمة (الطَّبِيبُ) مرفوع بـ ...", options: ["الفتحة", "الضمة", "الواو", "الكسرة"], answer: 1 },
  { question: "الْوَلَدُ نَشِيطٌ فِي اللَّعِبِ، كلمة (الْوَلَدُ) مرفوع بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الألف"], answer: 2 },
  { question: "قَرَأَ مُحَمَّدٌ الْقُرْآنَ، كلمة (مُحَمَّدٌ) مرفوع بـ ...", options: ["الضمة", "الفتحة", "الواو", "الكسرة"], answer: 0 },
  { question: "وَصَلَ الْمُسَافِرُ إِلَى الْمَدِينَةِ، كلمة (الْمُسَافِرُ) مرفوع بـ ...", options: ["الألف", "الضمة", "الفتحة", "النون"], answer: 1 },

  { question: "رَأَيْتُ الطَّالِبَ فِي الْمَدْرَسَةِ، كلمة (الطَّالِبَ) منصوب بـ ...", options: ["الضمة", "الكسرة", "الفتحة", "الألف"], answer: 2 },
  { question: "قَرَأَ الْوَلَدُ الْكِتَابَ، كلمة (الْكِتَابَ) منصوب بـ ...", options: ["الفتحة", "الضمة", "الياء", "الكسرة"], answer: 0 },
  { question: "شَرِبَ أَحْمَدُ الْمَاءَ، كلمة (الْمَاءَ) منصوب بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الألف"], answer: 1 },
  { question: "اشْتَرَى أَبِي قَلَمًا جَدِيدًا، كلمة (قَلَمًا) منصوب بـ ...", options: ["الضمة", "الكسرة", "الياء", "الفتحة"], answer: 3 },
  { question: "زَارَ مُحَمَّدٌ الْمَدِينَةَ، كلمة (الْمَدِينَةَ) منصوب بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الواو"], answer: 1 },
  { question: "أَكَلَ الطِّفْلُ التُّفَّاحَةَ، كلمة (التُّفَّاحَةَ) منصوب بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الألف"], answer: 0 },
  { question: "كَتَبَ الطَّالِبُ الدَّرْسَ، كلمة (الدَّرْسَ) منصوب بـ ...", options: ["الضمة", "الفتحة", "الكسرة", "الياء"], answer: 1 },
  { question: "سَمِعْتُ الصَّوْتَ فِي اللَّيْلِ، كلمة (الصَّوْتَ) منصوب بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "الألف"], answer: 2 },

  { question: "ذَهَبْتُ إِلَى الْمَدْرَسَةِ، كلمة (الْمَدْرَسَةِ) مجرور بـ ...", options: ["الضمة", "الفتحة", "الكسرة", "الياء"], answer: 2 },
  { question: "جَلَسَ الطَّالِبُ فِي الْفَصْلِ، كلمة (الْفَصْلِ) مجرور بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "ذَهَبَ أَبِي إِلَى السُّوقِ، كلمة (السُّوقِ) مجرور بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الياء"], answer: 1 },
  { question: "الْكِتَابُ عَلَى الطَّاوِلَةِ، كلمة (الطَّاوِلَةِ) مجرور بـ ...", options: ["الضمة", "الكسرة", "الفتحة", "الألف"], answer: 1 },
  { question: "سَلَّمْتُ عَلَى الْمُدِيرِ، كلمة (الْمُدِيرِ) مجرور بـ ...", options: ["الفتحة", "الياء", "الضمة", "الكسرة"], answer: 3 },
  { question: "الْوَلَدُ فِي الْبَيْتِ، كلمة (الْبَيْتِ) مجرور بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "قَلَمُ الطَّالِبِ جَدِيدٌ، كلمة (الطَّالِبِ) مجرور بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الياء"], answer: 1 },
  { question: "بَابُ الْفَصْلِ مَفْتُوحٌ، كلمة (الْفَصْلِ) مجرور بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "الألف"], answer: 0 },

  // ==========================================
  // 2. ISIM MUTS ANNA (المثنى)
  // Marfu': Alif | Mansub: Yaa | Majrur: Yaa
  // ==========================================
  { question: "جَاءَ الطَّالِبَانِ إِلَى الْفَصْلِ، كلمة (الطَّالِبَانِ) مرفوع بـ ...", options: ["الضمة", "الألف", "الواو", "الفتحة"], answer: 1 },
  { question: "حَضَرَالْمُعَلِّمَانِ إِلَى الْمَدْرَسَةِ، كلمة (الْمُعَلِّمَانِ) مرفوع بـ ...", options: ["الكسرة", "الألف", "الضمة", "النون"], answer: 1 },
  { question: "نَجَحَ الطَّالِبَانِ فِي الِامْتِحَانِ، كلمة (الطَّالِبَانِ) مرفوع بـ ...", options: ["الفتحة", "الواو", "الألف", "الضمة"], answer: 2 },
  { question: "الطَّالِبَانِ مُجْتَهِدَانِ، كلمة (الطَّالِبَانِ) مرفوع بـ ...", options: ["الضمة", "الألف", "الواو", "الفتحة"], answer: 1 },
  { question: "دَخَلَ الْمُدِيرَانِ إِلَى الْمَكْتَبِ، كلمة (الْمُدِيرَانِ) مرفوع بـ ...", options: ["الألف", "الضمة", "الفتحة", "الياء"], answer: 0 },
  { question: "الطَّبِيبَانِ مَاهِرَانِ، كلمة (الطَّبِيبَانِ) مرفوع بـ ...", options: ["الكسرة", "الواو", "الألف", "الضمة"], answer: 2 },
  { question: "وَصَلَ الْمُسَافِرَانِ إِلَى الْمَطَارِ، كلمة (الْمُسَافِرَانِ) مرفوع بـ ...", options: ["الألف", "الفتحة", "الكسرة", "النون"], answer: 0 },
  { question: "الْكِتَابَانِ جَدِيدَانِ، كلمة (الْكِتَابَانِ) مرفوع بـ ...", options: ["الضمة", "الألف", "الفتحة", "الكسرة"], answer: 1 },

  { question: "رَأَيْتُ الطَّالِبَيْنِ فِي الْفَصْلِ، كلمة (الطَّالِبَيْنِ) منصوب بـ ...", options: ["الفتحة", "الكسرة", "الياء", "الألف"], answer: 2 },
  { question: "قَرَأْتُ الْكِتَابَيْنِ فِي الْمَكْتَبَةِ، كلمة (الْكِتَابَيْنِ) منصوب بـ ...", options: ["الياء", "الضمة", "الفتحة", "الكسرة"], answer: 0 },
  { question: "شَاهَدَ أَحْمَدُ الطَّالِبَيْنِ، كلمة (الطَّالِبَيْنِ) منصوب بـ ...", options: ["الكسرة", "الياء", "الضمة", "الألف"], answer: 1 },
  { question: "اشْتَرَيْتُ قَلَمَيْنِ جَدِيدَيْنِ، كلمة (قَلَمَيْنِ) منصوب بـ ...", options: ["الضمة", "الكسرة", "الفتحة", "الياء"], answer: 3 },
  { question: "زَارَ مُحَمَّدٌ الْمَدِينَتَيْنِ، كلمة (الْمَدِينَتَيْنِ) منصوب بـ ...", options: ["الكسرة", "الياء", "الضمة", "الواو"], answer: 1 },
  { question: "أَكَلَ الطِّفْلُ التُّفَّاحَتَيْنِ، كلمة (التُّفَّاحَتَيْنِ) منصوب بـ ...", options: ["الياء", "الكسرة", "الضمة", "الألف"], answer: 0 },
  { question: "كَتَبَ الطَّالِبُ الدَّرْسَيْنِ، كلمة (الدَّرْسَيْنِ) منصوب بـ ...", options: ["الضمة", "الياء", "الكسرة", "الفتحة"], answer: 1 },
  { question: "يَحْتَرِمُ الطَّالِبُ الْمُعَلِّمَيْنِ، كلمة (الْمُعَلِّمَيْنِ) منصوب بـ ...", options: ["الكسرة", "الضمة", "الياء", "الألف"], answer: 2 },

  { question: "ذَهَبْتُ إِلَى الطَّالِبَيْنِ، كلمة (الطَّالِبَيْنِ) مجرور بـ ...", options: ["الكسرة", "الفتحة", "الياء", "الضمة"], answer: 2 },
  { question: "جَلَسَ الطَّالِبُ بَيْنَ الْمُعَلِّمَيْنِ، كلمة (الْمُعَلِّمَيْنِ) مجرور بـ ...", options: ["الياء", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "ذَهَبْتُ إِلَى الْمَدْرَسَتَيْنِ، كلمة (الْمَدْرَسَتَيْنِ) مجرور بـ ...", options: ["الفتحة", "الياء", "الضمة", "الكسرة"], answer: 1 },
  { question: "الْقَلَمُ بَيْنَ الْكِتَابَيْنِ، كلمة (الْكِتَابَيْنِ) مجرور بـ ...", options: ["الضمة", "الياء", "الفتحة", "الألف"], answer: 1 },
  { question: "مَرَرْتُ بِالْمُهَنْدِسَيْنِ، كلمة (الْمُهَنْدِسَيْنِ) مجرور بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الياء"], answer: 3 },
  { question: "الطَّالِبُ جَلَسَ بَيْنَ الْمُدِيرَيْنِ، كلمة (الْمُدِيرَيْنِ) مجرور بـ ...", options: ["الياء", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "سَلَّمْتُ عَلَى الْمُدَرِّسَيْنِ، كلمة (الْمُدَرِّسَيْنِ) مجرور بـ ...", options: ["الفتحة", "الياء", "الضمة", "الكسرة"], answer: 1 },
  { question: "سَافَرَ أَحْمَدُ بِالْقِطَارَيْنِ، كلمة (الْقِطَارَيْنِ) مجرور بـ ...", options: ["الياء", "الضمة", "الفتحة", "الألف"], answer: 0 },

  // ==========================================
  // 3. JAMAK MUDZAKKAR SALIM (جمع المذكر السالم)
  // Marfu': Wawu | Mansub: Yaa | Majrur: Yaa
  // ==========================================
  { question: "نَجَحَ الْمُهَنْدِسُونَ فِي الْعَمَلِ، كلمة (الْمُهَنْدِسُونَ) مرفوع بـ ...", options: ["الضمة", "الواو", "الألف", "النون"], answer: 1 },
  { question: "دَخَلَ الْمُعَلِّمُونَ إِلَى الْفُصُولِ، كلمة (الْمُعَلِّمُونَ) مرفوع بـ ...", options: ["الواو", "الضمة", "الفتحة", "الكسرة"], answer: 0 },
  { question: "خَرَجَ الْمُسَافِرُونَ مِنَ الْمَطَارِ، كلمة (الْمُسَافِرُونَ) مرفوع بـ ...", options: ["الضمة", "النون", "الواو", "الألف"], answer: 2 },
  { question: "حَضَرَ الْمُدَرِّسُونَ إِلَى الْمَدْرَسَةِ، كلمة (الْمُدَرِّسُونَ) مرفوع بـ ...", options: ["الواو", "الضمة", "الفتحة", "الياء"], answer: 0 },
  { question: "الْمُؤْمِنُونَ صَادِقُونَ، كلمة (الْمُؤْمِنُونَ) مرفوع بـ ...", options: ["الضمة", "الألف", "الواو", "النون"], answer: 2 },
  { question: "وَصَلَ الْفَلَّاحُونَ إِلَى الْحَقْلِ، كلمة (الْفَلَّاحُونَ) مرفوع بـ ...", options: ["الواو", "الضمة", "الفتحة", "الكسرة"], answer: 0 },
  { question: "فَازَ الْمُجْتَهِدُونَ فِي الِامْتِحَانِ، كلمة (الْمُجْتَهِدُونَ) مرفوع بـ ...", options: ["الضمة", "الألف", "النون", "الواو"], answer: 3 },
  { question: "يَعْمَلُ الْمُوَظَّفُونَ فِي الْمَكْتَبِ، كلمة (الْمُوَظَّفُونَ) مرفوع بـ ...", options: ["الواو", "الضمة", "الفتحة", "الكسرة"], answer: 0 },

  { question: "رَأَيْتُ الْمُعَلِّمِينَ فِي الْمَدْرَسَةِ، كلمة (الْمُعَلِّمِينَ) منصوب بـ ...", options: ["الفتحة", "الكسرة", "الياء", "الألف"], answer: 2 },
  { question: "كَرَّمَ الْمُدِيرُ الْمُهَنْدِسِينَ، كلمة (الْمُهَنْدِسِينَ) منصوب بـ ...", options: ["الياء", "الضمة", "الفتحة", "الكسرة"], answer: 0 },
  { question: "شَاهَدْتُ الْمُسَافِرِينَ فِي الْمَطَارِ، كلمة (الْمُسَافِرِينَ) منصوب بـ ...", options: ["الكسرة", "الياء", "الضمة", "الألف"], answer: 1 },
  { question: "يَحْتَرِمُ النَّاسُ الْمُصْلِحِينَ، كلمة (الْمُصْلِحِينَ) منصوب بـ ...", options: ["الضمة", "الكسرة", "الفتحة", "الياء"], answer: 3 },
  { question: "قَابَلَ أَبِي الْمُوَظَّفِينَ، كلمة (الْمُوَظَّفِينَ) منصوب بـ ...", options: ["الكسرة", "الياء", "الضمة", "الواو"], answer: 1 },
  { question: "سَاعَدَ الطَّالِبُ الْمُحْتَاجِينَ، كلمة (الْمُحْتَاجِينَ) منصوب بـ ...", options: ["الياء", "الكسرة", "الضمة", "الألف"], answer: 0 },
  { question: "شَكَرَ الْمُدِيرُ الْمُتَفَوِّقِينَ، كلمة (الْمُتَفَوِّقِينَ) منصوب بـ ...", options: ["الضمة", "الياء", "الكسرة", "الفتحة"], answer: 1 },
  { question: "شَاهَدْتُ الْفَلَّاحِينَ فِي الْحَقْلِ، كلمة (الْفَلَّاحِينَ) منصوب بـ ...", options: ["الكسرة", "الضمة", "الياء", "الألف"], answer: 2 },

  { question: "سَلَّمْتُ عَلَى الْمُعَلِّمِينَ، كلمة (الْمُعَلِّمِينَ) مجرور بـ ...", options: ["الكسرة", "الفتحة", "الياء", "الضمة"], answer: 2 },
  { question: "ذَهَبْتُ إِلَى الْمَكْتَبِ مَعَ الْمُهَنْدِسِينَ، كلمة (الْمُهَنْدِسِينَ) مجرور بـ ...", options: ["الياء", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "مَرَرْتُ بِالْمُصَلِّينَ فِي الْمَسْجِدِ، كلمة (الْمُصَلِّينَ) مجرور بـ ...", options: ["الفتحة", "الياء", "الضمة", "الكسرة"], answer: 1 },
  { question: "يَذْهَبُ الطُّلَّابُ مَعَ الْمُعَلِّمِينَ، كلمة (الْمُعَلِّمِينَ) مجرور بـ ...", options: ["الضمة", "الياء", "الفتحة", "الألف"], answer: 1 },
  { question: "جَلَسْتُ مَعَ الْمُدَرِّسِينَ، كلمة (الْمُدَرِّسِينَ) مجرور بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الياء"], answer: 3 },
  { question: "سَلَّمَ أَبِي عَلَى الْمُسَافِرِينَ، كلمة (الْمُسَافِرِينَ) مجرور بـ ...", options: ["الياء", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "الْتَقَيْتُ بِالْمُوَظَّفِينَ فِي الْمَكْتَبِ، كلمة (الْمُوَظَّفِينَ) مجرور بـ ...", options: ["الفتحة", "الياء", "الضمة", "الكسرة"], answer: 1 },
  { question: "عُدْتُ مَعَ الْفَلَّاحِينَ مِنَ الْحَقْلِ، كلمة (الْفَلَّاحِينَ) مجرور بـ ...", options: ["الياء", "الضمة", "الفتحة", "الألف"], answer: 0 },

  // ==========================================
  // 4. JAMAK MUANNAS SALIM (جمع المؤنث السالم)
  // Marfu': Dammah | Mansub: Kasrah | Majrur: Kasrah
  // ==========================================
  { question: "جَاءَتِ الطَّالِبَاتُ إِلَى الْفَصْلِ، كلمة (الطَّالِبَاتُ) مرفوع بـ ...", options: ["الضمة", "الألف", "الكسرة", "الفتحة"], answer: 0 },
  { question: "حَضَرَتِ الْمُعَلِّمَاتُ إِلَى الْمَدْرَسَةِ، كلمة (الْمُعَلِّمَاتُ) مرفوع بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "النون"], answer: 1 },
  { question: "نَجَحَتِ الطَّالِبَاتُ فِي الِامْتِحَانِ، كلمة (الطَّالِبَاتُ) مرفوع بـ ...", options: ["الفتحة", "الضمة", "الكسرة", "الألف"], answer: 1 },
  { question: "الْمُعَلِّمَاتُ مُجْتَهِدَاتٌ، كلمة (الْمُعَلِّمَاتُ) مرفوع بـ ...", options: ["الضمة", "الألف", "الواو", "الفتحة"], answer: 0 },
  { question: "الطَّبِيبَاتُ مَاهِرَاتٌ، كلمة (الطَّبِيبَاتُ) مرفوع بـ ...", options: ["الكسرة", "الضمة", "الواو", "الألف"], answer: 1 },
  { question: "وَصَلَتِ الْمُسَافِرَاتُ إِلَى الْمَطَارِ، كلمة (الْمُسَافِرَاتُ) مرفوع بـ ...", options: ["الضمة", "الفتحة", "الكسرة", "النون"], answer: 0 },
  { question: "الطَّالِبَاتُ نَشِيطَاتٌ فِي الْفَصْلِ، كلمة (الطَّالِبَاتُ) مرفوع بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "الواو"], answer: 1 },
  { question: "خَرَجَتِ الْمُمَرِّضَاتُ مِنَ الْمُسْتَشْفَى، كلمة (الْمُمَرِّضَاتُ) مرفوع بـ ...", options: ["الضمة", "الفتحة", "الكسرة", "الألف"], answer: 0 },

  { question: "رَأَيْتُ الطَّالِبَاتِ فِي الْفَصْلِ، كلمة (الطَّالِبَاتِ) منصوب بـ ...", options: ["الفتحة", "الكسرة", "الياء", "الضمة"], answer: 1 },
  { question: "قَابَلْتُ الْمُعَلِّمَاتِ بَعْدَ الدَّرْسِ، كلمة (الْمُعَلِّمَاتِ) منصوب بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "الألف"], answer: 0 },
  { question: "شَاهَدْتُ الْمُمَرِّضَاتِ فِي الْمُسْتَشْفَى، كلمة (الْمُمَرِّضَاتِ) منصوب بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الياء"], answer: 1 },
  { question: "كَرَّمَ الْمُدِيرُ الطَّالِبَاتِ، كلمة (الطَّالِبَاتِ) منصوب بـ ...", options: ["الضمة", "الفتحة", "الكسرة", "الألف"], answer: 2 },
  { question: "زَارَتْ أُمِّي الْمُعَلِّمَاتِ، كلمة (الْمُعَلِّمَاتِ) منصوب بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الواو"], answer: 1 },
  { question: "سَاعَدَتِ الْمُدَرِّسَةُ الطَّالِبَاتِ، كلمة (الطَّالِبَاتِ) منصوب بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "أَكْرَمَ الْمُدِيرُ الْمُوَظَّفَاتِ، كلمة (الْمُوَظَّفَاتِ) منصوب بـ ...", options: ["الضمة", "الكسرة", "الفتحة", "الياء"], answer: 1 },
  { question: "يَحْتَرِمُ الطُّلَّابُ الْمُعَلِّمَاتِ، كلمة (الْمُعَلِّمَاتِ) منصوب بـ ...", options: ["الفتحة", "الضمة", "الكسرة", "الألف"], answer: 2 },

  { question: "ذَهَبْتُ إِلَى الْمُدَرِّسَاتِ، كلمة (الْمُدَرِّسَاتِ) مجرور بـ ...", options: ["الفتحة", "الضمة", "الكسرة", "الياء"], answer: 2 },
  { question: "جَلَسْتُ مَعَ الطَّالِبَاتِ فِي الْفَصْلِ، كلمة (الطَّالِبَاتِ) مجرور بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "ذَهَبَتِ الْمُعَلِّمَاتُ إِلَى الْمُدَرِّسَاتِ، كلمة (الْمُدَرِّسَاتِ) مجرور بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الياء"], answer: 1 },
  { question: "مَرَرْتُ بِالْمُوَظَّفَاتِ فِي الْمَكْتَبِ، كلمة (الْمُوَظَّفَاتِ) مجرور بـ ...", options: ["الضمة", "الكسرة", "الفتحة", "الألف"], answer: 1 },
  { question: "يَذْهَبُ الطُّلَّابُ مَعَ الْمُدَرِّسَاتِ، كلمة (الْمُدَرِّسَاتِ) مجرور بـ ...", options: ["الفتحة", "الضمة", "الياء", "الكسرة"], answer: 3 },
  { question: "كُتُبُ الطَّالِبَاتِ فِي الْحَقِيبَةِ، كلمة (الطَّالِبَاتِ) مجرور بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "ذَهَبَتْ أُمِّي مَعَ الْمُمَرِّضَاتِ، كلمة (الْمُمَرِّضَاتِ) مجرور بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الياء"], answer: 1 },
  { question: "سَلَّمْتُ عَلَى الطَّالِبَاتِ، كلمة (الطَّالِبَاتِ) مجرور بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "الألف"], answer: 0 },

  // ==========================================
  // 5. JAMAK TAKSIR (جمع التكسير)
  // Marfu': Dammah | Mansub: Fathah | Majrur: Kasrah
  // ==========================================
  { question: "جَاءَ الطُّلَّابُ إِلَى الْفَصْلِ، كلمة (الطُّلَّابُ) مرفوع بـ ...", options: ["الضمة", "الألف", "الواو", "الفتحة"], answer: 0 },
  { question: "حَضَرَ الرِّجَالُ إِلَى الْمَسْجِدِ، كلمة (الرِّجَالُ) مرفوع بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "النون"], answer: 1 },
  { question: "الْكُتُبُ عَلَى الطَّاوِلَةِ، كلمة (الْكُتُبُ) مرفوع بـ ...", options: ["الفتحة", "الضمة", "الكسرة", "الألف"], answer: 1 },
  { question: "وَصَلَ الضُّيُوفُ إِلَى الْفُنْدُقِ، كلمة (الضُّيُوفُ) مرفوع بـ ...", options: ["الضمة", "الألف", "الواو", "الفتحة"], answer: 0 },
  { question: "الْأَطْفَالُ يَلْعَبُونَ فِي الْحَدِيقَةِ، كلمة (الْأَطْفَالُ) مرفوع بـ ...", options: ["الكسرة", "الضمة", "الواو", "الألف"], answer: 1 },
  { question: "الْأَقْلَامُ جَدِيدَةٌ، كلمة (الْأَقْلَامُ) مرفوع بـ ...", options: ["الضمة", "الفتحة", "الكسرة", "النون"], answer: 0 },
  { question: "أَكَلَ الْأَوْلَادُ الْفَوَاكِهَ، كلمة (الْأَوْلَادُ) مرفوع بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "الواو"], answer: 1 },
  { question: "يَحْتَرِمُ النَّاسُ الْعُلَمَاءَ، كلمة (النَّاسُ) مرفوع بـ ...", options: ["الضمة", "الفتحة", "الكسرة", "الألف"], answer: 0 },

  { question: "قَرَأَ الطُّلَّابُ الدُّرُوسَ، كلمة (الدُّرُوسَ) منصوب بـ ...", options: ["الضمة", "الكسرة", "الفتحة", "الياء"], answer: 2 },
  { question: "رَأَيْتُ الطُّلَّابَ فِي الْفَصْلِ، كلمة (الطُّلَّابَ) منصوب بـ ...", options: ["الفتحة", "الضمة", "الكسرة", "الألف"], answer: 0 },
  { question: "قَرَأْتُ الْكُتُبَ فِي الْمَكْتَبَةِ، كلمة (الْكُتُبَ) منصوب بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الياء"], answer: 1 },
  { question: "شَاهَدْتُ الْأَطْفَالَ فِي الْحَدِيقَةِ، كلمة (الْأَطْفَالَ) منصوب بـ ...", options: ["الضمة", "الكسرة", "الفتحة", "الألف"], answer: 2 },
  { question: "اشْتَرَيْتُ أَقْلَامًا جَدِيدَةً، كلمة (أَقْلَامًا) منصوب بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الواو"], answer: 1 },
  { question: "زَارَ أَبِي الْمُدُنَ الْكَبِيرَةَ، كلمة (الْمُدُنَ) منصوب بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الألف"], answer: 0 },
  { question: "سَمِعْتُ الْأَصْوَاتَ فِي اللَّيْلِ، كلمة (الْأَصْوَاتَ) منصوب بـ ...", options: ["الضمة", "الفتحة", "الكسرة", "الياء"], answer: 1 },
  { question: "شَاهَدْتُ الطُّيُورَ فِي السَّمَاءِ، كلمة (الطُّيُورَ) منصوب بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "الألف"], answer: 2 },

  { question: "ذَهَبْتُ إِلَى الْمَدَارِسِ، كلمة (الْمَدَارِسِ) مجرور بـ ...", options: ["الفتحة", "الضمة", "الكسرة", "الياء"], answer: 2 },
  { question: "جَلَسَ الطُّلَّابُ فِي الْفُصُولِ، كلمة (الْفُصُولِ) مجرور بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "مَرَرْتُ بِالْأَسْوَاقِ فِي الصَّبَاحِ، كلمة (الْأَسْوَاقِ) مجرور بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الياء"], answer: 1 },
  { question: "قَلَمُ الطَّالِبِ بَيْنَ الْكُتُبِ، كلمة (الْكُتُبِ) مجرور بـ ...", options: ["الضمة", "الكسرة", "الفتحة", "الألف"], answer: 1 },
  { question: "ذَهَبَ أَبِي مَعَ الرِّجَالِ، كلمة (الرِّجَالِ) مجرور بـ ...", options: ["الفتحة", "الضمة", "الياء", "الكسرة"], answer: 3 },
  { question: "سَلَّمْتُ عَلَى الضُّيُوفِ بَعْدَ الطَّعَامِ، كلمة (الضُّيُوفِ) مجرور بـ ...", options: ["الكسرة", "الفتحة", "الضمة", "الألف"], answer: 0 },
  { question: "سَافَرَ أَحْمَدُ بِالطُّرُقِ الْقَدِيمَةِ، كلمة (الطُّرُقِ) مجرور بـ ...", options: ["الفتحة", "الكسرة", "الضمة", "الياء"], answer: 1 },
  { question: "الْكُتُبُ فَوْقَ الْمَكْتَبِ، كلمة (الْمَكْتَبِ) مجرور بـ ...", options: ["الكسرة", "الضمة", "الفتحة", "الألف"], answer: 0 }

  ];

  /* ----------------------------------------------------------
   CONSTANTS
   ---------------------------------------------------------- */
var TIME_LIMIT_SECONDS  = 120;
var QUESTIONS_PER_GAME  = 10;
var POINTS_CORRECT      = 5;
var POINTS_WRONG        = -2;
var FEEDBACK_DELAY_MS   = 850;
var RANKING_TIME_WEIGHT = 0.5;
var RANKING_MAX_TIME    = 300;

var LS_KEYS = {
  leaderboard: "eduquiz_leaderboard",
  session:     "eduquiz_session"
};

/* ----------------------------------------------------------
   1. STORAGE
   ---------------------------------------------------------- */
function safeGet(key) {
  try {
    var raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn("Gagal membaca localStorage:", key, e);
    return null;
  }
}

function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn("Gagal menyimpan localStorage:", key, e);
    return false;
  }
}

function safeRemove(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    console.warn("Gagal menghapus localStorage:", key, e);
  }
}

/* ----------------------------------------------------------
   2. LEADERBOARD
   ---------------------------------------------------------- */

// FIX: tambah guard elapsed negatif (clock skew)
function calcComposite(score, elapsed) {
  var safeElapsed = Math.max(0, Math.min(elapsed || 0, RANKING_MAX_TIME));
  return score + (RANKING_MAX_TIME - safeElapsed) * RANKING_TIME_WEIGHT;
}

function loadLeaderboard() {
  var data = safeGet(LS_KEYS.leaderboard);
  return data && typeof data === "object" ? data : {};
}

function saveLeaderboard(data) {
  safeSet(LS_KEYS.leaderboard, data);
}

// BUG FIX: kurung kurawal penutup if salah posisi sebelumnya —
// `return board` ada di DALAM blok if, sehingga return undefined jika tidak update.
function submitScore(name, result) {
  var board    = loadLeaderboard();
  var existing = board[name];

  var newComposite = calcComposite(result.score, result.elapsed);
  var oldComposite = existing
    ? calcComposite(existing.score, existing.elapsed)
    : -Infinity;

  if (newComposite > oldComposite) {
    board[name] = {
      score:     result.score,
      elapsed:   result.elapsed || 0,
      correct:   result.correct || 0,
      wrong:     result.wrong   || 0,
      composite: newComposite,
      date:      new Date().toISOString()
    };
    saveLeaderboard(board);
  }

  return board; // FIX: selalu return board, bukan hanya saat update
}

function getSortedLeaderboard() {
  var board = loadLeaderboard();

  var rows = Object.keys(board).map(function (name) {
    var r = board[name];
    return {
      name:      name,
      score:     r.score     || 0,
      elapsed:   r.elapsed   || 0,
      correct:   r.correct   || 0,
      wrong:     r.wrong     || 0,
      date:      r.date      || null, // FIX: expose date untuk UI
      composite: r.composite != null
        ? r.composite
        : calcComposite(r.score, r.elapsed) // backward-compat
    };
  });

  rows.sort(function (a, b) {
    if (b.composite !== a.composite) return b.composite - a.composite;
    return a.name.localeCompare(b.name); // tie-breaker deterministik
  });

  return rows;
}

function resetLeaderboard() {
  safeRemove(LS_KEYS.leaderboard);
}

/* ----------------------------------------------------------
   3. QUESTIONS
   ---------------------------------------------------------- */
function shuffleArray(arr) {
  var copy = arr.slice();
  for (var i = copy.length - 1; i > 0; i--) {
    var j   = Math.floor(Math.random() * (i + 1));
    var tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

function buildGameQuestionSet() {
  var pool = shuffleArray(questions).slice(0, Math.min(QUESTIONS_PER_GAME, questions.length));
  return pool.map(function (q) {
    var optionOrder    = shuffleArray(q.options.map(function (_, idx) { return idx; }));
    var newOptions     = optionOrder.map(function (origIdx) { return q.options[origIdx]; });
    var newAnswerIndex = optionOrder.indexOf(q.answer);
    return {
      question: q.question,
      options:  newOptions,
      answer:   newAnswerIndex
    };
  });
}

/* ----------------------------------------------------------
   4. SESSION
   ---------------------------------------------------------- */
function loadSession() {
  return safeGet(LS_KEYS.session);
}

function saveSession(session) {
  safeSet(LS_KEYS.session, session);
}

function clearSession() {
  safeRemove(LS_KEYS.session);
}

function createNewSession(participantName) {
  var session = {
    participant:     participantName,
    score:           0,
    correct:         0,
    wrong:           0,
    currentIndex:    0,
    answeredCurrent: false,
    startedAt:       Date.now(),
    timeLimit:       TIME_LIMIT_SECONDS,
    questionSet:     buildGameQuestionSet(),
    resultSaved:     false,
    finished:        false
  };
  saveSession(session);
  return session;
}

/* ----------------------------------------------------------
   5. HELPERS
   ---------------------------------------------------------- */
function initials(name) {
  return (name || "?").trim().charAt(0).toUpperCase();
}

function formatTime(totalSeconds) {
  var s = Math.max(0, totalSeconds);
  var m = Math.floor(s / 60);
  var r = s % 60;
  return (m < 10 ? "0" + m : m) + ":" + (r < 10 ? "0" + r : r);
}

function getElapsedSeconds(session) {
  return Math.floor((Date.now() - session.startedAt) / 1000);
}

function getRemainingSeconds(session) {
  return session.timeLimit - getElapsedSeconds(session);
}

function escapeHtml(str) {
  var div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ----------------------------------------------------------
   6. UI — INDEX PAGE
   ---------------------------------------------------------- */
var indexState = { selected: null };
var indexParticipants = participants.slice();

function renderParticipants(filterText) {
  var listEl  = document.getElementById("participantList");
  var emptyEl = document.getElementById("participantEmpty");
  var countEl = document.getElementById("participantCount");
  if (!listEl) return;

  var q = (filterText || "").toLowerCase().trim();
  var filtered = q
    ? indexParticipants.filter(function (n) {
        return n.toLowerCase().indexOf(q) !== -1;
      })
    : indexParticipants;

  if (countEl) countEl.textContent = indexParticipants.length + " peserta";

  listEl.innerHTML = "";

  if (filtered.length === 0) {
    if (emptyEl) emptyEl.classList.add("is-visible");
    return;
  }
  if (emptyEl) emptyEl.classList.remove("is-visible");

  filtered.forEach(function (name) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "participant" + (name === indexState.selected ? " is-active" : "");
    btn.setAttribute("data-name", name);
    btn.setAttribute("aria-pressed", name === indexState.selected ? "true" : "false");
    btn.setAttribute("role", "listitem");
    btn.innerHTML =
      '<span class="participant__avatar">' + initials(name) + "</span>" +
      '<span class="participant__name">' + escapeHtml(name) + "</span>";
    btn.addEventListener("click", function () { selectParticipant(name); });
    listEl.appendChild(btn);
  });
}

function selectParticipant(name) {
  indexState.selected = name;

  document.querySelectorAll(".participant").forEach(function (card) {
    var active = card.getAttribute("data-name") === name;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", active ? "true" : "false");
    if (active) card.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });

  var bar  = document.getElementById("selectedBar");
  var bName = document.getElementById("selectedBarName");
  if (bar)   bar.hidden = false;
  if (bName) bName.textContent = name;

  var warn = document.getElementById("selectWarning");
  if (warn) warn.classList.remove("is-visible");

  var startBtn = document.getElementById("startBtn");
  if (startBtn) startBtn.disabled = false;
}

function wireParticipantSearch() {
  var el = document.getElementById("participantSearch");
  if (!el) return;
  el.addEventListener("input", function () {
    renderParticipants(this.value);
  });
}

function wireAddParticipant() {
  var inputEl = document.getElementById("addParticipantInput");
  var btnEl   = document.getElementById("addParticipantBtn");
  var errEl   = document.getElementById("addParticipantError");
  if (!inputEl || !btnEl) return;

  function tryAdd() {
    var val = inputEl.value.trim();
    if (!val) {
      errEl.textContent = "Masukkan nama terlebih dahulu.";
      return;
    }
    var dup = indexParticipants.some(function (n) {
      return n.toLowerCase() === val.toLowerCase();
    });
    if (dup) {
      errEl.textContent = "Nama sudah ada dalam daftar.";
      return;
    }
    errEl.textContent = "";
    indexParticipants.push(val);
    inputEl.value = "";

    var searchEl = document.getElementById("participantSearch");
    if (searchEl) searchEl.value = "";
    renderParticipants("");
    selectParticipant(val);

    var listEl = document.getElementById("participantList");
    if (listEl) listEl.scrollTop = listEl.scrollHeight;
  }

  btnEl.addEventListener("click", tryAdd);
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") tryAdd();
  });
  inputEl.addEventListener("input", function () {
    errEl.textContent = "";
  });
}

function initIndexPage() {
  renderParticipants();
  wireParticipantSearch();
  wireAddParticipant();
  renderPodiumAndTable();
  wireIndexEvents();
}

// Perbarui initIndexPage() — tambahkan 2 baris ini setelah renderParticipants():
function initIndexPage() {
  renderParticipants();
  wireParticipantSearch();   // ← tambah ini
  wireAddParticipant();      // ← dan ini
  renderPodiumAndTable();
  wireIndexEvents();
}

// FIX: podium & tabel sekarang juga tampilkan waktu (elapsed) sebagai
// konteks visual tie-breaker, agar pemain mengerti kenapa ranking berbeda
// meski skor sama.
function renderPodiumAndTable() {
  var rows     = getSortedLeaderboard();
  var podiumEl = document.getElementById("podium");
  var bodyEl   = document.getElementById("lbBody");
  var emptyEl  = document.getElementById("lbEmpty");
  var tableEl  = document.getElementById("lbTable");

  if (!podiumEl || !bodyEl) return;

  if (rows.length === 0) {
    podiumEl.innerHTML = "";
    bodyEl.innerHTML   = "";
    if (tableEl) tableEl.style.display = "none";
    if (emptyEl) emptyEl.style.display = "block";
    return;
  }

  if (tableEl) tableEl.style.display = "";
  if (emptyEl) emptyEl.style.display = "none";

  var medals = ["\uD83E\uDD47", "\uD83E\uDD48", "\uD83E\uDD49"];
  var top3   = rows.slice(0, 3);
  var order  = [1, 0, 2];

  var podiumHtml = '<div class="podium">';
  order.forEach(function (rankIdx) {
    var slotNum = rankIdx + 1;
    var entry   = top3[rankIdx];
    if (!entry) {
      podiumHtml +=
        '<div class="podium__slot podium__slot--' + slotNum + '">' +
        '<div class="podium__bar"></div></div>';
      return;
    }
    podiumHtml +=
      '<div class="podium__slot podium__slot--' + slotNum + '">' +
      '<span class="podium__medal">' + medals[rankIdx] + "</span>" +
      '<span class="podium__name">' + escapeHtml(entry.name) + "</span>" +
      '<span class="podium__score">' + entry.score + " pts</span>" +
      '<span class="podium__time">' + formatTime(entry.elapsed) + "</span>" +
      '<div class="podium__bar">#' + slotNum + "</div>" +
      "</div>";
  });
  podiumHtml += "</div>";
  podiumEl.innerHTML = podiumHtml;

  var medalFor = function (i) {
    return i === 0 ? "\uD83E\uDD47 " : i === 1 ? "\uD83E\uDD48 " : i === 2 ? "\uD83E\uDD49 " : "";
  };

  bodyEl.innerHTML = rows.map(function (r, i) {
    return (
      "<tr>" +
      '<td class="lb-rank">' + medalFor(i) + (i + 1) + "</td>" +
      '<td class="lb-name">' + escapeHtml(r.name) + "</td>" +
      '<td class="lb-score">' + r.score + "</td>" +
      '<td class="lb-time">' + formatTime(r.elapsed) + "</td>" + // FIX: tambah kolom waktu
      "</tr>"
    );
  }).join("");
}

function wireIndexEvents() {
  var startBtn = document.getElementById("startBtn");
  var warning  = document.getElementById("selectWarning");

  if (startBtn) {
    startBtn.addEventListener("click", function () {
      if (!indexState.selected) {
        if (warning) warning.classList.add("is-visible");
        return;
      }
      clearSession();
      createNewSession(indexState.selected);
      window.location.href = "game.html";
    });
  }

  var resetBtn    = document.getElementById("resetLbBtn");
  var overlay     = document.getElementById("resetOverlay");
  var cancelBtn   = document.getElementById("cancelResetBtn");
  var confirmBtn  = document.getElementById("confirmResetBtn");

  function openModal()  { if (overlay) overlay.classList.add("is-open"); }
  function closeModal() { if (overlay) overlay.classList.remove("is-open"); }

  if (resetBtn)  resetBtn.addEventListener("click", openModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
  }
  if (confirmBtn) {
    confirmBtn.addEventListener("click", function () {
      resetLeaderboard();
      renderPodiumAndTable();
      closeModal();
    });
  }
}

function initIndexPage() {
  renderParticipants();
  renderPodiumAndTable();
  wireIndexEvents();
}

/* ----------------------------------------------------------
   7. UI — GAME PAGE
   ---------------------------------------------------------- */
var gameState = {
  session:       null,
  timerInterval: null
};

function initGamePage() {
  var session = loadSession();
  if (!session || !session.participant) {
    window.location.href = "index.html";
    return;
  }

  gameState.session = session;

  var avatarEl = document.getElementById("playerAvatar");
  var nameEl   = document.getElementById("playerName");
  if (avatarEl) avatarEl.textContent = initials(session.participant);
  if (nameEl)   nameEl.textContent   = session.participant;

  renderScore();
  renderQuestion();
  wireGameEvents();
  startTimerLoop();
}

function renderScore() {
  var el = document.getElementById("scoreValue");
  if (!el) return;
  var score = gameState.session.score;
  el.textContent = score;
  el.classList.toggle("is-neg", score < 0);
}

function renderQuestion() {
  var session = gameState.session;
  var total   = session.questionSet.length;
  var index   = session.currentIndex;

  if (index >= total) {
    endGame("completed");
    return;
  }

  var q = session.questionSet[index];

  var qText = document.getElementById("questionText");
  if (qText) qText.textContent = q.question;

  var progressLabel   = document.getElementById("progressLabel");
  var progressPercent = document.getElementById("progressPercent");
  var progressFill    = document.getElementById("progressFill");
  var pct = Math.round((index / total) * 100);
  if (progressLabel)   progressLabel.textContent   = "Soal " + (index + 1) + " / " + total;
  if (progressPercent) progressPercent.textContent = pct + "%";
  if (progressFill)    progressFill.style.width    = pct + "%";

  var grid    = document.getElementById("answersGrid");
  var letters = ["A", "B", "C", "D"];
  if (grid) {
    grid.innerHTML = "";
    q.options.forEach(function (opt, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.setAttribute("data-index", i);
      btn.innerHTML =
        '<span class="answer__letter">' + letters[i] + "</span>" +
        "<span>" + escapeHtml(opt) + "</span>";
      btn.addEventListener("click", function () { handleAnswer(i); });
      grid.appendChild(btn);
    });
  }

  var feedback = document.getElementById("feedback");
  if (feedback) {
    feedback.textContent = "\u00A0";
    feedback.className   = "feedback";
  }

  // FIX: reset answeredCurrent SETELAH DOM dirender, bukan sebelumnya,
  // agar tidak ada race condition jika timeout hapus soal sebelum render selesai.
  session.answeredCurrent = false;
  saveSession(session);
}

function handleAnswer(selectedIndex) {
  var session = gameState.session;
  if (session.finished || session.answeredCurrent) return;

  session.answeredCurrent = true; // set duluan sebelum async apapun

  var q         = session.questionSet[session.currentIndex];
  var isCorrect = selectedIndex === q.answer;

  if (isCorrect) {
    session.score   += POINTS_CORRECT;
    session.correct += 1;
  } else {
    session.score += POINTS_WRONG;
    session.wrong += 1;
  }

  saveSession(session);
  renderScore();

  var buttons = document.querySelectorAll(".answer");
  buttons.forEach(function (btn) {
    var idx = parseInt(btn.getAttribute("data-index"), 10);
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add("is-correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("is-wrong");
    } else {
      btn.classList.add("is-dimmed");
    }
  });

  var feedback = document.getElementById("feedback");
  if (feedback) {
    feedback.textContent = isCorrect
      ? "\u2713 Benar! +5 poin"
      : "\u2715 Salah! -2 poin";
    feedback.className = "feedback is-visible " + (isCorrect ? "is-correct" : "is-wrong");
  }

  window.setTimeout(function () {
    if (session.finished) return;
    session.currentIndex += 1;
    saveSession(session);
    renderQuestion();
  }, FEEDBACK_DELAY_MS);
}

function startTimerLoop() {
  updateTimerUI();
  gameState.timerInterval = window.setInterval(function () {
    var session = gameState.session;
    if (session.finished) {
      clearInterval(gameState.timerInterval);
      return;
    }
    var remaining = getRemainingSeconds(session);
    if (remaining <= 0) {
      updateTimerUI(0);
      endGame("timeout");
      return;
    }
    updateTimerUI(remaining);
  }, 250);
}

// FIX: tambah null-check eksplisit untuk tiap elemen sebelum akses
function updateTimerUI(remainingOverride) {
  var session   = gameState.session;
  var remaining = typeof remainingOverride === "number"
    ? remainingOverride
    : getRemainingSeconds(session);
  remaining = Math.max(0, remaining);

  var text = document.getElementById("timerText");
  if (text) text.textContent = formatTime(remaining);

  var ring = document.getElementById("timerRing");
  if (!ring) return;

  var pct = (remaining / session.timeLimit) * 100;
  ring.style.setProperty("--pct", pct.toFixed(2));
  ring.classList.remove("state-warning", "state-danger");
  if (remaining <= 30) {
    ring.classList.add("state-danger");
  } else if (remaining <= 60) {
    ring.classList.add("state-warning");
  }
}

function endGame(reason) {
  var session = gameState.session;
  if (session.finished) return;
  session.finished = true;
  saveSession(session);

  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }

  document.querySelectorAll(".answer").forEach(function (btn) {
    btn.disabled = true;
  });

  // FIX: guard resultSaved untuk cegah double-submit
  if (!session.resultSaved) {
    var elapsed = Math.min(session.timeLimit, getElapsedSeconds(session));
    submitScore(session.participant, {
      score:   session.score,
      elapsed: elapsed,
      correct: session.correct,
      wrong:   session.wrong
    });
    session.resultSaved = true;
    saveSession(session);
  }

  showResultModal();
}

function showResultModal() {
  var session  = gameState.session;
  var overlay  = document.getElementById("resultOverlay");
  var playerEl = document.getElementById("resultPlayer");
  var scoreEl  = document.getElementById("resultScore");
  var correctEl = document.getElementById("resultCorrect");
  var wrongEl  = document.getElementById("resultWrong");
  var timeEl   = document.getElementById("resultTime"); // opsional: elemen baru

  if (playerEl)  playerEl.textContent  = "\uD83D\uDC64 " + session.participant.toUpperCase();
  if (scoreEl)   scoreEl.textContent   = session.score;
  if (correctEl) correctEl.textContent = session.correct;
  if (wrongEl)   wrongEl.textContent   = session.wrong;
  // FIX: tampilkan waktu di modal hasil jika elemen tersedia
  if (timeEl) {
    var elapsed = Math.min(session.timeLimit, getElapsedSeconds(session));
    timeEl.textContent = formatTime(elapsed);
  }

  if (overlay) overlay.classList.add("is-open");
}

function wireGameEvents() {
  var backBtn = document.getElementById("backToMenuBtn");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      clearSession();
      window.location.href = "index.html";
    });
  }
}

/* ----------------------------------------------------------
   PUBLIC API
   ---------------------------------------------------------- */
return {
  initIndexPage: initIndexPage,
  initGamePage:  initGamePage
};})();

function changeStyle(sheet) {
  // Mengambil elemen <link> berdasarkan ID
  const themeLink = document.getElementById('theme-style');
  
  // Mengubah atribut href sesuai file CSS yang diklik
  if (themeLink) {
    themeLink.setAttribute('href', sheet);
    
    // Opsional: Simpan pilihan style ke localStorage agar tidak reset saat refresh
    localStorage.setItem('selectedStyle', sheet);
  }
}

// Opsional: Muat style yang terakhir dipilih saat halaman dibuka kembali
window.addEventListener('DOMContentLoaded', () => {
  const savedStyle = localStorage.getItem('selectedStyle');
  if (savedStyle) {
    changeStyle(savedStyle);
  }
});