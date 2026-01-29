import ServicePage from '../components/ServicePage'

function AcupuncturePage() {
  const pageData = {
    title: 'Acupuncture',
    subtitle: 'Ancient wisdom meets modern healing. Experience the transformative power of Traditional Chinese acupuncture to restore balance, relieve pain, and revitalize your body\'s natural healing abilities.',
    heroImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=80',
    introduction: [
      'Acupuncture is a time-honored healing practice that has been refined over thousands of years in Traditional Chinese Medicine. By inserting ultra-fine, sterile needles at specific points along the body\'s energy pathways (meridians), we stimulate your body\'s innate ability to heal itself.',
      'At our Chicago practice, Dr. Flora Arzanipour combines classical acupuncture techniques with modern understanding of anatomy and physiology. This integrative approach allows us to address both the symptoms you experience and the underlying imbalances causing them.',
      'Each treatment is carefully customized to your unique constitution and health goals. Whether you\'re seeking relief from chronic pain, managing stress, or optimizing your overall wellness, acupuncture offers a gentle yet powerful path to lasting health.'
    ],
    benefits: [
      {
        title: 'Natural Pain Relief',
        description: 'Acupuncture stimulates the release of endorphins, your body\'s natural painkillers, while reducing inflammation and improving blood flow to affected areas. Many patients experience significant relief from chronic pain without the need for medications.'
      },
      {
        title: 'Stress & Anxiety Reduction',
        description: 'By calming the nervous system and balancing stress hormones, acupuncture helps you achieve deep relaxation. Regular treatments can reduce anxiety, improve sleep quality, and enhance your ability to handle life\'s challenges with greater ease.'
      },
      {
        title: 'Enhanced Immune Function',
        description: 'Acupuncture strengthens your body\'s defensive energy (Wei Qi), helping you resist illness and recover more quickly when you do get sick. It\'s an excellent preventive measure during cold and flu season.'
      },
      {
        title: 'Improved Circulation',
        description: 'By removing blockages in energy pathways, acupuncture promotes better blood flow throughout your body. This enhanced circulation delivers more oxygen and nutrients to tissues while removing metabolic waste more efficiently.'
      },
      {
        title: 'Hormonal Balance',
        description: 'Acupuncture can help regulate hormonal fluctuations, making it particularly beneficial for women\'s health issues, fertility support, menopausal symptoms, and thyroid imbalances.'
      },
      {
        title: 'Mental Clarity & Focus',
        description: 'Many patients report improved mental clarity, better concentration, and enhanced cognitive function after acupuncture. By reducing brain fog and supporting healthy brain function, you can perform at your best.'
      }
    ],
    whatToExpect: [
      {
        title: 'Warm Welcome & Consultation',
        description: 'Your session begins with a thorough discussion of your health concerns, medical history, and treatment goals. We\'ll also perform traditional diagnostic techniques including pulse and tongue assessment.'
      },
      {
        title: 'Customized Treatment Plan',
        description: 'Based on our assessment, we\'ll explain our diagnosis from a Chinese Medicine perspective and outline a personalized treatment strategy designed specifically for your needs.'
      },
      {
        title: 'Gentle Needle Insertion',
        description: 'Using ultra-fine, single-use sterile needles, we\'ll gently insert them at specific acupuncture points. Most patients feel minimal sensation—often just a slight tingling or warmth that indicates the treatment is working.'
      },
      {
        title: 'Deep Relaxation',
        description: 'Once the needles are in place, you\'ll rest comfortably for 20-30 minutes. Many patients enter a deeply relaxed state, often falling into a peaceful sleep. This rest period allows the treatment to take full effect.'
      },
      {
        title: 'Post-Treatment Guidance',
        description: 'After we remove the needles, we\'ll discuss any observations from your treatment and provide recommendations for lifestyle, diet, or self-care practices to enhance your results between sessions.'
      }
    ],
    conditions: [
      'Chronic Back Pain',
      'Neck & Shoulder Tension',
      'Migraine & Headaches',
      'Arthritis & Joint Pain',
      'Sciatica',
      'Fibromyalgia',
      'Anxiety & Depression',
      'Insomnia & Sleep Issues',
      'Digestive Disorders',
      'Allergies & Sinusitis',
      'Fertility Challenges',
      'Menstrual Irregularities',
      'Menopausal Symptoms',
      'Fatigue & Low Energy',
      'Sports Injuries',
      'Post-Surgical Recovery'
    ],
    faq: [
      {
        question: 'Does acupuncture hurt?',
        answer: 'Most patients are pleasantly surprised by how comfortable acupuncture is. The needles used are extremely thin—about the width of a human hair—much finer than needles used for injections. You may feel a brief, mild sensation upon insertion, but many points are virtually painless. Most patients find the experience deeply relaxing.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'The number of sessions varies depending on your condition, its duration, and your individual response to treatment. Acute issues may resolve in 2-4 sessions, while chronic conditions typically require 8-12 sessions for lasting results. We\'ll discuss a realistic treatment plan during your first visit.'
      },
      {
        question: 'Is acupuncture safe?',
        answer: 'Yes, acupuncture is extremely safe when performed by a licensed practitioner. We use only sterile, single-use, disposable needles. Side effects are rare and typically minor, such as slight bruising at needle sites. Acupuncture has been practiced safely for thousands of years.'
      },
      {
        question: 'Can I combine acupuncture with other treatments?',
        answer: 'Absolutely. Acupuncture works wonderfully alongside conventional medicine, physical therapy, chiropractic care, and other healing modalities. It can often enhance the effectiveness of other treatments while reducing side effects of medications.'
      },
      {
        question: 'What should I do before my appointment?',
        answer: 'Eat a light meal 1-2 hours before your session—don\'t come hungry or overly full. Wear loose, comfortable clothing that can be rolled up above your elbows and knees. Avoid alcohol and intense exercise immediately before treatment.'
      }
    ],
    ctaText: 'Ready to Experience the Healing Power of Acupuncture?'
  }

  return <ServicePage {...pageData} />
}

export default AcupuncturePage
