// =========================================================
// --- 🌳 내 안의 모동숲 주민 찾기 - 데이터 설정 🌳 ---
// 정확한 주민 정보는 https://animalcrossing.soopoolleaf.com/ko/acnh/animalsearch/?soopoolleaf=all 참고
// 이미지 URL은 https://soopool.art/image/acnh/animal/주민영문이름.png 형식
// =========================================================

// 성향 지표 정의
const TRAITS = {
    active: { name: "활동적" },     // 운동광, 활발함
    gentle: { name: "온화함" },     // 친절함
    charming: { name: "세련됨" },   // 느끼, 성숙함 (깔끔함, 지적임)
    peppy: { name: "발랄함" },      // 아이돌
    lazy: { name: "여유로움" },     // 먹보
    unique: { name: "개성적" },     // 무뚝뚝, 느끼 (독특함, 시크함)
};

// 주민 결과 데이터 (모동숲의 실제 주민 + 성격/영문 이름/설명)
const VILLAGER_RESULTS = {
    // 운동광 (active)
    dom: { name: "램프", image_en: "Dom", personality: "운동광", trait: 'active',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 긍정적이고 에너지가 넘치는 '램프'와 닮았습니다! ${dominantTrait} 성향이 매우 강하여 활기찬 하루를 보내는 것을 좋아하며, 그 열정은 주변에 좋은 영향을 줍니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주네요. ` : ''}으라차차!` },
    kidcat: { name: "1호", image_en: "Kid Cat", personality: "운동광", trait: 'active',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 정의감 넘치는 히어로 '1호'와 닮았습니다! ${dominantTrait} 성향이 매우 강하여 강한 정신력과 체력을 바탕으로 무엇이든 해내는 슈퍼스타입니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 열정은 모두에게 귀감이 됩니다. 핫! 야!` },
    genji: { name: "근성", image_en: "Genji", personality: "운동광", trait: 'active',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 목표를 향해 끈기 있게 노력하는 '근성'과 닮았습니다! ${dominantTrait} 성향이 매우 강하여 언제나 활기차고, 꾸준한 자기 관리로 건강한 에너지를 뿜어냅니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 긍정적인 태도는 모두에게 귀감이 됩니다. 허억!` },
    hamlet: { name: "햄스틴", image_en: "Hamlet", personality: "운동광", trait: 'active',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 작지만 강한 '햄스틴'과 닮았습니다! ${dominantTrait} 성향이 강하여 운동과 도전을 즐기며, 어떤 어려움에도 굴하지 않는 굳건함을 보여줍니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신은 언제나 최선을 다하는 노력파입니다. 으쌰!` },
    cousteau: { name: "병태", image_en: "Cousteau", personality: "운동광", trait: 'active',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 열정적인 운동광 '병태'와 닮았습니다! ${dominantTrait} 성향이 강하여 건강을 중요시하고, 뜨거운 열정으로 목표를 향해 나아갑니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신의 긍정적인 기운은 주변 사람들에게 활력을 불어넣습니다. 으럇차!` },
    hazel: { name: "다람", image_en: "Hazel", personality: "언니", trait: 'active', // Uchi mapped to active
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 시원시원한 매력의 '다람'과 닮았습니다! ${dominantTrait} 성향이 강하여 독립적이고 자신감 넘치며, 솔직한 조언으로 주변을 이끌어갑니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신의 쿨한 매력에 모두가 반할 겁니다. 어때!` },

    // 친절함 (gentle)
    marina: { name: "문어", image_en: "Marina", personality: "친절함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 부드럽고 친절한 '문어'처럼, 언제나 주변을 포근하게 감싸줍니다. ${dominantTrait} 성향이 강하여 평화를 사랑하고 소박한 일상 속 행복을 찾죠. ${secondTrait ? `${secondTrait} 면모도 엿보이네요. ` : ''}당신의 따뜻한 마음은 모두에게 안정감을 줍니다. 우후훗!` },
    kiki: { name: "키키", image_en: "Kiki", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 차분하고 사려 깊은 '키키'와 닮았습니다! ${dominantTrait} 성향이 강하여 안정감을 주며, 소박하고 평화로운 일상을 소중히 여깁니다. 주변을 편안하게 만드는 매력이 있죠. ${secondTrait ? `${secondTrait} 면모도 겸비한 ` : ''}당신은 믿음직한 친구입니다. 후훗!` },
    coco: { name: "코코아", image_en: "Coco", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 신비롭지만 온화한 '코코아'와 닮았습니다! ${dominantTrait} 성향이 강하여 차분하고 상냥한 매력으로 주변 사람들을 끌어당깁니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신은 늘 한결같은 모습으로 모두에게 편안함을 줍니다. 으음~` },
    lily: { name: "릴리", image_en: "Lily", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 사랑스럽고 다정한 '릴리'와 닮았습니다! ${dominantTrait} 성향이 강하여 늘 밝은 미소로 주변을 환하게 밝히며, 다른 사람들을 배려하는 따뜻한 마음을 가졌습니다. ${secondTrait ? `${secondTrait} 매력까지 더해져 ` : ''}당신은 모두에게 행복을 전하는 존재입니다. 우와~` },
    aurora: { name: "오로라", image_en: "Aurora", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 차분하고 따뜻한 '오로라'와 닮았습니다! ${dominantTrait} 성향이 강하여 평온하고 온화한 분위기를 풍기며, 주변 사람들에게 편안함을 줍니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신은 항상 침착하고 배려심이 깊습니다. 오로라~` },
    etoile: { name: "에뜨와르", image_en: "Etoile", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 별처럼 반짝이는 '에뜨와르'와 닮았습니다! ${dominantTrait} 성향이 강하여 사랑스럽고 평화로운 분위기를 만들며, 사람들에게 따뜻한 위로를 전합니다. ${secondTrait ? `${secondTrait} 매력까지 겸비한 ` : ''}당신은 모두에게 행복을 가져다줍니다. 반짝!` },
    pekoe: { name: "메이첼", image_en: "Pekoe", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 차분하고 친절한 '메이첼'과 닮았습니다! ${dominantTrait} 성향이 강하여 언제나 상냥하고 예의 바르며, 주변 사람들을 편안하게 해줍니다. ${secondTrait ? `${secondTrait} 모습도 있어 ` : ''}당신의 단아한 매력은 모두에게 호감을 줍니다. 차~` },
    chelsea: { name: "첼시", image_en: "Chelsea", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 사랑스러운 '첼시'와 닮았습니다! ${dominantTrait} 성향이 강하여 꿈결 같은 분위기를 풍기며, 순수하고 다정한 마음으로 주변을 밝힙니다. ${secondTrait ? `${secondTrait} 매력까지 더해져 ` : ''}당신은 모두에게 행복을 전하는 존재입니다. 키키!` },
    chevre: { name: "치즈", image_en: "Chevre", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 조용하고 다정한 '치즈'와 닮았습니다! ${dominantTrait} 성향이 강하여 항상 차분하고 사려 깊은 모습을 보여줍니다. ${secondTrait ? `${secondTrait} 면모까지 있어 ` : ''}당신의 따뜻한 마음은 모두에게 안정감을 줍니다. 헤헤~` },
    caroline: { name: "캐롤라인", image_en: "Caroline", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 밝고 친절한 '캐롤라인'과 닮았습니다! ${dominantTrait} 성향이 강하여 늘 긍정적이고 활기찬 에너지로 주변을 행복하게 만듭니다. ${secondTrait ? `${secondTrait} 매력까지 더해져 ` : ''}당신은 모두에게 사랑받는 친구입니다. 랄랄라!` },
    sally: { name: "샐리", image_en: "Sally", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 상냥하고 다정한 '샐리'와 닮았습니다! ${dominantTrait} 성향이 강하여 늘 밝은 미소로 주변을 편안하게 해줍니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신은 누구에게나 친절하고 사려 깊은 마음을 가졌습니다. 어머!` },
    melbourne: { name: "멜버른", image_en: "Melbourne", personality: "평범함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 느긋하고 차분한 '멜버른'과 닮았습니다! ${dominantTrait} 성향이 강하여 항상 여유로운 모습으로 주변을 편안하게 해줍니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신은 스트레스 없이 행복을 찾아가는 평화주의자입니다. 음~` },

    // 세련됨 (charming)
    raymond: { name: "잭슨", image_en: "Raymond", personality: "느끼", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 세련되고 지적인 '잭슨'과 닮았습니다! ${dominantTrait} 성향이 강하여 자신만의 확고한 개성을 가지고 있으며, 어떤 상황에서도 침착함을 잃지 않아요. ${secondTrait ? `${secondTrait} 매력도 겸비했네요. ` : ''}당신의 유니크한 매력이 사람들의 시선을 사로잡습니다. 흐음~` },
    judy: { name: "미애", image_en: "Judy", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 반짝이는 눈동자처럼 신비로운 '미애'와 닮았습니다! ${dominantTrait} 성향이 강하여 예술적인 감각과 세련된 분위기를 지녔습니다. 자신을 꾸미는 것을 좋아하고, 몽환적인 매력으로 주변을 사로잡습니다. ${secondTrait ? `${secondTrait} 모습까지 겸비한 ` : ''}당신은 모두의 동경의 대상입니다. 샤방!` },
    ankha: { name: "클레오", image_en: "Ankha", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 신비롭고 고귀한 '클레오'와 닮았습니다! ${dominantTrait} 성향이 강하여 품위 있고 자신감 넘치는 태도를 가지고 있습니다. 겉으로 드러내지 않는 카리스마와 깊은 속마음이 매력적이죠. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신만의 독특한 분위기로 사람들을 이끌어갑니다. 후훗...`
    },
    diana: { name: "사슴", image_en: "Diana", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 우아하고 고상한 '사슴'과 닮았습니다! ${dominantTrait} 성향이 강하여 품격 있고 지적인 분위기를 풍기며, 언제나 침착하고 현명한 판단을 내립니다. ${secondTrait ? `${secondTrait} 매력까지 갖춘 ` : ''}당신은 주변 사람들에게 존경과 신뢰를 받습니다. 호호호~` },
    francine: { name: "프랑소와", image_en: "Francine", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 도도하면서도 세련된 '프랑소와'와 닮았습니다! ${dominantTrait} 성향이 강하여 아름다움을 추구하며, 언제나 자신감 있는 모습으로 주변을 빛나게 합니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신은 시대를 앞서가는 패셔니스타입니다. 후훗!` },
    wolfgang: { name: "로보", image_en: "Wolfgang", personality: "무뚝뚝", trait: 'charming', // Crankies can be charming too
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 시크하면서도 매력적인 '로보'와 닮았습니다! ${dominantTrait} 성향이 강하여 겉으로는 무심해 보이지만, 알고 보면 따뜻한 마음을 지녔습니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신의 쿨한 카리스마는 모두를 매료시킵니다. 으르렁.` },
    freya: { name: "빙티", image_en: "Freya", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 세련되고 도도한 '빙티'와 닮았습니다! ${dominantTrait} 성향이 강하여 자신감 넘치고 시크한 매력을 뽐내며, 언제나 당당한 모습으로 주변을 압도합니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 매력은 모두를 끌어당깁니다. 어때?` },
    rodney: { name: "찰스", image_en: "Rodney", personality: "느끼", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 유쾌하고 친근한 '찰스'와 닮았습니다! ${dominantTrait} 성향이 강하여 항상 긍정적인 에너지로 주변을 즐겁게 만들며, 수줍지만 따뜻한 마음을 가지고 있습니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신의 친근한 매력에 모두가 미소 짓습니다. 하핫!` },
    soleil: { name: "솔미", image_en: "Soleil", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 아름답고 품위 있는 '솔미'와 닮았습니다! ${dominantTrait} 성향이 강하여 세련된 매력을 뽐내며, 항상 자신감 있는 모습으로 주변을 밝힙니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 우아함은 모두의 시선을 사로잡습니다. 후훗!` },
    toby: { name: "토비", image_en: "Toby", personality: "느끼", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 톡톡 튀는 아이디어의 '토비'와 닮았습니다! ${dominantTrait} 성향이 강하여 장난기 넘치고 유쾌한 매력으로 주변을 즐겁게 만듭니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 창의력은 언제나 빛을 발합니다. 재밌잖아!` },
    annalise: { name: "아네사", image_en: "Annalise", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 이국적이고 매력적인 '아네사'와 닮았습니다! ${dominantTrait} 성향이 강하여 우아하고 성숙한 분위기를 풍기며, 언제나 침착하고 현명한 모습을 보여줍니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신의 지적인 매력은 모두에게 깊은 인상을 줍니다. 후훗.` },
    graham: { name: "햄쥐", image_en: "Graham", personality: "느끼", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 똑똑하고 유머러스한 '햄쥐'와 닮았습니다! ${dominantTrait} 성향이 강하여 지적인 대화를 즐기며, 엉뚱한 유머로 주변을 웃게 만듭니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신은 언제나 흥미로운 존재입니다. 흐으음.` },
    jacques: { name: "자끄", image_en: "Jacques", personality: "느끼", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 자유로운 영혼의 아티스트 '자끄'와 닮았습니다! ${dominantTrait} 성향이 강하여 음악과 예술을 사랑하며, 자신만의 독특한 스타일을 추구합니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신의 개성 넘치는 매력은 모두를 매료시킵니다. 으음~` },
    ken: { name: "켄", image_en: "Ken", personality: "느끼", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 시크하고 미스터리한 '켄'과 닮았습니다! ${dominantTrait} 성향이 강하여 겉으로는 차가워 보이지만, 내면에는 따뜻한 마음을 지녔습니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 예상치 못한 반전 매력에 모두가 빠져듭니다. 닌자!` },
    pecan: { name: "펑크스", image_en: "Pecan", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 우아하고 사려 깊은 '펑크스'와 닮았습니다! ${dominantTrait} 성향이 강하여 섬세한 감성과 고상한 취향을 지녔으며, 항상 주변을 배려하는 모습을 보여줍니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신의 아름다운 마음은 모두에게 큰 감동을 줍니다. 어머나!` },
    mint: { name: "민트", image_en: "Mint", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 깔끔하고 세련된 '민트'와 닮았습니다! ${dominantTrait} 성향이 강하여 언제나 정돈된 모습과 시원시원한 매력을 뽐냅니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 지적인 분위기는 모두에게 호감을 줍니다. 쿨럭!` },

    // 발랄함 (peppy)
    audie: { name: "쭈니", image_en: "Audie", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 밝고 활기찬 '쭈니'와 닮았습니다! ${dominantTrait} 성향이 강하여 끊임없이 새로운 것을 추구하고 즐거운 에너지를 뿜어냅니다. ${secondTrait ? `${secondTrait} 면모까지 있어 ` : ''}사교성이 좋고 호기심이 많죠. 언제나 주변을 즐겁게 만들 줄 아는 매력의 소유자입니다. 오예~` },
    ketchup: { name: "케첩", image_en: "Ketchup", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 쾌활하고 발랄한 '케첩'과 닮았습니다! ${dominantTrait} 성향이 강하여 언제나 에너지 넘치고 긍정적이죠. 솔직하고 즉흥적인 매력으로 사람들을 즐겁게 만듭니다. ${secondTrait ? `${secondTrait} 모습까지 겸비한 ` : ''}당신의 밝은 에너지는 모두를 미소 짓게 합니다. 냠냠!` },
    apple: { name: "애플", image_en: "Apple", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 통통 튀는 매력의 '애플'과 닮았습니다! ${dominantTrait} 성향이 강하여 호기심이 많고, 항상 즐거운 일을 찾아다닙니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신의 밝은 에너지는 주변 사람들에게도 활력을 불어넣어 줍니다. 아잉~` },
    rosie: { name: "부케", image_en: "Rosie", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 사랑스럽고 명랑한 '부케'와 닮았습니다! ${dominantTrait} 성향이 강하여 언제나 밝고 긍정적인 기운을 뿜어내며, 귀여운 행동으로 주변 사람들을 즐겁게 만듭니다. ${secondTrait ? `${secondTrait} 모습까지 겸비한 ` : ''}당신은 모두의 비타민 같은 존재입니다. 히히!` },
    wendy: { name: "웬디", image_en: "Wendy", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 통통 튀는 매력의 '웬디'와 닮았습니다! ${dominantTrait} 성향이 강하여 활기차고 사교성이 뛰어나며, 언제나 새로운 것을 시도하고 싶어 합니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신은 주변을 즐겁게 만드는 분위기 메이커입니다. 띵동!` },
    flora: { name: "플라라", image_en: "Flora", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 언제나 빛나는 '플라라'와 닮았습니다! ${dominantTrait} 성향이 강하여 자신감 넘치고 화려한 매력을 뽐내며, 사람들에게 활력을 불어넣어 줍니다. ${secondTrait ? `${secondTrait} 면모까지 있어 ` : ''}긍정적인 에너지로 모두를 즐겁게 만듭니다. 당신은 마치 무대 위의 주인공 같아요! 예이~` },
    monica: { name: "모니카", image_en: "Monica", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 에너지 넘치고 시원시원한 '모니카'와 닮았습니다! ${dominantTrait} 성향이 강하여 항상 긍정적이고 활동적이며, 주변을 밝게 만듭니다. ${secondTrait ? `${secondTrait} 면모까지 겸비한 ` : ''}당신은 언제나 활기찬 모습으로 모두에게 영감을 줍니다. 우와!` },
    bunnie: { name: "릴리안", image_en: "Bunnie", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 명랑하고 귀여운 '릴리안'과 닮았습니다! ${dominantTrait} 성향이 강하여 언제나 밝은 미소로 주변을 행복하게 하며, 활기찬 에너지로 모두를 즐겁게 합니다. ${secondTrait ? `${secondTrait} 모습까지 겸비한 ` : ''}당신은 모두에게 사랑받는 존재입니다. 히히!` },
    pinky: { name: "핑키", image_en: "Pinky", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 사랑스럽고 발랄한 '핑키'와 닮았습니다! ${dominantTrait} 성향이 강하여 항상 긍정적인 기운을 뿜어내며, 귀여운 행동으로 주변 사람들을 즐겁게 만듭니다. ${secondTrait ? `${secondTrait} 면모까지 있어 ` : ''}당신은 모두에게 행복을 전하는 비타민입니다. 헤헷!` },
    
    // 여유로움 (lazy)
    beau: { name: "피터", image_en: "Beau", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 여유롭고 느긋한 '피터'와 닮았습니다! ${dominantTrait} 성향이 강하여 편안함을 추구하며 자유로운 영혼을 가졌죠. 스트레스를 받지 않고, 맛있는 것과 낮잠을 좋아하는 평화주의자입니다. ${secondTrait ? `${secondTrait} 면모까지 갖춰 ` : ''}주변에 편안함을 줍니다. 으으음...` },
    stitches: { name: "패치", image_en: "Stitches", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 천진난만하고 귀여운 '패치'와 닮았습니다! ${dominantTrait} 성향이 강하여 주변을 편안하게 만드는 매력이 있습니다. 느긋하게 낮잠 자는 것을 좋아하고, 엉뚱한 상상력으로 당신만의 세계를 펼치죠. ${secondTrait ? `${secondTrait} 모습까지 겸비한 ` : ''}당신은 모두에게 사랑스러운 존재입니다. 헤헤~` },
    sherb: { name: "쭈쭈", image_en: "Sherb", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 순수하고 천진난만한 '쭈쭈'와 닮았습니다! ${dominantTrait} 성향이 강하여 세상 모든 것을 신기해하며, 맛있는 것과 편안한 잠을 사랑하는 평화주의자입니다. ${secondTrait ? `${secondTrait} 매력까지 더해져 ` : ''}당신의 사랑스러움에 모두가 빠져듭니다. 으음~` },
    zucker: { name: "문대", image_en: "Zucker", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 독특하고 사랑스러운 '문대'와 닮았습니다! ${dominantTrait} 성향이 강하여 순수하고 엉뚱한 매력을 가졌습니다. 언제나 맛있는 것을 찾아다니며, 당신만의 방식으로 행복을 추구합니다. ${secondTrait ? `${secondTrait} 면모까지 돋보이네요. ` : ''}당신의 예상치 못한 행동은 주변을 즐겁게 합니다. 우물우물...` },
    lucky: { name: "럭키", image_en: "Lucky", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 미스터리하지만 온화한 '럭키'와 닮았습니다! ${dominantTrait} 성향이 강하여 늘 여유롭고 느긋하며, 자신만의 속도로 세상을 탐험하는 것을 좋아합니다. ${secondTrait ? `${secondTrait} 매력도 있어 ` : ''}당신의 알 수 없는 매력은 사람들의 호기심을 자극합니다. 으음...` },
    hugh: { name: "휴지", image_en: "Hugh", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 정이 많고 느긋한 '휴지'와 닮았습니다! ${dominantTrait} 성향이 강하여 먹는 것을 즐기며, 주변 사람들과 소박한 행복을 나누는 것을 좋아합니다. ${secondTrait ? `${secondTrait} 면모까지 있어 ` : ''}당신의 편안한 존재감은 모두에게 안정감을 줍니다. 우적우적!` },
    sasha: { name: "미첼", image_en: "Sasha", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 귀엽고 패셔너블한 '미첼'과 닮았습니다! ${dominantTrait} 성향이 강하여 편안함을 추구하지만, 언제나 사랑스러운 모습으로 주변을 행복하게 만듭니다. ${secondTrait ? `${secondTrait} 면모까지 더해져 ` : ''}당신의 귀여움은 모두의 마음을 사로잡습니다. 헤헷!` },
    papi: { name: "피카", image_en: "Papi", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 순수하고 느긋한 '피카'와 닮았습니다! ${dominantTrait} 성향이 강하여 항상 여유로운 모습으로 주변을 편안하게 해줍니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신은 작은 것에서 행복을 찾아낼 줄 아는 진정한 낙천주의자입니다. 띠용!` },
    richard: { name: "리처드", image_en: "Richard", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 따뜻하고 여유로운 '리처드'와 닮았습니다! ${dominantTrait} 성향이 강하여 맛있는 것을 즐기고, 편안하고 평화로운 분위기를 좋아합니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신의 느긋함은 모두에게 안정감을 줍니다. 우적우적!` },
    broccolo: { name: "브로콜리", image_en: "Broccolo", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 순수하고 유쾌한 '브로콜리'와 닮았습니다! ${dominantTrait} 성향이 강하여 언제나 긍정적이고 활기찬 에너지로 주변을 즐겁게 만듭니다. ${secondTrait ? `${secondTrait} 면모까지 겸비한 ` : ''}당신의 친근한 매력은 모두에게 행복을 가져다줍니다. 헤헤!` },
    cube: { name: "호떡", image_en: "Cube", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 독특하고 귀여운 '호떡'과 닮았습니다! ${dominantTrait} 성향이 강하여 자신만의 세계에 빠져들지만, 순수하고 사랑스러운 모습으로 주변을 미소 짓게 합니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신의 엉뚱한 매력은 언제나 신선함을 줍니다. 으음...` },
    ozzie: { name: "아잠만", image_en: "Ozzie", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 순수하고 천진난만한 '아잠만'과 닮았습니다! ${dominantTrait} 성향이 강하여 세상 모든 것을 신기해하며, 맛있는 것과 편안한 잠을 사랑하는 평화주의자입니다. ${secondTrait ? `${secondTrait} 매력까지 더해져 ` : ''}당신의 사랑스러움에 모두가 빠져듭니다. 잠이 오네...` },
    pudge: { name: "땡칠이", image_en: "Pudge", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 순수하고 느긋한 '땡칠이'와 닮았습니다! ${dominantTrait} 성향이 강하여 항상 맛있는 것을 찾아다니고, 편안한 휴식을 즐기는 것을 좋아합니다. ${secondTrait ? `${secondTrait} 면모도 있어 ` : ''}당신의 여유로운 모습은 모두에게 안정감을 줍니다. 꿀꺽!` },

    // 개성적 (unique)
    marshal: { name: "시베리아", image_en: "Marshal", personality: "느끼", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 겉으론 시크하지만 속은 따뜻한 '시베리아'와 닮았습니다! ${dominantTrait} 성향이 강하여 쿨하고 세련된 매력을 뿜어내죠. 쉽게 속마음을 드러내지 않지만, 한 번 친해지면 깊은 신뢰를 보여줍니다. ${secondTrait ? `${secondTrait} 의외의 귀여움이 매력 포인트입니다. ` : ''}흥!` },
    julian: { name: "유니콘", image_en: "Julian", personality: "느끼", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 몽환적이고 독특한 '유니콘'과 닮았습니다! ${dominantTrait} 성향이 강하여 자신만의 세계가 확고하며 예술적인 감각을 지녔죠. 현실에 얽매이지 않고 상상력을 발휘하는 것을 좋아합니다. ${secondTrait ? `${secondTrait} 특별함이 늘 주변을 흥미롭게 합니다. ` : ''}반짝!` },
    chief: { name: "대장", image_en: "Chief", personality: "무뚝뚝", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 카리스마 넘치는 '대장'과 닮았습니다! ${dominantTrait} 성향이 강하여 겉으로는 무뚝뚝해 보이지만, 속으로는 깊은 정과 책임감을 가지고 있습니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 든든한 모습은 모두에게 신뢰를 줍니다. 크흠.` },
    octavian: { name: "차둘", image_en: "Octavian", personality: "무뚝뚝", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 우주를 꿈꾸는 '차둘'과 닮았습니다! ${dominantTrait} 성향이 강하여 자신만의 세계에 몰두하며, 때로는 엉뚱한 발상으로 주변을 놀라게 합니다. ${secondTrait ? `${secondTrait} 매력까지 겸비한 ` : ''}당신의 독특한 시선은 세상을 새롭게 만듭니다. 즈응~` },
    ricky: { name: "리키", image_en: "Ricky", personality: "무뚝뚝", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 겉바속촉 매력의 '리키'와 닮았습니다! ${dominantTrait} 성향이 강하여 겉으로는 투덜거리지만, 실제로는 정이 많고 다른 사람들을 잘 챙겨줍니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 솔직함과 따뜻함이 매력 포인트입니다. 쳇.` },
    murphy: { name: "머피", image_en: "Murphy", personality: "무뚝뚝", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 현명하고 사려 깊은 '머피'와 닮았습니다! ${dominantTrait} 성향이 강하여 조용하고 차분한 분위기를 풍기며, 주변을 깊이 관찰하는 데 능숙합니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 통찰력은 모두에게 깊은 인상을 줍니다. 으음...` },
    apollo: { name: "아폴로", image_en: "Apollo", personality: "무뚝뚝", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 카리스마 넘치는 '아폴로'와 닮았습니다! ${dominantTrait} 성향이 강하여 겉으로는 시크하지만 속으로는 따뜻한 마음을 지녔습니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신의 쿨한 매력은 모두에게 큰 존재감을 과시합니다. 끄응.` },
    bruce: { name: "브루스", image_en: "Bruce", personality: "무뚝뚝", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 겉은 강하지만 속은 따뜻한 '브루스'와 닮았습니다! ${dominantTrait} 성향이 강하여 조용하고 묵묵하지만, 주변 사람들을 잘 챙겨주는 의리파입니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 진중한 매력에 모두가 끌립니다. 으음...` },
    marcel: { name: "마르", image_en: "Marcel", personality: "무뚝뚝", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 예술적인 감각을 지닌 '마르'와 닮았습니다! ${dominantTrait} 성향이 강하여 독특한 개성과 미스터리한 분위기를 풍깁니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 예측 불가능한 매력은 모두에게 흥미를 유발합니다. 스윽...` },
    shino: { name: "사이다", image_en: "Shino", personality: "성숙함", trait: 'unique', // Snooty can be unique.
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 신비롭고 개성 넘치는 '사이다'와 닮았습니다! ${dominantTrait} 성향이 강하여 자신만의 확고한 세계를 가지고 있으며, 예상치 못한 매력으로 주변을 놀라게 합니다. ${secondTrait ? `때로는 ${secondTrait} 면모도 보여주며 ` : ''}당신의 독특한 분위기는 모두를 매료시킵니다. 으음...` }
};

// 퀴즈 질문 및 답변 데이터 (각 답변은 성향 지표에 점수를 부여)
const QUIZ_DATA = [
    {
        question: "주말에 가장 하고 싶은 일은?",
        answers: [
            { text: "운동, 산책 등 몸을 움직이는 활동", scores: { active: 3, peppy: 1 } },
            { text: "푹 쉬면서 맛있는 음식 먹기", scores: { lazy: 3, gentle: 1 } },
            { text: "새로운 기술이나 지식을 탐구하기", scores: { charming: 3, unique: 1 } },
            { text: "친구들과 만나 즐거운 시간을 보내기", scores: { peppy: 3, active: 1 } }
        ]
    },
    {
        question: "새로운 사람을 만났을 때 당신은?",
        answers: [
            { text: "먼저 다가가 말을 건네고 친해지려 한다.", scores: { active: 2, peppy: 2, gentle: 1 } },
            { text: "상대가 먼저 다가오길 기다리며 관찰한다.", scores: { charming: 2, unique: 2 } },
            { text: "편안하고 따뜻한 분위기를 만든다.", scores: { gentle: 3, lazy: 1 } },
            { text: "나만의 개성을 보여주며 다가오기를 기다린다.", scores: { unique: 3, charming: 1 } }
        ]
    },
    {
        question: "가장 좋아하는 패션 스타일은?",
        answers: [
            { text: "편안하면서도 활동적인 캐주얼", scores: { active: 3, lazy: 1 } },
            { text: "귀엽고 사랑스러운 느낌", scores: { peppy: 2, gentle: 2 } },
            { text: "깔끔하고 세련된 정장 또는 클래식", scores: { charming: 3, unique: 1 } },
            { text: "독특하고 개성 넘치는 유니크 스타일", scores: { unique: 3, charming: 1 } }
        ]
    },
    {
        question: "당신이 가장 중요하게 생각하는 가치는?",
        answers: [
            { text: "건강, 활력, 그리고 긍정적인 에너지", scores: { active: 3, peppy: 1 } },
            { text: "안정, 평화, 그리고 주변 사람들과의 조화", scores: { gentle: 3, lazy: 1 } },
            { text: "지식, 명예, 그리고 자기계발", scores: { charming: 3, unique: 1 } },
            { text: "자유, 예술, 그리고 상상력", scores: { unique: 3, charming: 1 } }
        ]
    },
    {
        question: "가장 좋아하는 음식 종류는?",
        answers: [
            { text: "단백질 풍부한 영양식 또는 에너지바", scores: { active: 3 } },
            { text: "달콤한 디저트나 간편하고 맛있는 간식", scores: { lazy: 2, peppy: 2 } },
            { text: "정갈하고 깔끔한 분위기의 코스 요리", scores: { charming: 3, gentle: 1 } },
            { text: "집에서 직접 만든 따뜻한 가정식", scores: { gentle: 3, lazy: 1 } }
        ]
    }
];

// =========================================================
// --- DOM 요소 참조 ---
// =========================================================
const pageTitle = document.getElementById('page-title');
const heroSection = document.querySelector('.hero-section');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizSection = document.getElementById('quiz-section');
const questionsContainer = document.getElementById('questions-container');
const prevQuestionBtn = document.getElementById('prev-question-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const submitQuizBtn = document.getElementById('submit-quiz-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const resultSection = document.getElementById('result-section');
const resultIntroText = document.getElementById('result-intro-text');
const resultImage = document.getElementById('result-image');
const resultName = document.getElementById('result-name');
const resultPersonality = document.getElementById('result-personality');
const resultDescription = document.getElementById('result-description');
const resetQuizBtn = document.getElementById('reset-quiz-btn');
const shareButtons = document.querySelectorAll('.share-btn');

// OGP 메타 태그 참조
const ogTitle = document.getElementById('og-title');
const ogDescription = document.getElementById('og-description');
const ogImage = document.getElementById('og-image');
const ogUrl = document.getElementById('og-url');


let currentQuestionIndex = 0;
let userName = "당신"; // 이름 입력창 제거로 인한 기본값
const userAnswers = new Array(QUIZ_DATA.length).fill(null); // 사용자의 선택 저장
const quizScores = {}; // 성향별 점수를 저장할 객체

// =========================================================
// --- 이벤트 리스너 ---
// =========================================================

startQuizBtn.addEventListener('click', () => {
    heroSection.classList.add('is-hidden');
    quizSection.classList.remove('is-hidden');
    quizSection.classList.add('is-visible');
    initializeQuiz();
    renderQuestion(currentQuestionIndex, 'next'); // 첫 질문은 'next' 방향으로 애니메이션
    updateProgressBar();
    // 퀴즈 섹션으로 스크롤 이동, 모바일에서 상단에 위치하도록 'start'
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

nextQuestionBtn.addEventListener('click', () => {
    if (userAnswers[currentQuestionIndex] !== null) { // 현재 질문에 답했는지 확인
        currentQuestionIndex++;
        if (currentQuestionIndex < QUIZ_DATA.length) {
            renderQuestion(currentQuestionIndex, 'next');
        }
        updateProgressBar();
    } else {
        alert('답변을 선택해주세요!');
    }
});

prevQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
        renderQuestion(currentQuestionIndex, 'prev');
    }
    updateProgressBar();
});

submitQuizBtn.addEventListener('click', () => {
    // 결과 계산 중... 로딩 피드백
    submitQuizBtn.textContent = '결과 계산 중...';
    submitQuizBtn.disabled = true;

    setTimeout(() => { // 짧은 지연을 줘서 로딩 상태를 체감하게 함
        calculateResult();
        quizSection.classList.add('is-hidden');
        resultSection.classList.remove('is-hidden');
        resultSection.classList.add('is-visible');
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // OGP 태그 업데이트
        const currentResultVillagerId = window.location.hash.substring(1); // URL 해시에서 주민 ID 가져오기
        const resultVillager = VILLAGER_RESULTS[currentResultVillagerId];

        if (resultVillager) {
            const dominantTrait = calculateDominantTrait(); // 현재 계산된 지배적 특성 가져오기
            const secondTrait = calculateSecondTrait(dominantTrait); // 두 번째 특성 가져오기

            ogTitle.setAttribute('content', `나는 모동숲 주민 '${resultVillager.name}'!`);
            ogDescription.setAttribute('content', resultVillager.description(userName, TRAITS[dominantTrait].name, TRAITS[secondTrait].name));
            ogImage.setAttribute('content', `https://soopool.art/image/acnh/animal/${encodeURIComponent(resultVillager.image_en)}.png`);
            ogUrl.setAttribute('content', `https://animal-crossing-test.vercel.app#${currentResultVillagerId}`);
            pageTitle.textContent = `나는 모동숲 주민 '${resultVillager.name}'!`;
        }

    }, 500); // 0.5초 지연
});

resetQuizBtn.addEventListener('click', () => {
    resultSection.classList.add('is-hidden');
    // Hero 섹션을 다시 보이게 하고 애니메이션 클래스도 추가
    heroSection.classList.remove('is-hidden');
    heroSection.classList.add('is-visible'); // Reset 시 hero 섹션 애니메이션 즉시 적용
    
    // 스크롤을 맨 위로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // OGP 태그 원상 복구 (초기 상태로)
    ogTitle.setAttribute('content', "내 안의 모동숲 주민 찾기");
    ogDescription.setAttribute('content', "나는 모여봐요 동물의 숲에서 어떤 주민일까요? 지금 테스트해보세요!");
    ogImage.setAttribute('content', `https://via.placeholder.com/1200x630/4CAF50/FFFFFF?text=Animal+Crossing+Quiz`);
    ogUrl.setAttribute('content', `https://animal-crossing-test.vercel.app`);
    pageTitle.textContent = "내 안의 모동숲 주민 찾기";

    userName = "당신"; // 이름은 입력창이 없으므로 "당신"으로 초기화
    submitQuizBtn.textContent = '결과보기'; // 버튼 텍스트 원상복구
    submitQuizBtn.disabled = false; // 버튼 활성화
    window.location.hash = ''; // URL 해시 초기화
});

// 공유 버튼 이벤트 리스너
shareButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const shareType = e.target.dataset.share;
        const finalUrl = `https://animal-crossing-test.vercel.app${window.location.hash}`;
        const shareText = `나는 모동숲 주민 '${resultName.textContent}'과 닮았대! ${resultPersonality.textContent} 성격의 ${resultName.textContent}!\n당신은 어떤 주민일까요? 지금 테스트해보세요!`;

        if (navigator.share) { // Web Share API 지원 여부 확인
            navigator.share({
                title: '내 안의 모동숲 주민 찾기',
                text: shareText,
                url: finalUrl,
            }).then(() => console.log('Successful share'))
              .catch((error) => console.log('Error sharing', error));
        } else {
            // Web Share API를 지원하지 않을 경우 폴백
            let shareLink = '';
            if (shareType === 'kakao') {
                // 카카오톡 공유는 JavaScript SDK 필요. 여기서는 간단히 URL 복사 안내.
                alert('카카오톡 공유는 모바일 환경에서 Web Share API를 사용하거나, 별도의 SDK 연동이 필요합니다.\n링크를 복사하여 공유해주세요.');
                copyToClipboard(finalUrl);
                return;
            } else if (shareType === 'twitter') {
                shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(finalUrl)}`;
            } else if (shareType === 'facebook') {
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(finalUrl)}`;
            } else if (shareType === 'copy-link') {
                copyToClipboard(finalUrl);
                alert('링크가 클립보드에 복사되었습니다!');
                return;
            }

            if (shareLink) {
                window.open(shareLink, '_blank', 'width=600,height=400');
            }
        }
    });
});

