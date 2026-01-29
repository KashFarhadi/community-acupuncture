import ServicePage from '../components/ServicePage'

function CuppingPage() {
  const pageData = {
    title: 'Cupping Therapy',
    subtitle: 'Release deep-seated tension and revitalize your body with this ancient healing technique. Cupping therapy promotes circulation, relieves muscle pain, and accelerates your body\'s natural recovery process.',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80',
    introduction: [
      'Cupping therapy is an ancient healing practice that has been used across cultures for thousands of years. By placing specialized cups on the skin to create suction, we draw stagnant blood and toxins to the surface, promoting fresh circulation and triggering your body\'s natural healing response.',
      'Unlike massage which pushes into muscle tissue, cupping lifts and separates the layers of tissue, releasing deep-seated tension that ordinary massage often can\'t reach. This unique mechanism makes cupping exceptionally effective for stubborn muscle knots, chronic pain, and tissue adhesions.',
      'At our practice, we offer both traditional fire cupping and modern silicone cupping techniques, allowing us to customize your treatment for optimal results. Whether you\'re an athlete seeking faster recovery or someone dealing with chronic back pain, cupping can be a game-changer for your wellness journey.'
    ],
    benefits: [
      {
        title: 'Deep Muscle Relief',
        description: 'Cupping reaches deeper layers of muscle tissue than traditional massage, releasing chronic tension and knots that have built up over months or years. The suction lifts tissue, creating space for blood and lymph to flow freely.'
      },
      {
        title: 'Accelerated Recovery',
        description: 'Athletes and active individuals love cupping for its ability to speed up recovery after intense workouts or competitions. By increasing blood flow to muscles, cupping delivers more oxygen and nutrients while flushing out metabolic waste.'
      },
      {
        title: 'Pain Reduction',
        description: 'The improved circulation and release of muscle tension leads to significant pain relief. Cupping is particularly effective for back pain, neck stiffness, and shoulder tension that hasn\'t responded to other treatments.'
      },
      {
        title: 'Detoxification Support',
        description: 'By drawing stagnant blood and cellular debris to the surface, cupping supports your body\'s natural detoxification processes. The lymphatic system is stimulated, helping clear toxins and reduce inflammation.'
      },
      {
        title: 'Improved Flexibility',
        description: 'As fascial adhesions are released and muscles relax, you\'ll notice improved range of motion and flexibility. This makes cupping an excellent complement to yoga, stretching, and physical therapy.'
      },
      {
        title: 'Respiratory Relief',
        description: 'Cupping on the upper back can help loosen phlegm, ease breathing difficulties, and provide relief from respiratory conditions. It\'s a wonderful supportive treatment during cold and flu season.'
      }
    ],
    whatToExpect: [
      {
        title: 'Assessment & Preparation',
        description: 'We\'ll discuss your specific concerns and examine the areas to be treated. You\'ll lie comfortably on the treatment table, and we\'ll apply a light oil to help the cups glide smoothly and create a proper seal.'
      },
      {
        title: 'Cup Application',
        description: 'Using either traditional glass cups with fire or modern silicone cups, we create suction that lifts your skin and underlying tissue into the cup. You\'ll feel a pulling sensation that most people find comfortable and even pleasant.'
      },
      {
        title: 'Treatment Time',
        description: 'Cups are typically left in place for 5-15 minutes, depending on your condition and skin sensitivity. During this time, you can relax deeply. Some treatments include moving the cups along muscle groups for a massage-like effect.'
      },
      {
        title: 'Cup Removal & Marks',
        description: 'When cups are removed, you\'ll notice circular marks ranging from light pink to deep purple. These marks are not bruises—they\'re evidence of stagnation being brought to the surface. They typically fade within 3-10 days.'
      },
      {
        title: 'Aftercare Guidance',
        description: 'We\'ll provide specific aftercare instructions, including staying hydrated, avoiding extreme temperatures, and keeping the treated area covered. Most people feel immediate relief and continue to improve over the following days.'
      }
    ],
    conditions: [
      'Chronic Back Pain',
      'Neck & Shoulder Stiffness',
      'Muscle Strains',
      'Sports Injuries',
      'Fibromyalgia',
      'Sciatica',
      'IT Band Syndrome',
      'Plantar Fasciitis',
      'Tension Headaches',
      'Respiratory Congestion',
      'Post-Workout Recovery',
      'Cellulite Reduction',
      'Carpal Tunnel Syndrome',
      'TMJ Dysfunction',
      'Chronic Fatigue',
      'Poor Circulation'
    ],
    faq: [
      {
        question: 'What are those circular marks from cupping?',
        answer: 'The marks left by cupping are not bruises in the traditional sense. They result from blood being drawn to the surface as stagnation is released. The color indicates the level of stagnation—darker marks suggest more stagnation. They\'re painless and typically fade within 3-10 days.'
      },
      {
        question: 'Does cupping hurt?',
        answer: 'Most people find cupping comfortable and even relaxing. You\'ll feel a pulling or tugging sensation as the cups create suction, but it shouldn\'t be painful. We always adjust the suction level to your comfort. Many patients fall asleep during treatment!'
      },
      {
        question: 'How often should I get cupping?',
        answer: 'For acute conditions, weekly sessions are often recommended initially. For maintenance and wellness, monthly sessions work well for most people. Athletes may benefit from more frequent treatments during training periods. We\'ll create a schedule based on your specific needs.'
      },
      {
        question: 'Can I exercise after cupping?',
        answer: 'We recommend avoiding intense exercise for 24 hours after cupping to allow your body to complete the healing process. Light stretching and walking are fine. Stay well-hydrated and avoid hot showers or saunas for a few hours post-treatment.'
      },
      {
        question: 'Is cupping safe for everyone?',
        answer: 'Cupping is safe for most people, but it\'s not recommended for those with certain conditions including bleeding disorders, skin conditions in the treatment area, or during pregnancy (on certain areas). We\'ll review your health history to ensure cupping is appropriate for you.'
      }
    ],
    ctaText: 'Ready to Experience Deep Relief with Cupping?'
  }

  return <ServicePage {...pageData} />
}

export default CuppingPage
