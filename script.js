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
    dom: {
        name: "램프", image_en: "Dom", personality: "운동광", trait: 'active',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 긍정적이고 에너지가 넘치는 '램프'와 닮았습니다! ${dominantTrait} 성향이 매우 강하여 활기찬 하루를 보내는 것을 좋아하며, 그 열정은 주변에 좋은 영향을 줍니다. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주네요. ` : ''}으라차차!`
    },
    marina: {
        name: "문어", image_en: "Marina", personality: "친절함", trait: 'gentle',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 부드럽고 친절한 '문어'처럼, 언제나 주변을 포근하게 감싸줍니다. ${dominantTrait} 성향이 강하여 평화를 사랑하고 소박한 일상 속 행복을 찾죠. ${secondTrait ? `${secondTrait} 면모도 엿보이네요. ` : ''}당신의 따뜻한 마음은 모두에게 안정감을 줍니다. 우후훗!`
    },
    raymond: {
        name: "잭슨", image_en: "Raymond", personality: "느끼", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 세련되고 지적인 '잭슨'과 닮았습니다! ${dominantTrait} 성향이 강하여 자신만의 확고한 개성을 가지고 있으며, 어떤 상황에서도 침착함을 잃지 않아요. ${secondTrait ? `${secondTrait} 매력도 겸비했네요. ` : ''}당신의 유니크한 매력이 사람들의 시선을 사로잡습니다. 흐음~`
    },
    audie: {
        name: "쭈니", image_en: "Audie", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 밝고 활기찬 '쭈니'와 닮았습니다! ${dominantTrait} 성향이 강하여 끊임없이 새로운 것을 추구하고 즐거운 에너지를 뿜어냅니다. ${secondTrait ? `${secondTrait} 면모까지 있어 ` : ''}사교성이 좋고 호기심이 많죠. 언제나 주변을 즐겁게 만들 줄 아는 매력의 소유자입니다. 오예~`
    },
    marshal: {
        name: "시베리아", image_en: "Marshal", personality: "느끼", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 겉으론 시크하지만 속은 따뜻한 '시베리아'와 닮았습니다! ${dominantTrait} 성향이 강하여 쿨하고 세련된 매력을 뿜어내죠. 쉽게 속마음을 드러내지 않지만, 한 번 친해지면 깊은 신뢰를 보여줍니다. ${secondTrait ? `${secondTrait} 의외의 귀여움이 매력 포인트입니다. ` : ''}흥!`
    },
    beau: {
        name: "피터", image_en: "Beau", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 여유롭고 느긋한 '피터'와 닮았습니다! ${dominantTrait} 성향이 강하여 편안함을 추구하며 자유로운 영혼을 가졌죠. 스트레스를 받지 않고, 맛있는 것과 낮잠을 좋아하는 평화주의자입니다. ${secondTrait ? `${secondTrait} 면모까지 갖춰 ` : ''}주변에 편안함을 줍니다. 으으음...`
    },
    julian: {
        name: "유니콘", image_en: "Julian", personality: "느끼", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 몽환적이고 독특한 '유니콘'과 닮았습니다! ${dominantTrait} 성향이 강하여 자신만의 세계가 확고하며 예술적인 감각을 지녔죠. 현실에 얽매이지 않고 상상력을 발휘하는 것을 좋아합니다. ${secondTrait ? `${secondTrait} 특별함이 늘 주변을 흥미롭게 합니다. ` : ''}반짝!`
    },
    ketchup: {
        name: "케첩", image_en: "Ketchup", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 쾌활하고 발랄한 '케첩'과 닮았습니다! ${dominantTrait} 성향이 강하여 언제나 에너지 넘치고 긍정적이죠. 솔직하고 즉흥적인 매력으로 사람들을 즐겁게 만듭니다. ${secondTrait ? `${secondTrait} 모습까지 겸비한 ` : ''}당신의 밝은 에너지는 모두를 미소 짓게 합니다. 냠냠!`
    },
    stitches: {
        name: "패치", image_en: "Stitches", personality: "먹보", trait: 'lazy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 천진난만하고 귀여운 '패치'와 닮았습니다! ${dominantTrait} 성향이 강하여 주변을 편안하게 만드는 매력이 있습니다. 느긋하게 낮잠 자는 것을 좋아하고, 엉뚱한 상상력으로 당신만의 세계를 펼치죠. ${secondTrait ? `${secondTrait} 모습까지 겸비한 ` : ''}당신은 모두에게 사랑스러운 존재입니다. 헤헤~`
    },
    fang: {
        name: "늑태", image_en: "Fang", personality: "무뚝뚝", trait: 'unique',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 겉으로는 무뚝뚝하지만 속정이 깊은 '늑태'와 닮았습니다! ${dominantTrait} 성향이 강하여 차분하고 사려 깊은 면모를 가지고 있습니다. 불필요한 말을 아끼지만, 진솔한 마음을 보여주는 당신의 반전 매력에 주변 사람들이 빠져듭니다. ${secondTrait ? `${secondTrait} 모습도 보여주네요. ` : ''}흠...`
    },
    flora: {
        name: "플라라", image_en: "Flora", personality: "아이돌", trait: 'peppy',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 언제나 빛나는 '플라라'와 닮았습니다! ${dominantTrait} 성향이 강하여 자신감 넘치고 화려한 매력을 뽐내며, 사람들에게 활력을 불어넣어 줍니다. ${secondTrait ? `${secondTrait} 면모까지 있어 ` : ''}긍정적인 에너지로 모두를 즐겁게 만듭니다. 당신은 마치 무대 위의 주인공 같아요! 예이~`
    },
    ankha: {
        name: "클레오", image_en: "Ankha", personality: "성숙함", trait: 'charming',
        description: (userName, dominantTrait, secondTrait) =>
            `${userName}님은 신비롭고 고귀한 '클레오'와 닮았습니다! ${dominantTrait} 성향이 강하여 품위 있고 자신감 넘치는 태도를 가지고 있습니다. 겉으로 드러내지 않는 카리스마와 깊은 속마음이 매력적이죠. ${secondTrait ? `때로는 ${secondTrait} 모습도 보여주며 ` : ''}당신만의 독특한 분위기로 사람들을 이끌어갑니다. 후훗...`
    }
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
            ogUrl.setAttribute('content', `${window.location.protocol}//${window.location.host}${window.location.pathname}#${currentResultVillagerId}`);
            pageTitle.textContent = `나는 모동숲 주민 '${resultVillager.name}'!`;
        }

    }, 500); // 0.5초 지연
});