// URL 해시 변경 감지 (공유된 링크로 직접 접근 시)
window.addEventListener('hashchange', loadResultFromHash);
document.addEventListener('DOMContentLoaded', loadResultFromHash);


// =========================================================
// --- 퀴즈 로직 함수 ---
// =========================================================

function initializeQuiz() {
    currentQuestionIndex = 0;
    for (const traitId in TRAITS) {
        quizScores[traitId] = 0;
    }
    userAnswers.fill(null);

    // questionsContainer 내부의 모든 question-block 요소를 제거하여 초기화
    while (questionsContainer.firstChild) {
        questionsContainer.removeChild(questionsContainer.firstChild);
    }
    
    prevQuestionBtn.classList.add('is-hidden');
    nextQuestionBtn.classList.remove('is-hidden');
    submitQuizBtn.classList.add('is-hidden');
    adjustQuestionContainerHeight(); // 초기화 시 높이 조정
}

function renderQuestion(index, direction) {
    const currentQuestionBlock = questionsContainer.querySelector('.question-block.active');
    if (currentQuestionBlock) {
        currentQuestionBlock.classList.remove('active');
        if (direction === 'next') {
            currentQuestionBlock.classList.add('leaving-left');
        } else {
            currentQuestionBlock.classList.add('entering-right');
        }
        // 애니메이션 완료 후 DOM에서 제거
        currentQuestionBlock.addEventListener('transitionend', function handler() {
            this.removeEventListener('transitionend', handler);
            this.remove(); // 이전 질문을 완전히 제거
            // 질문 블록이 제거된 후 높이 재조정 (새로운 질문이 나타난 후에 호출되어야 함)
            adjustQuestionContainerHeight(); 
        }, { once: true });
    }

    const qData = QUIZ_DATA[index];

    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');
    questionBlock.setAttribute('role', 'group');
    questionBlock.setAttribute('aria-labelledby', `question-text-${index}`);

    if (direction === 'next') {
        questionBlock.classList.add('entering-right');
    } else if (direction === 'prev') {
        questionBlock.classList.add('leaving-left');
    }

    questionBlock.innerHTML = `
        <p class="question-text" id="question-text-${index}">${index + 1}. ${qData.question}</p>
        <div class="answer-options" role="radiogroup" aria-labelledby="question-text-${index}"></div>
    `;

    const answerOptionsDiv = questionBlock.querySelector('.answer-options');

    qData.answers.forEach((answer, aIndex) => {
        const answerOptionWrapper = document.createElement('div');
        answerOptionWrapper.classList.add('answer-option');
        if (userAnswers[index] === aIndex) {
            answerOptionWrapper.classList.add('selected');
        }

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = `q${index}-a${aIndex}`;
        radioInput.name = `question${index}`;
        radioInput.value = JSON.stringify(answer.scores);
        radioInput.setAttribute('aria-label', answer.text);
        
        if (userAnswers[index] === aIndex) {
            radioInput.checked = true;
        }

        const customRadio = document.createElement('div');
        customRadio.classList.add('custom-radio');

        const label = document.createElement('label');
        label.htmlFor = `q${index}-a${aIndex}`;
        label.textContent = answer.text;

        answerOptionWrapper.appendChild(radioInput);
        answerOptionWrapper.appendChild(customRadio);
        answerOptionWrapper.appendChild(label);
        answerOptionsDiv.appendChild(answerOptionWrapper);

        answerOptionWrapper.addEventListener('click', () => {
            radioInput.checked = true;
            userAnswers[index] = aIndex;

            answerOptionsDiv.querySelectorAll('.answer-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            answerOptionWrapper.classList.add('selected');

            updateProgressBar();
            updateNavigationButtons();
        });
    });
    questionsContainer.appendChild(questionBlock);

    // 애니메이션 트리거 및 높이 조정
    // requestAnimationFrame을 사용하여 DOM이 완전히 업데이트된 후 애니메이션을 시작하고 높이를 조정
    requestAnimationFrame(() => {
        questionBlock.classList.remove('entering-right', 'leaving-left');
        questionBlock.classList.add('active');
        // setTimeout을 사용하여 높이 조정이 애니메이션 시작 후 적용되도록 딜레이
        setTimeout(() => {
            adjustQuestionContainerHeight();
        }, 50); 
    });

    updateNavigationButtons();
}

function adjustQuestionContainerHeight() {
    const activeQuestion = questionsContainer.querySelector('.question-block.active');
    if (activeQuestion) {
        questionsContainer.style.height = `${activeQuestion.offsetHeight}px`;
    } else {
        // 활성화된 질문이 없으면 컨테이너의 높이를 임시로 설정하거나 0으로 설정
        // 퀴즈 초기화 시 빈 화면으로 보이지 않도록 최소 높이 설정
        questionsContainer.style.height = '250px'; // 최소 높이 설정
    }
}


function updateProgressBar() {
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    progressBar.style.width = `${(answeredCount / QUIZ_DATA.length) * 100}%`;
    progressText.textContent = `${answeredCount} / ${QUIZ_DATA.length}`;
    
    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        progressContainer.setAttribute('aria-valuenow', answeredCount);
        progressContainer.setAttribute('aria-valuemax', QUIZ_DATA.length);
        progressContainer.setAttribute('aria-valuetext', `${answeredCount}개 중 ${QUIZ_DATA.length}개 답변 완료`);
    }
}

