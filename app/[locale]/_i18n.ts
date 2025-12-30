// app/[locale]/_i18n.ts

export const locales = ["fr", "he"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const dict = {
  fr: {
    nav: {
      home: "Accueil",
      commander: "Commander",
      services: "Services",
      contact: "Contact",
      learnMore: "En savoir plus",
      legal: "Pages légales",
      privacy: "Confidentialité",
      terms: "CGV",
      halakha: "Halakha",
      pro: "Pro",
      verifications: "Vérifications",
      reparations: "Réparations",
      seferTorah: "Séfer Torah",
    },
    cta: {
      whatsapp: "WhatsApp",
      call: "Appeler",
      commander: "Commander",
      commanderOnline: "Faire une demande",
      start: "Commencer (30 sec)",
      goToForm: "Aller au formulaire",
    },

    brand: {
      name: "Merkaz HaSTaM",
      tagline:
        "Sofrout en Israël — STaM (Sefer Torah, Téfilines, Mézouzot) & écritures sur parchemin • Netanya, Jérusalem, Beit Shemesh",
    },

    common: {
      noPayment: "Aucun paiement à ce stade.",
      photosAfter:
        "Vous pouvez envoyer des photos sur WhatsApp juste après la demande.",
      noteCoordination:
        "Merkaz HaSTaM est un centre de coordination. Le travail est pris en charge par un sofer STaM diplômé et expérimenté.",
      // Conservé pour éviter de casser d’autres pages si elles l’utilisent
      delaysTitle: "Processus de prise en charge",
      delaysText:
        "Après votre demande : analyse → orientation → devis clair → prise en charge par un sofer STaM diplômé et expérimenté.",
      examplesTitle: "Exemples de situations traitées",
      examples1:
        "Mézouzot : lettres affaiblies détectées lors d’une vérification.",
      examples2:
        "Téfilines : contrôle approfondi avant une décision (réparation / remplacement / achat).",
      examples3:
        "Séfer Torah : orientation et coordination après constat d’un besoin de suivi.",
    },

    home: {
      badge: "Demande en ligne (30 sec) — aucun paiement pour l’instant",

      // ✅ Ton H1 final
      h1: "STaM en Israël — cadre halakhique strict, sofrim diplômés & expérimentés",
      subtitle:
        "STaM = Sefer Torah, Téfilines, Mézouzot • Vérification, achat, restauration • Écritures sur parchemin (Meguilat Esther, etc.).",
      micro:
        "Décrivez votre besoin en 30 secondes → prise en charge de la demande → réponse claire. Service disponible notamment à Netanya, Jérusalem et Beit Shemesh.",

      // TRUST BOX (droite)
      trustTitle: "Cadre halakhique strict. Devis clair. Suivi structuré.",
      trust1:
        "Cadre halakhique strict : vérification/écriture selon les exigences de la Halakha, par un sofer STaM diplômé et expérimenté.",
      trust2:
        "Devis clair avant toute action : estimation transparente et options proposées avant décision.",
      trust3:
        "Compte-rendu clair : explication simple de la situation et des options, avec un suivi structuré.",

      // WHY
      whyTitle: "Pourquoi passer par Merkaz HaSTaM ?",
      whyIntro:
        "Nous assurons un cadre halakhique strict — selon les exigences de la Halakha — une coordination sérieuse et un suivi structuré.",
      why1: "Pris en charge par un sofer STaM diplômé et expérimenté.",
      why2: "Communication claire : estimation et options avant décision.",
      why3: "Suivi structuré jusqu’à la décision.",
      why4: "",

      // STEPS
      stepsTitle: "Comment ça marche",
      step1t: "1) Vous décrivez votre besoin",
      step1d:
        "Catégorie, ville, urgence, détails. Si besoin, vous pourrez envoyer une photo ensuite.",
      step2t: "2) Analyse & orientation",
      step2d:
        "Selon votre situation : vérification, achat, restauration, écriture sur parchemin…",
      step3t: "3) Devis clair & prise en charge",
      step3d:
        "Vous recevez une estimation claire et des options. Ensuite, prise en charge et suivi structuré.",

      // CATEGORIES
      categoriesTitle: "Choisissez votre catégorie",
      cat1t: "Mézouzot",
      cat1d: "Achat • vérification • remplacement",
      cat2t: "Téfilines",
      cat2d: "Vérification • restauration • achat",
      cat3t: "Séfer Torah",
      cat3d: "Orientation • estimation • suivi",
      cat4t: "Écritures sur parchemin",
      cat4d:
        "Meguilat Esther • Pitoum HaKetoret • Lamnatse’aḥ • Birkat HaBayit",

      // FAQ (sans délais)
      faqTitle: "Questions fréquentes",
      faq1q: "Combien ça coûte ?",
      faq1a:
        "Ça dépend (catégorie, état, niveau). Vous recevez d’abord une estimation claire et des options. Aucun paiement au moment de la demande.",
      faq2q: "Que dois-je envoyer pour que ce soit clair ?",
      faq2a:
        "Ville + catégorie + description. Si vous avez une photo (mezouza/tefilines/klaf), vous pourrez l’envoyer ensuite sur WhatsApp.",
      faq3q: "Je veux du mehadrin / très strict — c’est possible ?",
      faq3a:
        "Oui. Indiquez le niveau souhaité dans la demande, et nous vous orientons vers une option adaptée.",

      // Conservé (même si la section n’est plus affichée)
      testimonialsTitle: "",
      testimonialsSubtitle: "",
      test1: "",
      test2: "",
      test3: "",

      finalCtaTitle: "Vous voulez une réponse claire et sérieuse ?",
      finalCtaText:
        "Cliquez sur “Faire une demande”, remplissez le formulaire (30 sec), et recevez une estimation claire.",
      sticky: "", // ✅ pas de sticky mobile
    },

    commander: {
      badge: "Demande en ligne — aucun paiement pour l’instant",
      title: "Faire une demande",
      subtitle:
        "Remplissez le formulaire (30 sec). Nous analysons votre besoin, vous orientons et coordonnons la prise en charge.",
      step1Short: "Formulaire",
      step2Short: "Orientation",
      step3Short: "Prise en charge",
      micro:
        "Aucun paiement à ce stade. Si besoin, vous pourrez envoyer une photo ensuite sur WhatsApp.",

      halakhicTitle: "Cadre halakhique strict — selon les exigences de la Halakha",
      halakhic1:
        "La vérification / l’écriture est réalisée par un sofer STaM diplômé et expérimenté (travail soigné).",
      halakhic2:
        "STaM = Sefer Torah, Téfilines, Mézouzot — réponse adaptée à votre besoin.",
      halakhic3: "",
      halakhic4: "Pris en charge par un sofer STaM diplômé et expérimenté.",

      delaysTitle: "Processus",
      delaysText:
        "Analyse → orientation → devis clair → prise en charge → compte-rendu clair.",

      formTitle: "Votre demande",
      formSubtitle:
        "Choisissez une catégorie et décrivez votre besoin. Le formulaire ouvre WhatsApp avec un message pré-rempli.",

      faqTitle: "Questions rapides",
      faq1q: "Je paye maintenant ?",
      faq1a:
        "Non. Pour l’instant, c’est une demande / estimation (sans paiement).",
      faq2q: "Je ne sais pas exactement quoi demander…",
      faq2a:
        "Expliquez votre situation (ou envoyez une photo) et on vous guide.",
      faq3q: "C’est possible à Netanya / Jérusalem / Beit Shemesh ?",
      faq3a:
        "Oui, ce sont des zones où nous avons une activité. Et nous traitons aussi les demandes ailleurs en Israël.",

      ctaSticky: "",
    },

    services: {
      whatYouGetTitle: "Ce que vous recevez",
      whatYouGet1: "Un cadrage clair de votre demande (catégorie, ville, urgence).",
      whatYouGet2: "Une réponse structurée : estimation et options.",
      whatYouGet3:
        "Si nécessaire : prise en charge et coordination du suivi (vérification / réparation / écriture).",

      delaysTitle: "Processus",
      delaysText:
        "Analyse → orientation → devis clair → prise en charge → compte-rendu clair.",

      examplesTitle: "Exemples de situations traitées",
      examples1:
        "Mézouzot : diagnostic avant décision de réparation ou remplacement.",
      examples2:
        "Téfilines : contrôle avant restauration ou recommandation.",
      examples3:
        "Séfer Torah : orientation, estimation et coordination selon le besoin.",
    },
  },

  he: {
    nav: {
      home: "דף הבית",
      commander: "הזמנה",
      services: "שירותים",
      contact: "יצירת קשר",
      learnMore: "מידע נוסף",
      legal: "עמודים משפטיים",
      privacy: "מדיניות פרטיות",
      terms: "תנאים",
      halakha: "הלכה",
      pro: "פרו",
      verifications: "בדיקות",
      reparations: "תיקונים",
      seferTorah: "ספר תורה",
    },
    cta: {
      whatsapp: "וואטסאפ",
      call: "להתקשר",
      commander: "הזמנה",
      commanderOnline: "שליחת בקשה",
      start: "להתחיל (30 שנ׳)",
      goToForm: "לטופס",
    },

    brand: {
      name: "מרכז הסת״ם",
      tagline:
        "סופרות בישראל — סת״ם (ספר תורה, תפילין, מזוזות) וכתיבה על קלף • נתניה, ירושלים, בית שמש",
    },

    common: {
      noPayment: "אין תשלום בשלב זה.",
      photosAfter: "אפשר לשלוח תמונות בוואטסאפ מיד אחרי שליחת הבקשה.",
      noteCoordination:
        "מרכז הסת״ם הוא מרכז תיאום. העבודה מתבצעת בפועל ע״י סופר סת״ם מוסמך ובעל ניסיון.",
      delaysTitle: "תהליך הטיפול",
      delaysText:
        "לאחר שליחת הבקשה: ניתוח → הכוונה → הצעת מחיר ברורה → טיפול ע״י סופר סת״ם מוסמך ובעל ניסיון.",
      examplesTitle: "דוגמאות למצבים שטופלו",
      examples1: "מזוזות עם אותיות חלשות שאותרו בבדיקה.",
      examples2: "תפילין שדורשות בדיקה מעמיקה לפני החלטה (תיקון/החלפה/רכישה).",
      examples3: "ספר תורה: הכוונה ותיאום לפי הצורך.",
    },

    home: {
      badge: "בקשה אונליין (30 שנ׳) — ללא תשלום בשלב זה",

      h1: "סת״ם בישראל — מסגרת הלכתית מחמירה, סופרי סת״ם מוסמכים ובעלי ניסיון",
      subtitle:
        "סת״ם = ספר תורה, תפילין, מזוזות • בדיקה, רכישה, תיקון • כתיבה על קלף (מגילת אסתר ועוד).",
      micro:
        "ממלאים 30 שניות → טיפול בבקשה → מענה ברור. השירות פעיל במיוחד בנתניה, ירושלים ובית שמש.",

      trustTitle: "מסגרת הלכתית מחמירה. הצעת מחיר ברורה. מעקב מסודר.",
      trust1:
        "מסגרת הלכתית מחמירה — לפי דרישות ההלכה, ע״י סופר סת״ם מוסמך ובעל ניסיון.",
      trust2: "שקיפות לפני כל פעולה: הערכה ואפשרויות ברורות לפני החלטה.",
      trust3: "דוח ברור: הסבר פשוט על המצב והאפשרויות, עם מעקב מסודר.",

      whyTitle: "למה דרך מרכז הסת״ם?",
      whyIntro:
        "אנו מספקים מסגרת הלכתית מחמירה — לפי דרישות ההלכה — תיאום רציני ומעקב מסודר.",
      why1: "מטופל ע״י סופר סת״ם מוסמך ובעל ניסיון.",
      why2: "תקשורת ברורה: הערכה ואפשרויות לפני החלטה.",
      why3: "מעקב מסודר עד קבלת החלטה.",
      why4: "",

      stepsTitle: "איך זה עובד",
      step1t: "1) מתארים את הצורך",
      step1d:
        "קטגוריה, עיר, דחיפות, פרטים. אפשר לשלוח תמונה אחר כך אם צריך.",
      step2t: "2) ניתוח והכוונה",
      step2d: "לפי המצב: בדיקה, רכישה, תיקון, כתיבה על קלף…",
      step3t: "3) הצעת מחיר וטיפול",
      step3d: "מקבלים הערכה ברורה ואפשרויות. לאחר מכן טיפול ומעקב מסודר.",

      categoriesTitle: "בחר קטגוריה",
      cat1t: "מזוזות",
      cat1d: "רכישה • בדיקה • החלפה",
      cat2t: "תפילין",
      cat2d: "בדיקה • תיקון • רכישה",
      cat3t: "ספר תורה",
      cat3d: "הכוונה • הערכה • ליווי",
      cat4t: "כתיבה על קלף",
      cat4d: "מגילת אסתר • פיטום הקטורת • למנצח • ברכת הבית",

      faqTitle: "שאלות נפוצות",
      faq1q: "כמה זה עולה?",
      faq1a:
        "זה תלוי (קטגוריה, מצב, רמה). קודם מקבלים הערכה ברורה ואפשרויות. אין תשלום בשלב הבקשה.",
      faq2q: "מה לשלוח כדי שזה יהיה ברור?",
      faq2a:
        "עיר + קטגוריה + תיאור. אם יש תמונה (מזוזה/תפילין/קלף) אפשר לשלוח אחר כך בוואטסאפ.",
      faq3q: "אני רוצה מהודר / מחמיר מאוד — אפשר?",
      faq3a: "כן. ציינו את הרמה בבקשה ונכוון לפתרון מתאים.",

      testimonialsTitle: "",
      testimonialsSubtitle: "",
      test1: "",
      test2: "",
      test3: "",

      finalCtaTitle: "רוצים מענה ברור ורציני?",
      finalCtaText:
        "לחצו “שליחת בקשה”, מלאו טופס קצר (30 שנ׳), וקבלו הערכה מסודרת.",
      sticky: "",
    },

    commander: {
      badge: "בקשה אונליין — ללא תשלום בשלב זה",
      title: "שליחת בקשה",
      subtitle:
        "ממלאים טופס קצר (30 שנ׳). אנחנו מנתחים את הצורך, מכוונים ומתאמים טיפול.",
      step1Short: "טופס",
      step2Short: "הכוונה",
      step3Short: "טיפול",
      micro: "אין תשלום בשלב זה. אפשר לשלוח תמונה אחר כך בוואטסאפ.",

      halakhicTitle: "מסגרת הלכתית מחמירה — לפי דרישות ההלכה",
      halakhic1: "הבדיקה/כתיבה מתבצעת ע״י סופר סת״ם מוסמך ובעל ניסיון.",
      halakhic2: "סת״ם = ספר תורה, תפילין, מזוזות — מענה לפי הצורך.",
      halakhic3: "",
      halakhic4: "מטופל ע״י סופר סת״ם מוסמך ובעל ניסיון.",

      delaysTitle: "תהליך",
      delaysText: "ניתוח → הכוונה → הצעת מחיר → טיפול → דוח ברור.",

      formTitle: "הבקשה שלכם",
      formSubtitle:
        "בחרו קטגוריה ותארו את הצורך. הטופס יפתח וואטסאפ עם הודעה מוכנה.",

      faqTitle: "שאלות קצרות",
      faq1q: "משלמים עכשיו?",
      faq1a: "לא. כרגע זו בקשה / הערכה ללא תשלום.",
      faq2q: "אני לא בטוח מה בדיוק צריך…",
      faq2a: "תארו מצב (או שלחו תמונה) ונכוון אתכם.",
      faq3q: "זה אפשרי בנתניה / ירושלים / בית שמש?",
      faq3a: "כן, אלו אזורים שבהם יש פעילות. וגם בשאר הארץ.",

      ctaSticky: "",
    },

    services: {
      whatYouGetTitle: "מה מקבלים",
      whatYouGet1: "מיקוד הבקשה (קטגוריה, עיר, דחיפות).",
      whatYouGet2: "מענה מסודר: הערכה ואפשרויות.",
      whatYouGet3: "אם צריך: טיפול ותיאום המשך (בדיקה / תיקון / כתיבה).",

      delaysTitle: "תהליך",
      delaysText: "ניתוח → הכוונה → הצעת מחיר → טיפול → דוח ברור.",

      examplesTitle: "דוגמאות למצבים",
      examples1: "מזוזות: אבחון לפני החלטה על תיקון/החלפה.",
      examples2: "תפילין: בדיקה לפני תיקון או המלצה.",
      examples3: "ספר תורה: הכוונה והערכת מצב לפי הצורך.",
    },
  },
} as const;

export function t<L extends Locale>(locale: L) {
  return dict[locale];
}