resetQuizBtn.addEventListener('click', () => {
    resultSection.classList.add('is-hidden');
    heroSection.classList.remove('is-hidden');
    // 모든 애니메이션 클래스 초기화
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.remove('is-visible');
    });
    // 스크롤을 맨 위로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // OGP 태그 원상 복구 (초기 상태로)
    ogTitle.setAttribute('content', "내 안의 모동숲 주민 찾기");
    ogDescription.setAttribute('content', "나는 모여봐요 동물의 숲에서 어떤 주민일까요? 지금 테스트해보세요!");
    ogImage.setAttribute('content', "https://via.placeholder.com/1200x630/7B68EE/FFFFFF?text=Animal+Crossing+Quiz");
    ogUrl.setAttribute('content', `https://codepen.io/your-username/pen/your-pen-id`); // 초기 URL로 변경
    pageTitle.textContent = "내 안의 모동숲 주민 찾기";

    // 이름은 입력창이 없으므로 "당신"으로 초기화
    userName = "당신"; 
    submitQuizBtn.textContent = '결과보기'; // 버튼 텍스트 원상복구
    submitQuizBtn.disabled = false; // 버튼 활성화
    window.location.hash = ''; // URL 해시 초기화
});

// 공유 버튼 이벤트 리스너
shareButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const shareType = e.target.dataset.share;
        const finalUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${window.location.hash}`;
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

    prevQuestionBtn.classList.add('is-hidden');
    nextQuestionBtn.classList.remove('is-hidden');
    submitQuizBtn.classList.add('is-hidden');
}

function renderQuestion(index, direction) {
    const currentQuestionBlock = questionsContainer.querySelector('.question-block.active');
    if (currentQuestionBlock) {
        // 기존 질문에 애니메이션 클래스 추가 및 제거
        currentQuestionBlock.classList.remove('active');
        if (direction === 'next') {
            currentQuestionBlock.classList.add('leaving-left');
        } else {
            currentQuestionBlock.classList.add('entering-right'); // 이전으로 갈 때
        }
        // 애니메이션 완료 후 실제 제거 (높이 트랜지션 완료 후)
        currentQuestionBlock.addEventListener('transitionend', function handler() {
            this.removeEventListener('transitionend', handler);
            this.remove();
            adjustQuestionContainerHeight(); // 질문 블록 제거 후 높이 재조정
        }, { once: true });
    }

    const qData = QUIZ_DATA[index];

    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');
    questionBlock.setAttribute('role', 'group'); // ARIA role
    questionBlock.setAttribute('aria-labelledby', `question-text-${index}`); // ARIA label

    // 애니메이션을 위해 초기 위치 설정
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
            answerOptionWrapper.classList.add('selected'); // 이전에 선택된 답변 표시
        }

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = `q${index}-a${aIndex}`;
        radioInput.name = `question${index}`;
        radioInput.value = JSON.stringify(answer.scores);
        radioInput.setAttribute('aria-label', answer.text); // ARIA label
        
        // 이전에 선택된 답변이 있다면 체크
        if (userAnswers[index] === aIndex) {
            radioInput.checked = true;
        }

        const customRadio = document.createElement('div');
        customRadio.classList.add('custom-radio');

        const label = document.createElement('label');
        label.htmlFor = `q${index}-a${aIndex}`;
        label.textContent = answer.text;

        answerOptionWrapper.appendChild(radioInput);
        answerOptionWrapper.appendChild(customRadio); // Custom radio indicator
        answerOptionWrapper.appendChild(label);
        answerOptionsDiv.appendChild(answerOptionWrapper);

        // 답변 선택 시 동작
        answerOptionWrapper.addEventListener('click', () => {
            radioInput.checked = true; // 라디오 버튼 체크
            userAnswers[index] = aIndex; // 사용자의 답변 저장

            // 모든 답변 옵션에서 'selected' 클래스 제거 후 현재 선택된 것만 추가
            answerOptionsDiv.querySelectorAll('.answer-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            answerOptionWrapper.classList.add('selected');

            // 짧은 사운드 재생
            playClickSound();

            updateProgressBar();
            updateNavigationButtons();
        });
    });
    questionsContainer.appendChild(questionBlock);

    // 애니메이션 트리거
    setTimeout(() => {
        questionBlock.classList.remove('entering-right', 'leaving-left');
        questionBlock.classList.add('active');
        adjustQuestionContainerHeight(); // 새로운 질문이 나타난 후 높이 조정
    }, 50); // 짧은 딜레이로 애니메이션 적용

    updateNavigationButtons();
}

// 질문 컨테이너의 높이를 현재 활성화된 질문 블록에 맞춰 동적으로 조절
function adjustQuestionContainerHeight() {
    const activeQuestion = questionsContainer.querySelector('.question-block.active');
    if (activeQuestion) {
        questionsContainer.style.height = `${activeQuestion.offsetHeight}px`;
    } else {
        questionsContainer.style.height = '0px';
    }
}


function updateProgressBar() {
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    progressBar.style.width = `${(answeredCount / QUIZ_DATA.length) * 100}%`;
    progressText.textContent = `${answeredCount} / ${QUIZ_DATA.length}`;
    
    // progressbar ARIA 속성 업데이트
    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        progressContainer.setAttribute('aria-valuenow', answeredCount);
        progressContainer.setAttribute('aria-valuemax', QUIZ_DATA.length);
        progressContainer.setAttribute('aria-valuetext', `${answeredCount}개 중 ${QUIZ_DATA.length}개 답변 완료`);
    }
}

function updateNavigationButtons() {
    // 이전 버튼
    if (currentQuestionIndex > 0) {
        prevQuestionBtn.classList.remove('is-hidden');
    } else {
        prevQuestionBtn.classList.add('is-hidden');
    }

    // 다음/결과보기 버튼
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
    // 만약 두 번째 특성이 없다면, 가장 높은 점수의 특성으로 폴백 (같은 특성이 없는 경우)
    if (!secondTraitId) {
        // 모든 트레잇을 순회하며, dominantTraitId와 같지 않은 첫 번째 트레잇을 찾습니다.
        // 이는 최소한의 폴백 로직이며, 실제로는 더 정교한 로직이 필요할 수 있습니다.
        return Object.keys(TRAITS).find(t => t !== dominantTraitId) || Object.keys(TRAITS)[0];
    }
    return secondTraitId;
}


function calculateResult() {
    // 성향 점수 초기화
    for (const traitId in TRAITS) {
        quizScores[traitId] = 0;
    }

    // 모든 질문의 선택된 답변 가져와서 점수 합산
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

    // 해당 성향에 맞는 주민 찾기
    const suitableVillagers = Object.values(VILLAGER_RESULTS).filter(
        villager => villager.trait === dominantTraitId
    );
    // 가장 높은 점수를 받은 특성 내에서 랜덤 선택
    const result = suitableVillagers.length > 0 ?
                   suitableVillagers[Math.floor(Math.random() * suitableVillagers.length)] :
                   VILLAGER_RESULTS.dom; // 기본 폴백 주민 (만약 매칭되는 주민이 없다면)

    // 결과 화면 업데이트
    resultIntroText.textContent = `${userName}님은 바로...`;
    resultImage.src = `https://soopool.art/image/acnh/animal/${encodeURIComponent(result.image_en)}.png`;
    resultImage.alt = `${result.name} 이미지`; // ARIA alt
    resultName.textContent = result.name;
    resultPersonality.textContent = result.personality;
    // 두 번째 특성 이름이 정의되지 않았을 경우, description 함수에서 빈 문자열로 처리
    const secondTraitName = TRAITS[secondTraitId] ? TRAITS[secondTraitId].name : '';
    resultDescription.textContent = result.description(userName, TRAITS[dominantTraitId].name, secondTraitName);
    
    // URL 해시 업데이트
    window.location.hash = result.image_en;
}

