import ServicePage from '../components/ServicePage'

function SAATPage() {
  const pageData = {
    title: 'SAAT Therapy',
    subtitle: 'Find freedom from allergies with this revolutionary auricular acupuncture technique. SAAT (Soliman Auricular Allergy Treatment) offers lasting relief from food sensitivities, environmental allergies, and chemical reactions.',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1920&q=80',
    introduction: [
      'SAAT (Soliman Auricular Allergy Treatment) is a groundbreaking acupuncture technique developed by Dr. Nader Soliman that offers remarkable results for allergy sufferers. This specialized protocol uses a tiny needle placed in a specific point on the ear to essentially "reprogram" your body\'s inappropriate immune response to allergens.',
      'Unlike traditional allergy treatments that suppress symptoms, SAAT works to eliminate the underlying hypersensitivity. By introducing an extremely diluted allergen sample while simultaneously stimulating a precise auricular point, we help your body recognize the substance as harmless—permanently.',
      'Dr. Flora Arzanipour is a certified SAAT practitioner who has helped numerous patients overcome debilitating allergies and sensitivities. Whether you\'re dealing with seasonal allergies, food intolerances, or chemical sensitivities, SAAT offers hope for lasting relief.'
    ],
    benefits: [
      {
        title: 'Long-Lasting Results',
        description: 'Unlike antihistamines that wear off daily, SAAT aims for permanent resolution. Many patients experience lasting freedom from allergies after just one or two treatments per allergen. The results often remain stable for years.'
      },
      {
        title: 'Non-Pharmaceutical Approach',
        description: 'SAAT offers a drug-free alternative for allergy management. There are no medications to take, no side effects to manage, and no daily pills to remember. It\'s a natural solution that works with your body\'s own healing mechanisms.'
      },
      {
        title: 'Treats Multiple Allergy Types',
        description: 'SAAT can address environmental allergies (pollen, dust, mold), food allergies and sensitivities, chemical sensitivities, pet allergies, and even some autoimmune conditions triggered by allergic responses.'
      },
      {
        title: 'Quick Treatment Time',
        description: 'Each SAAT treatment takes only about 30-45 minutes. A tiny needle is placed in the ear and stays there for about 3 weeks, working continuously to retrain your immune response.'
      },
      {
        title: 'Safe & Gentle',
        description: 'SAAT uses extremely small needles and highly diluted allergen samples, making it very safe. The treatment is gentle enough for children and sensitive individuals who haven\'t tolerated other allergy treatments.'
      },
      {
        title: 'Restores Quality of Life',
        description: 'Imagine eating foods you\'ve avoided for years, enjoying outdoor activities without symptoms, or being able to visit friends with pets. SAAT can restore freedoms that allergies have taken away.'
      }
    ],
    whatToExpect: [
      {
        title: 'Comprehensive Allergy Assessment',
        description: 'We\'ll discuss your allergy history in detail, including when symptoms started, what triggers them, and how they affect your life. This helps us prioritize which allergens to treat first for maximum impact.'
      },
      {
        title: 'Muscle Testing Confirmation',
        description: 'Using applied kinesiology (muscle testing), we\'ll confirm your body\'s reaction to specific allergens. This non-invasive technique helps identify exactly which substances are problematic for you.'
      },
      {
        title: 'Sample Preparation',
        description: 'We prepare an extremely diluted sample of your allergen using homeopathic dilution principles. This sample is then incorporated into the treatment protocol to help retrain your immune response.'
      },
      {
        title: 'Auricular Needle Placement',
        description: 'A tiny, sterile needle is placed in a specific point on your ear. This point corresponds to your body\'s allergic response system. The needle is secured with medical tape and remains in place for about 3 weeks.'
      },
      {
        title: 'Follow-Up & Monitoring',
        description: 'We\'ll check in with you during the treatment period and schedule a follow-up to assess your results. Most patients notice significant improvement, and we can treat additional allergens in subsequent sessions.'
      }
    ],
    conditions: [
      'Seasonal Allergies (Pollen)',
      'Food Allergies & Sensitivities',
      'Dust Mite Allergies',
      'Mold Sensitivities',
      'Pet Allergies',
      'Chemical Sensitivities',
      'Hay Fever',
      'Allergic Rhinitis',
      'Histamine Intolerance',
      'Latex Allergy',
      'Medication Sensitivities',
      'Fragrance Sensitivities',
      'Gluten Sensitivity',
      'Dairy Intolerance',
      'Nut Allergies',
      'Environmental Sensitivities'
    ],
    faq: [
      {
        question: 'How long does the needle stay in my ear?',
        answer: 'The SAAT needle remains in your ear for approximately 3 weeks. It\'s secured with medical tape and is barely noticeable. During this time, it continuously works to reprogram your body\'s response to the allergen. After 3 weeks, you simply remove it yourself or come in to have it removed.'
      },
      {
        question: 'Can SAAT cure severe allergies?',
        answer: 'SAAT can be effective for many types of allergies, including some severe ones. However, if you have a history of anaphylaxis, we\'ll discuss your case carefully. SAAT is not a substitute for carrying an EpiPen if you\'ve been prescribed one. Results vary by individual.'
      },
      {
        question: 'How many allergens can be treated at once?',
        answer: 'Typically, we treat one allergen at a time to ensure the best results and accurately track your response. However, some related allergens can be grouped together. After one treatment resolves, we can address additional allergens in subsequent sessions.'
      },
      {
        question: 'Are the results really permanent?',
        answer: 'Many patients experience long-lasting or permanent results. However, in some cases, sensitivities may partially return over time, especially with significant stress or illness. If this happens, a booster treatment usually restores the benefit quickly.'
      },
      {
        question: 'Is SAAT safe for children?',
        answer: 'Yes, SAAT is gentle enough for children and can be life-changing for kids dealing with food allergies or environmental sensitivities. The procedure is quick, and children generally tolerate the tiny ear needle very well. It can dramatically improve a child\'s quality of life.'
      }
    ],
    ctaText: 'Ready to Find Freedom from Your Allergies?'
  }

  return <ServicePage {...pageData} />
}

export default SAATPage