function updateNavigationButtons() {
    if (currentQuestionIndex > 0) {
        prevQuestionBtn.classList.remove('is-hidden');
    } else {
        prevQuestionBtn.classList.add('is-hidden');
    }

    if (currentQuestionIndex === QUIZ_DATA.length - 1) { // 마지막 질문일 때
        nextQuestionBtn.classList.add('is-hidden');
        if (userAnswers[currentQuestionIndex] !== null) { // 이미 답변했다면 결과보기 버튼 표시
            submitQuizBtn.classList.remove('is-hidden');
            submitQuizBtn.disabled = false;
        } else {
            submitQuizBtn.classList.add('is-hidden');
            submitQuizBtn.disabled = true;
        }
    } else { // 중간 질문
        submitQuizBtn.classList.add('is-hidden');
        if (userAnswers[currentQuestionIndex] !== null) { // 현재 질문에 답변했다면 다음 버튼 활성화
            nextQuestionBtn.classList.remove('is-hidden');
            nextQuestionBtn.disabled = false;
        } else {
            nextQuestionBtn.classList.add('is-hidden'); // 답변 안 했으면 다음 버튼 숨김
            nextQuestionBtn.disabled = true;
        }
    }
}

function calculateDominantTrait() {
    let maxScore = -1;
    let dominantTraitId = '';
    for (const traitId in quizScores) {
        if (quizScores[traitId] > maxScore) {
            maxScore = quizScores[traitId];
            dominantTraitId = traitId;
        }
    }
    return dominantTraitId;
}