function loadResultFromHash() {
    const villagerEnName = window.location.hash.substring(1); // #을 제외한 주민 영문 이름
    if (villagerEnName) {
        // 해당 영문 이름으로 주민 찾기
        const result = Object.values(VILLAGER_RESULTS).find(v => v.image_en === villagerEnName);
        if (result) {
            // 퀴즈 섹션 숨기기
            heroSection.classList.add('is-hidden');
            quizSection.classList.add('is-hidden');

            // 가상으로 점수 계산 (공유된 링크로 바로 접근 시)
            // 실제 답변 기반 점수는 아니지만, 결과 화면을 띄우기 위함
            const traitToDisplay = result.trait;
            const secondTraitToDisplay = calculateSecondTrait(traitToDisplay); // 두 번째 특성 계산
            const secondTraitNameForDisplay = TRAITS[secondTraitToDisplay] ? TRAITS[secondTraitToDisplay].name : '';

            resultIntroText.textContent = `당신은 바로...`; // 이름은 모르므로 일반적인 문구
            resultImage.src = `https://soopool.art/image/acnh/animal/${encodeURIComponent(result.image_en)}.png`;
            resultImage.alt = `${result.name} 이미지`;
            resultName.textContent = result.name;
            resultPersonality.textContent = result.personality;
            resultDescription.textContent = result.description("당신", TRAITS[traitToDisplay].name, secondTraitNameForDisplay); // '당신'으로 대체

            // OGP 태그 업데이트
            ogTitle.setAttribute('content', `나는 모동숲 주민 '${result.name}'!`);
            ogDescription.setAttribute('content', result.description("나는", TRAITS[traitToDisplay].name, secondTraitNameForDisplay)); // 공유 시 1인칭으로
            ogImage.setAttribute('content', `https://soopool.art/image/acnh/animal/${encodeURIComponent(result.image_en)}.png`);
            ogUrl.setAttribute('content', `${window.location.protocol}//${window.location.host}${window.location.pathname}#${villagerEnName}`);
            pageTitle.textContent = `나는 모동숲 주민 '${result.name}'!`;

            resultSection.classList.remove('is-hidden');
            resultSection.classList.add('is-visible');
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}


// --- Helper Functions ---
function playClickSound() {
    // 실제 사운드 파일 URL로 변경 (예: FreeSound.org 또는 동물의 숲 사운드)
    // CodePen에서는 외부 오디오 파일 로딩에 제약이 있을 수 있음.
    // 임시로 작동하지 않을 수 있으나, 개념적으로는 이렇게 사용.
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // 예시 MP3
    audio.volume = 0.3; // 볼륨 조절
    audio.play().catch(e => console.log("Audio play failed:", e));
}

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
    textArea.style.position = "fixed"; // Avoid scrolling to bottom
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

// --- 초기 로드 시 첫 섹션 애니메이션 즉시 적용 ---
document.addEventListener('DOMContentLoaded', () => {
    const heroSectionInitial = document.querySelector('.hero-section');
    if (heroSectionInitial && !window.location.hash) { // 해시가 없을 때만 초기 애니메이션 적용
        heroSectionInitial.classList.add('is-visible');
    }
});
