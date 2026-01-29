import ServicePage from '../components/ServicePage'

function HerbalMedicinePage() {
  const pageData = {
    title: 'Herbal Medicine',
    subtitle: 'Harness nature\'s pharmacy with customized herbal formulas. Our precisely crafted Chinese herbal remedies work synergistically with your body to address the root cause of your health concerns.',
    heroImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=80',
    introduction: [
      'Chinese herbal medicine represents one of the world\'s most sophisticated systems of natural healing, developed and refined over 3,000 years. Unlike Western herbalism which often uses single herbs, Traditional Chinese Medicine combines multiple herbs into balanced formulas that work synergistically to address your unique health pattern.',
      'At our practice, Dr. Flora Arzanipour draws upon extensive training and classical texts to create personalized herbal prescriptions. Each formula is carefully crafted to match your specific constitution, symptoms, and treatment goals—there is no one-size-fits-all approach.',
      'We use only the highest quality herbs, sourced from reputable suppliers who test for purity, potency, and safety. Whether you prefer traditional raw herbs, convenient granules, or easy-to-take capsules, we\'ll find the form that best fits your lifestyle while delivering optimal therapeutic benefit.'
    ],
    benefits: [
      {
        title: 'Addresses Root Causes',
        description: 'Rather than simply masking symptoms, Chinese herbal medicine works to correct the underlying imbalances causing your health issues. This approach leads to more lasting results and genuine healing rather than temporary relief.'
      },
      {
        title: 'Personalized Formulas',
        description: 'Your herbal prescription is customized specifically for you, taking into account your complete health picture, constitution, and even the current season. As your condition evolves, we modify your formula to match your changing needs.'
      },
      {
        title: 'Gentle Yet Effective',
        description: 'When properly prescribed, Chinese herbs work gently with your body\'s natural processes. Side effects are rare and typically mild. Herbs can often provide relief without the harsh effects associated with pharmaceutical medications.'
      },
      {
        title: 'Synergistic Action',
        description: 'Classical formulas combine herbs that enhance each other\'s effects while minimizing any potential side effects. This sophisticated approach to formulation makes the whole greater than the sum of its parts.'
      },
      {
        title: 'Supports All Body Systems',
        description: 'Chinese herbal medicine can address virtually any health concern—from digestive issues and hormonal imbalances to emotional wellbeing and immune function. It\'s a truly comprehensive system of medicine.'
      },
      {
        title: 'Enhances Other Treatments',
        description: 'Herbal medicine works beautifully alongside acupuncture, extending and deepening your treatment results. It\'s also safe to use with most conventional medications under proper supervision.'
      }
    ],
    whatToExpect: [
      {
        title: 'Comprehensive Consultation',
        description: 'Your herbal consultation includes detailed questions about your symptoms, health history, diet, lifestyle, and emotional state. We\'ll also perform traditional pulse and tongue diagnosis to understand your constitutional pattern.'
      },
      {
        title: 'Pattern Diagnosis',
        description: 'Using the information gathered, we identify your unique pattern of imbalance according to Chinese Medicine principles. This diagnosis forms the foundation for your personalized herbal prescription.'
      },
      {
        title: 'Custom Formula Creation',
        description: 'Based on your diagnosis, we select herbs that work together to address your specific pattern. We\'ll explain the formula\'s purpose, what to expect, and how to take it properly for best results.'
      },
      {
        title: 'Instructions & Education',
        description: 'You\'ll receive clear instructions on dosage, timing, and any dietary considerations. We\'ll also discuss what changes you might notice as the herbs take effect and when to follow up.'
      },
      {
        title: 'Ongoing Adjustments',
        description: 'As your condition improves, we\'ll refine your formula to support your continued progress. This dynamic approach ensures your treatment remains perfectly suited to your evolving needs.'
      }
    ],
    conditions: [
      'Digestive Disorders',
      'Chronic Fatigue',
      'Hormonal Imbalances',
      'Menstrual Problems',
      'Menopausal Symptoms',
      'Fertility Support',
      'Anxiety & Depression',
      'Insomnia',
      'Allergies & Sinusitis',
      'Skin Conditions',
      'Immune Deficiency',
      'Respiratory Issues',
      'Headaches & Migraines',
      'High Blood Pressure',
      'Autoimmune Conditions',
      'Weight Management'
    ],
    faq: [
      {
        question: 'Are Chinese herbs safe?',
        answer: 'When prescribed by a qualified practitioner and sourced from reputable suppliers, Chinese herbs are very safe. We use only herbs that have been tested for purity and are free from contaminants. We also carefully review your medications to avoid any interactions.'
      },
      {
        question: 'How do I take the herbs?',
        answer: 'We offer several convenient forms: granulated extracts that dissolve in hot water, capsules or tablets for easy swallowing, or traditional raw herbs for decoction if you prefer. We\'ll recommend the best form based on your condition and lifestyle preferences.'
      },
      {
        question: 'How long until I see results?',
        answer: 'This varies by condition. Acute issues may respond within days, while chronic conditions typically require 2-4 weeks before noticeable improvement. Some deep-seated patterns may take longer. We\'ll give you realistic expectations based on your specific situation.'
      },
      {
        question: 'Can I take herbs with my medications?',
        answer: 'In most cases, yes, but this requires careful evaluation. Please bring a list of all medications and supplements you take. We\'ll research any potential interactions and may coordinate with your physician if needed.'
      },
      {
        question: 'What do the herbs taste like?',
        answer: 'Honestly, many Chinese herbs have strong, earthy flavors that take some getting used to. Some formulas are more pleasant than others. If taste is a concern, capsules or tablets may be a better option for you. Many patients find the taste becomes more tolerable as they experience the benefits.'
      }
    ],
    ctaText: 'Ready to Discover Your Custom Herbal Formula?'
  }

  return <ServicePage {...pageData} />
}

export default HerbalMedicinePage
