import ServicePage from '../components/ServicePage'

function GuaShaPage() {
  const pageData = {
    title: 'Gua Sha',
    subtitle: 'Unlock your body\'s healing potential with this powerful scraping therapy. Gua Sha releases muscle tension, promotes detoxification, and restores the smooth flow of energy throughout your body.',
    heroImage: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80',
    introduction: [
      'Gua Sha (pronounced "gwah-shah") is an ancient East Asian healing technique that involves stroking the skin with a smooth-edged tool to relieve pain and tension. The word "gua" means to scrape or rub, while "sha" refers to the reddish, elevated skin rash that results—a sign of stagnant blood being brought to the surface.',
      'This therapeutic technique works by stimulating microcirculation in the soft tissue, increasing blood flow by up to 400% in treated areas. This dramatic improvement in circulation brings fresh blood, oxygen, and nutrients while flushing out metabolic waste and inflammatory byproducts.',
      'At our practice, we use traditional Gua Sha tools made from jade or buffalo horn, as well as modern medical-grade instruments. The treatment can range from gentle facial Gua Sha for cosmetic benefits to more intensive therapeutic Gua Sha for chronic pain and respiratory conditions.'
    ],
    benefits: [
      {
        title: 'Rapid Pain Relief',
        description: 'Gua Sha provides remarkably fast relief for many types of pain. By breaking up fascial adhesions and improving blood flow, it can reduce pain from muscle tension, headaches, and chronic conditions in a single session.'
      },
      {
        title: 'Reduces Inflammation',
        description: 'Research has shown that Gua Sha triggers an anti-inflammatory response in the body. The treatment increases heme oxygenase-1 (HO-1), an enzyme that reduces inflammation and protects cells from damage.'
      },
      {
        title: 'Releases Muscle Tension',
        description: 'The scraping action breaks up stubborn knots and adhesions in muscle tissue and fascia. Areas that have been tight and restricted for years can find remarkable relief through consistent Gua Sha treatment.'
      },
      {
        title: 'Improves Range of Motion',
        description: 'As fascial restrictions release and muscles relax, you\'ll notice significant improvement in flexibility and range of motion. This makes Gua Sha excellent for athletes and anyone with movement restrictions.'
      },
      {
        title: 'Supports Immune Function',
        description: 'Gua Sha has been traditionally used at the first sign of cold or flu. The treatment can help reduce the duration and severity of respiratory infections by boosting the immune response and clearing congestion.'
      },
      {
        title: 'Facial Rejuvenation',
        description: 'Gentle facial Gua Sha has become popular for its cosmetic benefits—reducing puffiness, improving skin tone, minimizing fine lines, and creating a natural lift. It\'s like a natural facelift without the surgery.'
      }
    ],
    whatToExpect: [
      {
        title: 'Area Preparation',
        description: 'The treatment area is exposed and a lubricating oil is applied. This allows the tool to glide smoothly while protecting the skin. We\'ll discuss which areas to treat based on your concerns.'
      },
      {
        title: 'Stroking Technique',
        description: 'Using smooth, firm strokes, we move the Gua Sha tool along your muscles, fascia, and acupuncture meridians. The pressure is firm but not painful. You\'ll feel the tool working on tight areas.'
      },
      {
        title: 'Sha Emergence',
        description: 'As we work, you\'ll notice redness emerging on the skin. This "sha" can range from light pink to deep purple, depending on the degree of stagnation. More stagnation means more dramatic markings.'
      },
      {
        title: 'Release & Relief',
        description: 'Many patients experience immediate relief as tension releases. Some feel a pleasant warmth or tingling as circulation improves. The treated area often feels lighter and more mobile right away.'
      },
      {
        title: 'Post-Treatment Care',
        description: 'We\'ll cover the treated area and advise you to keep it protected for 24-48 hours. The sha marks typically fade within 3-7 days. Staying hydrated helps your body process the released toxins.'
      }
    ],
    conditions: [
      'Chronic Neck Pain',
      'Upper Back Tension',
      'Shoulder Stiffness',
      'Headaches & Migraines',
      'Fibromyalgia',
      'IT Band Syndrome',
      'Computer/Tech Neck',
      'Respiratory Infections',
      'Chronic Cough',
      'Fever & Chills',
      'Facial Puffiness',
      'TMJ Dysfunction',
      'Carpal Tunnel',
      'Scar Tissue',
      'Mastitis',
      'Perimenopausal Symptoms'
    ],
    faq: [
      {
        question: 'What are those red marks from Gua Sha?',
        answer: 'The red or purple marks (sha) are not bruises—they\'re evidence of stagnant blood being brought to the surface. The color indicates the degree of stagnation in that area. These marks are painless and typically fade within 3-7 days, leaving the area feeling significantly better.'
      },
      {
        question: 'Does Gua Sha hurt?',
        answer: 'Gua Sha should not be painful, though it\'s definitely a "deep" sensation—firm pressure working on tight tissue. Some areas may be more tender than others, especially where there\'s significant stagnation. We always adjust pressure to your comfort level.'
      },
      {
        question: 'How is Gua Sha different from massage?',
        answer: 'While both address muscle tension, Gua Sha uses a tool and creates specific friction that breaks up adhesions and stagnation in ways massage cannot. The "sha" response also triggers a unique anti-inflammatory cascade that massage doesn\'t produce.'
      },
      {
        question: 'Can I do Gua Sha at home?',
        answer: 'Gentle facial Gua Sha is safe for home use with proper instruction. We can teach you techniques and recommend appropriate tools. Therapeutic body Gua Sha should initially be done professionally, though we may eventually teach you techniques for maintenance.'
      },
      {
        question: 'Who should avoid Gua Sha?',
        answer: 'Gua Sha is not appropriate for those with bleeding disorders, on blood thinners, or with skin conditions in the treatment area. It should be avoided over open wounds, sunburned skin, or areas with recent fractures. Always disclose your full health history before treatment.'
      }
    ],
    ctaText: 'Ready to Release Tension with Gua Sha?'
  }

  return <ServicePage {...pageData} />
}

export default GuaShaPage
