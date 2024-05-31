
const gradients = [
    'linear-gradient(to right, #ff7e5f, #feb47b)',
    'linear-gradient(to right, #43cea2, #185a9d)',
    'linear-gradient(to right, #ff512f, #dd2476)',
    'linear-gradient(to right, #6a11cb, #2575fc)',
    'linear-gradient(to right, #e65c00, #f9d423)',
    // Add more gradients here
];

document.addEventListener('DOMContentLoaded', function() {
    const englishQuoteElement = document.getElementById('english-quote');
    const sanskritQuoteElement = document.getElementById('sanskrit-quote');
    const citationElement = document.getElementById('citation');
    const authorElement = document.getElementById('author');
    const toggleButton = document.getElementById('toggle-sanskrit');
    document.documentElement.style.setProperty('--gradient', gradients[Math.floor(Math.random() * gradients.length)]);

    
    const originalQuotes = [

        {
            "english": "Let a man be lifted up by his own self; let him not lower himself; for he himself is his friend, and he himself is his enemy.",
            "sanskrit": "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मन:",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 6.5]"
        },
        {
            "english": "Even a wise man acts in accordance with his own nature; beings will follow their nature; what can restraint do?",
            "sanskrit": "सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि। प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 3.33]"
        },
        {
            "english": "A person is made by belief. As they believe, so they are.",
            "sanskrit": "यो यच्छ्रद्धः स एव सः।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 17.3]"
        },
        {
            "english": "You have the right to perform your duties, but you are not entitled to the fruits of your actions.",
            "sanskrit": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 2.47]"
        },
        {
            "english": "Set thy heart upon thy work, but never on its reward.",
            "sanskrit": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 2.47]"
        },
        {
            "english": "A man is what his deep, driving desire is. As his desire is, so is his will. As his will is, so is his deed. As his deed is, so is his destiny.",
            "sanskrit": "यस्य यद्व्रतमाभूतं तत्तद्व्रतं स भविष्यति।",
            "author": "Yajnavalkya",
            "citation": "[Brihadaranyaka Upanishad 4.4.5]"
        },
        {
            "english": "One who sees inaction in action, and action in inaction, is intelligent among men.",
            "sanskrit": "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 4.18]"
        },
        {
            "english": "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
            "sanskrit": "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 6.19]"
        },
        {
            "english": "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.",
            "sanskrit": "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 6.6]"
        },
        {
            "english": "Let a man lift himself by his own self alone, and let him not lower himself; for this self alone is the friend of oneself, and this self alone is the enemy of oneself.",
            "sanskrit": "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 6.5]"
        },
        {
            "english": "He who has no attachments can really love others, for his love is pure and divine.",
            "sanskrit": "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 3.19]"
        },
        {
            "english": "Perform your duty and abandon all attachment to success or failure. Such evenness of mind is called Yoga.",
            "sanskrit": "समत्वं योग उच्यते।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 2.48]"
        },
        {
                "english": "Arise, awake, and stop not until the goal is reached.",
                "sanskrit": "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।",
                "author": "Nachiketa",
                "citation": "[Katha Upanishad 1.3.14]"
        },
        {
                "english": "By not practicing evil actions, by avoiding worthless activities, and by realizing one's highest potential, one becomes free from suffering.",
                "sanskrit": "अविचार्या हि कुप्यन्ति बाल्यादन्ये च ये खलाः।",
                "author": "Manu",
                "citation": "[Manusmriti 4.148]"
        },
        {
                "english": "The mind acts like an enemy for those who do not control it.",
                "sanskrit": "अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 6.6]"
        },
        {
                "english": "When a man dwells on the pleasure of sense, attraction for them arises in him. From attraction arises desire, the lust of possession, and this leads to passion, to anger.",
                "sanskrit": "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 2.62]"
        },
        {
                "english": "One who is steady in the performance of their duty, casting off attachment, and free from egoism and expectation, is not tainted by sin.",
                "sanskrit": "कर्मणैव हि संसिद्धिमास्थिता जनकादयः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 5.10]"
        },
        {
                "english": "When you feel the presence of the Divine within, then you are fearless and carefree.",
                "sanskrit": "अविद्या हि विज्ञानं विद्येति द्वे विद्ये वेदितव्ये।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 2.15]"
        },
        {
                "english": "The man who is disciplined in eating and recreation, who is balanced in work and rest, will be disciplined in his mind.",
                "sanskrit": "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 6.17]"
        },
        {
                "english": "The wise see that there is action in the midst of inaction and inaction in the midst of action.",
                "sanskrit": "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 4.18]"
        },
        {
                "english": "When the mind is well controlled, it will lead to happiness; if it is uncontrolled, it will lead to sorrow.",
                "sanskrit": "आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 6.5]"
        },
        {
                "english": "Perform your obligatory duty, because action is indeed better than inaction.",
                "sanskrit": "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 3.8]"
        },
        {
                "english": "He who is able to endure, here in this world, before the liberation from the body, the impulse born of desire and anger, he is a Yogi, he is a happy man.",
                "sanskrit": "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात्।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 5.23]"
        },
        {
                "english": "One who has conquered his senses and desires and has attained tranquility will always be in a state of happiness.",
                "sanskrit": "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 2.64]"
        },
        {
                "english": "To one who has control over the mind, the mind is his best friend; but to one who has failed to control the mind, the mind will be his worst enemy.",
                "sanskrit": "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 6.6]"
        },
        {
                "english": "He who is able to see his own self as equal in all beings, and thus worships Me in all beings, is considered the highest yogi.",
                "sanskrit": "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 6.32]"
        },
        {
                "english": "The serene person, who is not affected by happiness and distress, and is free from desire and anger, is a sage of steady mind.",
                "sanskrit": "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 2.56]"
        },
        {
                "english": "As the blazing fire reduces wood to ashes, similarly, the fire of knowledge reduces all karma to ashes.",
                "sanskrit": "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 4.37]"
        },
        {
                "english": "He who acts under the divine law, without attachment, will not be affected by sin, as a lotus leaf is untouched by water.",
                "sanskrit": "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 5.10]"
        },
        {
                "english": "He who controls his mind and has freedom from desires, attains the highest perfection of freedom.",
                "sanskrit": "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 2.64]"
        },
        {
                "english": "The yogi who has conquered his senses remains steadfast in meditation on the self. Such a yogi attains the ultimate freedom.",
                "sanskrit": "युञ्जन्नेवं सदात्मानं योगी नियतमानसः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 6.15]"
        },
        {
                "english": "Let the wise man do his duty, without attachment, to the best of his ability.",
                "sanskrit": "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 3.8]"
        },
        {
                "english": "When one sees that all activities are performed by the body, which is created of material nature, and sees that the self does nothing, one actually sees.",
                "sanskrit": "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 3.27]"
        },
        {
                "english": "To those who are constantly devoted to serving Me with love, I give the understanding by which they can come to Me.",
                "sanskrit": "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम्।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 10.10]"
        },
        {
                "english": "The soul is never born, nor does it die; it is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
                "sanskrit": "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 2.20]"
        },
        {
                "english": "The person who is not disturbed by happiness and distress, and is steady in both, becomes eligible for liberation.",
                "sanskrit": "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 2.15]"
        },
        {
                "english": "He who has no attachments can really love others, for his love is pure and divine.",
                "sanskrit": "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 3.19]"
        },
        {
                "english": "He who has faith and is absorbed in that faith, and whose senses are subdued, attains knowledge; and having attained knowledge, he quickly finds supreme peace.",
                "sanskrit": "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 4.39]"
        },
        {
                "english": "He who has control over the mind is tranquil in heat and cold, in pleasure and pain, and in honor and dishonor.",
                "sanskrit": "शीतोष्णसुखदुःखेषु तथा मानापमानयोः।",
                "author": "Kṛṣṇa",
                "citation": "[Bhagavad Gita 6.7]"
        },
        {
                "english": "The wise are not deluded by these changes. When one sees no distinctiveness between the soul and the Supersoul, one sees unity.",
                "sanskrit": "वेदाविनाशिनं नित्यं य एनमजमव्ययम्।",
                "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 2.21]"
        },
        {
            "english": "The humble sage, by virtue of true knowledge, sees with equal vision a learned and gentle brahmana, a cow, an elephant, a dog, and a dog-eater.",
            "sanskrit": "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 5.18]"
        },
        {
            "english": "One who has control over the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.",
            "sanskrit": "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 6.6]"
        },
        {
            "english": "He who is able to see himself in all beings, and all beings in himself, attains the highest self-realization.",
            "sanskrit": "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 6.32]"
        },
        {
            "english": "Whatever action is performed by a great man, common men follow in his footsteps.",
            "sanskrit": "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 3.21]"
        },
        {
            "english": "The wise, who are humbly wise, see with equal vision a learned and gentle brahmana, a cow, an elephant, a dog, and a dog-eater.",
            "sanskrit": "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 5.18]"
        },
        {
            "english": "Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform, do that as an offering to Me.",
            "sanskrit": "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 9.27]"
        },
        {
            "english": "The actions of a great man are followed by others. Whatever standards he sets by exemplary acts, all the world pursues.",
            "sanskrit": "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 3.21]"
        },
        {
            "english": "The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.",
            "sanskrit": "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 2.23]"
        },
        {
            "english": "Just as a man gives up old garments and accepts new ones, the soul similarly gives up old bodies and accepts new ones.",
            "sanskrit": "वासांसि जीर्णानि यथा विहाय।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 2.22]"
        },
        {
            "english": "The wise see that there is action in the midst of inaction and inaction in the midst of action.",
            "sanskrit": "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।",
            "author": "Kṛṣṇa",
            "citation": "[Bhagavad Gita 4.18]"
        }
    ];
    // Original quotes data
    // fetch('quotes.json')
    //  .then(response =>response.json())
    //  .then(data => { originalQuotes = data; return true; })
    //  .catch((e) => console.log('error',e));
    
    // Quotes data 
    const quotes = [...originalQuotes];

    // Function to shuffle the quotes array randomly
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Function to select a random quote from the array
    function getRandomQuote() {
        // Shuffle the quotes array randomly
        shuffleArray(quotes);
        // Return and remove the first quote from the array
        return quotes.shift();
    }

    // Function to display a quote
    function displayQuote() {
        // If all quotes have been displayed, reset the array
        if (quotes.length === 0) {
            quotes = [...originalQuotes];
        }

        // Get a random quote from the array
        const quote = getRandomQuote();

        // Display the quote
        englishQuoteElement.textContent = quote.english;
        sanskritQuoteElement.textContent = quote.sanskrit;
        authorElement.textContent = `— ${quote.author}`;
        citationElement.textContent = quote.citation;
    }


    // Show or hide Sanskrit version
    toggleButton.addEventListener('click', function() {
        if (sanskritQuoteElement.style.display === 'none') {
            sanskritQuoteElement.style.display = 'block';
            toggleButton.textContent = 'Hide Sanskrit';
        } else {
            sanskritQuoteElement.style.display = 'none';
            toggleButton.textContent = 'Show Sanskrit';
        }
    });

    // Initialize
    displayQuote();
});
