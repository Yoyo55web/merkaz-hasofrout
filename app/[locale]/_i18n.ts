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
        "Merkaz HaSTaM est un centre de coordination. Le travail est réalisé par un sofer qualifié (selon disponibilité).",
      delaysTitle: "Délais de traitement",
      delaysText:
        "Les demandes sont généralement traitées dans un délai de 24 à 72 heures ouvrées, selon le service et la charge en cours. Des urgences peuvent être envisagées selon disponibilité. Vous êtes informé clairement avant toute prise en charge.",
      examplesTitle: "Exemples de situations traitées",
      examples1:
        "Mézouzot présentant des lettres affaiblies détectées lors d’une vérification.",
      examples2:
        "Téfilines nécessitant un contrôle approfondi avant une décision.",
      examples3:
        "Séfer Torah : orientation et coordination après constat d’un besoin de suivi.",
    },

    home: {
      badge: "Demande en ligne (30 sec) — aucun paiement pour l’instant",

      h1: "Sofrout sérieuse. Réponse claire. Coordination discrète.",
      subtitle:
        "STaM = Sefer Torah, Téfilines, Mézouzot • Vérification, achat, restauration • Écritures sur parchemin (Meguilat Esther, etc.).",

      micro:
        "Décrivez votre besoin en 30 secondes → nous coordonnons la demande et vous recevez une réponse claire. Service disponible notamment à Netanya, Jérusalem et Beit Shemesh.",

      trustTitle: "Clair, sérieux, sans pression",
      // ✅ Quick Win #1 (badges confiance)
      trust1:
        "Contrôle halakhique rigoureux : vérification/écriture selon des règles strictes et un travail soigné.",
      trust2:
        "Devis clair avant toute action : estimation transparente et options proposées avant décision.",
      trust3:
        "Discrétion & coordination professionnelle : confidentialité et suivi sérieux du dossier.",

      // ✅ Quick Win #2 (Pourquoi)
      whyTitle: "Pourquoi passer par Merkaz HaSTaM ?",
      whyIntro:
        "Merkaz HaSTaM n’est ni un simple intermédiaire, ni une vente automatique. Nous assurons un cadre halakhique clair, une coordination sérieuse et un suivi structuré.",
      why1: "Sélection et coordination avec des sofrim qualifiés (selon disponibilité).",
      why2: "Communication claire : estimation, délais et options avant décision.",
      why3: "Accompagnement respectueux, sans pression commerciale.",
      why4: "Confidentialité : informations traitées de manière interne et discrète.",

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

      // ✅ Quick Win #4
      delaysTitle: "Délais & urgences",
      delaysText:
        "Les demandes sont généralement traitées dans un délai de 24 à 72 heures ouvrées, selon le service et la charge en cours. Des urgences peuvent être envisagées selon disponibilité. Vous êtes informé clairement avant toute prise en charge.",

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

    services: {
      // ✅ Quick Win #4 + #6 (utilisés dans la page services)
      whatYouGetTitle: "Ce que vous recevez",
      whatYouGet1: "Un cadrage clair de votre demande (catégorie, ville, urgence).",
      whatYouGet2: "Une réponse structurée : estimation, délais, options.",
      whatYouGet3: "Si nécessaire : coordination du suivi (vérification / réparation / écriture).",
      delaysTitle: "Délais & urgences",
      delaysText:
        "Traitement typique sous 24 à 72 heures ouvrées (selon service et charge). Urgences possibles selon disponibilité.",
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
        "מרכזהסת״ם הוא מרכז תיאום. העבודה בפועל מתבצעת ע״י סופר מוסמך (בהתאם לזמינות).",
      delaysTitle: "זמני טיפול",
      delaysText:
        "ברוב המקרים הטיפול מתבצע תוך 24–72 שעות עבודה, בהתאם לסוג השירות ולעומס. טיפול דחוף אפשרי בהתאם לזמינות. תקבלו עדכון ברור לפני כל טיפול.",
      examplesTitle: "דוגמאות למצבים שטופלו",
      examples1: "מזוזות עם אותיות חלשות שאותרו בבדיקה.",
      examples2: "תפילין שדורשות בדיקה מעמיקה לפני החלטה.",
      examples3: "ספר תורה: הכוונה ותיאום לפי הצורך.",
    },

    home: {
      badge: "בקשה אונליין (30 שנ׳) — ללא תשלום בשלב זה",

      h1: "סופרות ברצינות. מענה ברור. תיאום דיסקרטי.",
      subtitle:
        "סת״ם = ספר תורה, תפילין, מזוזות • בדיקה, רכישה, תיקון • כתיבה על קלף (מגילת אסתר ועוד).",

      micro:
        "ממלאים 30 שניות → אנחנו מתאמים את הבקשה → מקבלים מענה ברור. השירות פעיל במיוחד בנתניה, ירושלים ובית שמש.",

      trustTitle: "ברור, רציני, בלי לחץ",
      // ✅ Quick Win #1 (badges confiance)
      trust1: "בדיקה הלכתית מחמירה: עבודה מוקפדת לפי כללי הסת״ם.",
      trust2: "שקיפות לפני כל פעולה: הערכה ואפשרויות ברורות לפני החלטה.",
      trust3: "דיסקרטיות ותיאום מקצועי: סודיות מלאה ומעקב מסודר.",

      // ✅ Quick Win #2 (Pourquoi)
      whyTitle: "למה דרך מרכז הסת״ם?",
      whyIntro:
        "מרכזהסת״ם אינו “מכירה אוטומטית” ואינו רק תיווך. אנו מספקים מסגרת הלכתית ברורה, תיאום רציני ומעקב מסודר.",
      why1: "תיאום עם סופרים מוסמכים (בהתאם לזמינות).",
      why2: "הסבר ברור: הערכה, זמני טיפול ואפשרויות לפני החלטה.",
      why3: "ליווי מכבד בלי לחץ מסחרי.",
      why4: "דיסקרטיות: מידע נשמר פנימי ובאחריות.",

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

      // ✅ Quick Win #4
      delaysTitle: "זמנים ודחיפות",
      delaysText:
        "בדרך כלל הטיפול תוך 24–72 שעות עבודה (לפי השירות והעומס). טיפול דחוף אפשרי בהתאם לזמינות. תקבלו עדכון ברור לפני כל טיפול.",

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

    services: {
      whatYouGetTitle: "מה מקבלים",
      whatYouGet1: "מיקוד הבקשה (קטגוריה, עיר, דחיפות).",
      whatYouGet2: "מענה מסודר: הערכה, זמני טיפול ואפשרויות.",
      whatYouGet3: "אם צריך: תיאום המשך (בדיקה / תיקון / כתיבה).",
      delaysTitle: "זמנים ודחיפות",
      delaysText:
        "טיפול טיפוסי תוך 24–72 שעות עבודה (לפי שירות ועומס). דחוף — בהתאם לזמינות.",
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