function calculateSecondTrait(dominantTraitId) {
    let secondMaxScore = -1;
    let secondTraitId = '';
    for (const traitId in quizScores) {
        if (traitId !== dominantTraitId && quizScores[traitId] > secondMaxScore) {
            secondMaxScore = quizScores[traitId];
            secondTraitId = traitId;
        }
    }
    // 만약 두 번째 특성이 없다면, 가장 높은 특성 외에 다른 특성 중 하나를 반환
    if (!secondTraitId || secondMaxScore <= 0) {
        return Object.keys(TRAITS).find(t => t !== dominantTraitId) || Object.keys(TRAITS)[0];
    }
    return secondTraitId;
}


function calculateResult() {
    for (const traitId in TRAITS) {
        quizScores[traitId] = 0;
    }

    userAnswers.forEach((selectedAnswerIndex, qIndex) => {
        if (selectedAnswerIndex !== null) {
            const scoresToAdd = QUIZ_DATA[qIndex].answers[selectedAnswerIndex].scores;
            for (const traitId in scoresToAdd) {
                if (quizScores[traitId] === undefined) {
                    quizScores[traitId] = 0;
                }
                quizScores[traitId] += scoresToAdd[traitId];
            }
        }
    });

    const dominantTraitId = calculateDominantTrait();
    const secondTraitId = calculateSecondTrait(dominantTraitId);

    const suitableVillagers = Object.values(VILLAGER_RESULTS).filter(
        villager => villager.trait === dominantTraitId
    );
    const result = suitableVillagers.length > 0 ?
                   suitableVillagers[Math.floor(Math.random() * suitableVillagers.length)] :
                   VILLAGER_RESULTS.dom; // 폴백 주민 (램프)

    resultIntroText.textContent = `${userName}님은 바로...`;
    resultImage.src = `https://soopool.art/image/acnh/animal/${encodeURIComponent(result.image_en)}.png`;
    resultImage.alt = `${result.name} 이미지`;
    resultName.textContent = result.name;
    resultPersonality.textContent = result.personality;
    const secondTraitName = TRAITS[secondTraitId] ? TRAITS[secondTraitId].name : '';
    resultDescription.textContent = result.description(userName, TRAITS[dominantTraitId].name, secondTraitName);
    
    window.location.hash = result.image_en;
}

