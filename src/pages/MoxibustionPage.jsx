import ServicePage from '../components/ServicePage'

function MoxibustionPage() {
  const pageData = {
    title: 'Moxibustion',
    subtitle: 'Experience the warming, healing power of moxibustion. This ancient heat therapy strengthens your body\'s vital energy, improves circulation, and provides deep comfort for cold-type conditions.',
    heroImage: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&q=80',
    introduction: [
      'Moxibustion, or "moxa," is a traditional healing technique that involves burning dried mugwort (Artemisia vulgaris) near specific acupuncture points on the body. The gentle, penetrating warmth stimulates circulation, promotes healing, and strengthens your body\'s vital energy—known as Qi in Chinese Medicine.',
      'This therapy is particularly valuable for conditions involving coldness, weakness, or deficiency. The warming nature of moxa can reach deep into the body where cold and stagnation have settled, areas that acupuncture needles alone sometimes cannot fully address.',
      'At our practice, we use various moxibustion techniques depending on your condition—from indirect moxa that warms the skin without touching it, to moxa poles that can be used at home for ongoing care. The experience is deeply comforting, and many patients describe it as one of the most relaxing treatments they\'ve ever received.'
    ],
    benefits: [
      {
        title: 'Strengthens Vital Energy',
        description: 'Moxibustion is renowned for its ability to tonify Qi and Yang energy. It\'s particularly beneficial for those feeling depleted, chronically fatigued, or weak. The warming energy of moxa replenishes your body\'s reserves.'
      },
      {
        title: 'Improves Circulation',
        description: 'The penetrating heat from moxibustion dilates blood vessels and improves blood flow to areas of pain or stagnation. This enhanced circulation brings fresh nutrients while removing metabolic waste.'
      },
      {
        title: 'Relieves Cold-Type Pain',
        description: 'Conditions that worsen with cold weather or feel better with warmth respond exceptionally well to moxibustion. Joint pain, menstrual cramps, and digestive discomfort often improve dramatically with this warming therapy.'
      },
      {
        title: 'Supports Immune Function',
        description: 'Research has shown that moxibustion can enhance immune cell activity. Regular moxibustion at specific points like Zusanli (ST36) has been used for centuries to maintain health and prevent illness.'
      },
      {
        title: 'Promotes Digestive Health',
        description: 'For those with weak digestion, bloating, or loose stools, moxibustion can be transformative. The warming nature strengthens the digestive fire, improving your ability to extract nutrients from food.'
      },
      {
        title: 'Deeply Relaxing',
        description: 'The warmth of moxibustion is profoundly soothing to the nervous system. Patients often enter a deeply relaxed, almost meditative state during treatment. It\'s a wonderful antidote to the stress of modern life.'
      }
    ],
    whatToExpect: [
      {
        title: 'Comfortable Positioning',
        description: 'You\'ll lie comfortably on the treatment table, and we\'ll expose the areas to be treated. The room is kept warm, and you\'ll be draped for modesty and comfort throughout the session.'
      },
      {
        title: 'Moxa Application',
        description: 'Depending on your condition, we\'ll use one of several techniques: indirect moxa on ginger slices, moxa poles held near the skin, or stick-on moxa cones. You\'ll feel pleasant warmth—never burning or uncomfortable.'
      },
      {
        title: 'Warmth Penetration',
        description: 'As the treatment progresses, you\'ll notice the warmth penetrating deeper into your body. Many people feel the warmth traveling along energy pathways—a sign that Qi is moving and blockages are releasing.'
      },
      {
        title: 'Combined Treatments',
        description: 'Moxibustion is often combined with acupuncture for enhanced results. The moxa can be applied while acupuncture needles are in place, amplifying the therapeutic effect of both treatments.'
      },
      {
        title: 'Aftercare & Home Practice',
        description: 'We may provide moxa sticks for home use with specific instructions. Continuing treatment at home between sessions can significantly enhance your results, especially for chronic conditions.'
      }
    ],
    conditions: [
      'Cold Hands & Feet',
      'Chronic Fatigue',
      'Weak Digestion',
      'Loose Stools/Diarrhea',
      'Menstrual Cramps',
      'Infertility (Cold Pattern)',
      'Breech Presentation',
      'Arthritis (Cold Type)',
      'Lower Back Pain',
      'Knee Pain',
      'Poor Circulation',
      'Weakness After Illness',
      'Immune Deficiency',
      'Depression',
      'Low Metabolism',
      'Chronic Colds'
    ],
    faq: [
      {
        question: 'Will moxibustion burn me?',
        answer: 'No. We use careful techniques to ensure you feel only pleasant warmth. The moxa is never applied directly to skin, and we constantly monitor the temperature. If you ever feel too warm, simply let us know and we\'ll adjust immediately.'
      },
      {
        question: 'What is that smell during moxibustion?',
        answer: 'Burning mugwort has a distinctive herbal, slightly smoky aroma. Most people find it pleasant and relaxing—some even describe it as earthy or sage-like. We have good ventilation to manage the smoke while preserving the therapeutic benefits.'
      },
      {
        question: 'Is moxibustion safe during pregnancy?',
        answer: 'Moxibustion is actually famous for its ability to turn breech babies! However, it should only be used during pregnancy under professional guidance. Certain points must be avoided while others can be very beneficial. Always consult with us before trying moxa during pregnancy.'
      },
      {
        question: 'How often should I receive moxibustion?',
        answer: 'Treatment frequency depends on your condition. For acute issues or breech babies, daily treatment may be recommended. For chronic conditions, 1-2 times per week is typical. For general health maintenance, monthly sessions can be very beneficial.'
      },
      {
        question: 'Can I do moxibustion at home?',
        answer: 'Yes! Home moxibustion is safe and effective when you\'ve been properly trained. We often provide moxa sticks and instruction for home use. This extends your treatment benefits and is particularly useful for chronic conditions that benefit from daily warming.'
      }
    ],
    ctaText: 'Ready to Experience the Warming Power of Moxibustion?'
  }

  return <ServicePage {...pageData} />
}

export default MoxibustionPage
