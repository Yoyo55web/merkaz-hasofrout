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

    home: {
      badge: "Demande en ligne (30 sec) — aucun paiement pour l’instant",

      h1: "Sofrout sérieuse. Réponse claire. Coordination discrète.",
      subtitle:
        "STaM = Sefer Torah, Téfilines, Mézouzot • Vérification, achat, restauration • Écritures sur parchemin (Meguilat Esther, etc.).",

      micro:
        "Décrivez votre besoin en 30 secondes → nous coordonnons la demande et vous recevez une réponse claire. Service disponible notamment à Netanya, Jérusalem et Beit Shemesh.",

      trustTitle: "Clair, sérieux, sans pression",
      trust1:
        "Sofrim qualifiés : vérification / écriture réalisées par un sofer compétent (selon disponibilité).",
      trust2:
        "Transparence : vous recevez une estimation et des options claires avant toute décision.",
      trust3:
        "Accompagnement respectueux : vous êtes guidé sans jugement, étape par étape.",

      stepsTitle: "Comment ça marche",
      step1t: "1) Vous décrivez votre besoin",
      step1d:
        "Catégorie, ville, urgence, détails. Si besoin, vous pourrez envoyer une photo ensuite.",
      step2t: "2) Nous coordonnons la demande",
      step2d:
        "Selon votre situation : vérification, achat, restauration, écriture sur parchemin…",
      step3t: "3) Vous recevez une réponse claire",
      step3d: "Estimation / délais / options — simplement et rapidement.",

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

      faqTitle: "Questions fréquentes",
      faq1q: "Combien ça coûte ?",
      faq1a:
        "Ça dépend (catégorie, état, niveau). Vous recevez d’abord une estimation claire et des options. Aucun paiement au moment de la demande.",
      faq2q: "En combien de temps j’ai une réponse ?",
      faq2a:
        "Souvent rapidement après réception des infos. Pour accélérer : ville + catégorie + description (et photo si possible).",
      faq3q: "Je veux du mehadrin / très strict — c’est possible ?",
      faq3a:
        "Oui. Indiquez le niveau souhaité dans la demande, et nous vous orientons vers une option adaptée (selon disponibilité).",

      finalCtaTitle: "Vous voulez une réponse rapide et sérieuse ?",
      finalCtaText:
        "Cliquez sur “Faire une demande”, remplissez le formulaire (30 sec), et recevez une réponse claire.",
      sticky: "Faire une demande (30 sec)",
    },

    commander: {
      badge: "Demande en ligne — aucun paiement pour l’instant",
      title: "Faire une demande",
      subtitle:
        "Remplissez le formulaire (30 sec). Nous coordonnons votre demande et vous recevez une réponse claire (notamment Netanya, Jérusalem, Beit Shemesh).",
      step1Short: "Formulaire",
      step2Short: "Coordination",
      step3Short: "Réponse",
      micro:
        "Aucun paiement à ce stade. Si besoin, vous pourrez envoyer une photo ensuite sur WhatsApp.",

      halakhicTitle: "Cadre halakhique & sérieux",
      halakhic1:
        "La vérification / l’écriture est réalisée par un sofer (travail soigné).",
      halakhic2:
        "STaM = Sefer Torah, Téfilines, Mézouzot — réponse adaptée à votre besoin.",
      halakhic3: "Confidentialité totale : vos informations restent internes.",
      halakhic4:
        "Sofrim diplômés et expérimentés : nous privilégions des professionnels avec expérience (selon disponibilité).",

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
        "Oui, ce sont des zones où nous avons une activité. Et nous traitons aussi les demandes ailleurs en Israël selon disponibilité.",

      ctaSticky: "Aller au formulaire",
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

    home: {
      badge: "בקשה אונליין (30 שנ׳) — ללא תשלום בשלב זה",

      h1: "סופרות ברצינות. מענה ברור. תיאום דיסקרטי.",
      subtitle:
        "סת״ם = ספר תורה, תפילין, מזוזות • בדיקה, רכישה, תיקון • כתיבה על קלף (מגילת אסתר ועוד).",

      micro:
        "ממלאים 30 שניות → אנחנו מתאמים את הבקשה → מקבלים מענה ברור. השירות פעיל במיוחד בנתניה, ירושלים ובית שמש.",

      trustTitle: "ברור, רציני, בלי לחץ",
      trust1:
        "סופרים מוסמכים: בדיקה/כתיבה ע״י סופר מקצועי (בהתאם לזמינות).",
      trust2: "שקיפות: מקבלים הערכה ואפשרויות ברורות לפני שמחליטים.",
      trust3: "ליווי מכבד: הכוונה שלב-אחר-שלב, בלי שיפוט ובלי לחץ.",

      stepsTitle: "איך זה עובד",
      step1t: "1) מתארים את הצורך",
      step1d:
        "קטגוריה, עיר, דחיפות, פרטים. אפשר לשלוח תמונה אחר כך אם צריך.",
      step2t: "2) אנחנו מתאמים את הבקשה",
      step2d: "לפי המצב: בדיקה, רכישה, תיקון, כתיבה על קלף…",
      step3t: "3) מקבלים מענה ברור",
      step3d: "הערכת מחיר / זמני טיפול / אפשרויות — בפשטות ובמהירות.",

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
      faq2q: "תוך כמה זמן מקבלים תשובה?",
      faq2a:
        "לרוב מהר אחרי קבלת הפרטים. כדי לזרז: עיר + קטגוריה + תיאור (ותמונה אם אפשר).",
      faq3q: "אני רוצה מהודר / מחמיר מאוד — אפשר?",
      faq3a:
        "כן. ציינו את הרמה בבקשה ונכוון לפתרון מתאים (בהתאם לזמינות).",

      finalCtaTitle: "רוצים מענה מהיר וברור?",
      finalCtaText:
        "לחצו “שליחת בקשה”, מלאו טופס קצר (30 שנ׳), ותקבלו מענה מסודר.",
      sticky: "שליחת בקשה (30 שנ׳)",
    },

    commander: {
      badge: "בקשה אונליין — ללא תשלום בשלב זה",
      title: "שליחת בקשה",
      subtitle:
        "ממלאים טופס קצר (30 שנ׳). אנחנו מתאמים את הבקשה ומחזירים מענה ברור (במיוחד נתניה, ירושלים, בית שמש).",
      step1Short: "טופס",
      step2Short: "תיאום",
      step3Short: "מענה",
      micro: "אין תשלום בשלב זה. אפשר לשלוח תמונה אחר כך בוואטסאפ.",

      halakhicTitle: "מסגרת הלכתית ורצינות",
      halakhic1: "הבדיקה/כתיבה מתבצעת ע״י סופר (עבודה מוקפדת).",
      halakhic2: "סת״ם = ספר תורה, תפילין, מזוזות — מענה לפי הצורך.",
      halakhic3: "דיסקרטיות מלאה: המידע נשאר פנימי בלבד.",
      halakhic4:
        "סופרים מוסמכים ובעלי ניסיון: אנחנו מעדיפים בעלי מקצוע עם ניסיון (בהתאם לזמינות).",

      formTitle: "הבקשה שלכם",
      formSubtitle:
        "בחרו קטגוריה ותארו את הצורך. הטופס יפתח וואטסאפ עם הודעה מוכנה.",

      faqTitle: "שאלות קצרות",
      faq1q: "משלמים עכשיו?",
      faq1a: "לא. כרגע זו בקשה / הערכה ללא תשלום.",
      faq2q: "אני לא בטוח מה בדיוק צריך…",
      faq2a: "תארו מצב (או שלחו תמונה) ונכוון אתכם.",
      faq3q: "זה אפשרי בנתניה / ירושלים / בית שמש?",
      faq3a: "כן, אלו אזורים שבהם יש פעילות. ובשאר הארץ — בהתאם לזמינות.",

      ctaSticky: "לטופס",
    },
  },
} as const;

export function t<L extends Locale>(locale: L) {
  return dict[locale];
}