function loadResultFromHash() {
    const villagerEnName = window.location.hash.substring(1);
    if (villagerEnName) {
        const result = Object.values(VILLAGER_RESULTS).find(v => v.image_en === villagerEnName);
        if (result) {
            heroSection.classList.add('is-hidden');
            quizSection.classList.add('is-hidden');

            const traitToDisplay = result.trait;
            const secondTraitToDisplay = calculateSecondTrait(traitToDisplay);
            const secondTraitNameForDisplay = TRAITS[secondTraitToDisplay] ? TRAITS[secondTraitToDisplay].name : '';

            resultIntroText.textContent = `당신은 바로...`;
            resultImage.src = `https://soopool.art/image/acnh/animal/${encodeURIComponent(result.image_en)}.png`;
            resultImage.alt = `${result.name} 이미지`;
            resultName.textContent = result.name;
            resultPersonality.textContent = result.personality;
            resultDescription.textContent = result.description("당신", TRAITS[traitToDisplay].name, secondTraitNameForDisplay);

            ogTitle.setAttribute('content', `나는 모동숲 주민 '${result.name}'!`);
            ogDescription.setAttribute('content', result.description("나는", TRAITS[traitToDisplay].name, secondTraitNameForDisplay));
            ogImage.setAttribute('content', `https://soopool.art/image/acnh/animal/${encodeURIComponent(result.image_en)}.png`);
            ogUrl.setAttribute('content', `https://animal-crossing-test.vercel.app#${villagerEnName}`);
            pageTitle.textContent = `나는 모동숲 주민 '${result.name}'!`;

            resultSection.classList.remove('is-hidden');
            resultSection.classList.add('is-visible');
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}


// --- Helper Functions ---
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
}

// =========================================================
// --- 스크롤 애니메이션 (유지) ---
// =========================================================
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

animateOnScrollElements.forEach(element => {
    observer.observe(element);
});

document.addEventListener('DOMContentLoaded', () => {
    const heroSectionInitial = document.querySelector('.hero-section');
    if (heroSectionInitial && !window.location.hash) {
        heroSectionInitial.classList.add('is-visible');
    }
});
