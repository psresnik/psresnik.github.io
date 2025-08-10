// Video data. Make sure to use backtick strings (`...`) rather than "..." for any strings that might contain newlines!
// Note (crucially!) the export at the end of this file. (This way of organizing things is using something called javascript ES modules.)

const videoData = [
    {
        id: 1,
        title: "Using LLMs to Analyze What People Mean, Not Just What They Say",
        url: "https://youtu.be/7NnC0cfKNr0",
        date: "2024-12-05",
        location: "University of Michigan",
        keywords: ["natural language processing", "large language models", "computational social science", "political communication"],
        abstract: `In computational social science research, we often look at what people say when what we're really interested in is what they think. In linguistics we distinguish between the conventional meaning (semantics) of an utterance and its interpretation (contextualized meaning), which takes into account presuppositions and other unstated aspects of the thought behind the content. Similarly in political communication we talk about framing,  distinguishing between what is said and the implications behind how it is said. In this talk I discuss recent research that bridges this gap by using large language models to make plausible inferences about the unstated content behind what people say. Surfacing this kind of latent content as natural language, rather than some other representation, makes it possible to apply the full arsenal of natural language processing techniques to what people mean rather than just what they say. We have found in several studies that this approach is valuable in making sense of public opinion, analyzing legislator voting behavior, and in going beyond the pro/con/neutral of conventional stance detection to extract both implicit and explicit attitudes and place them on a continuous scale, enabling more effective analysis of issue attitudes in online communities. 

- Alexander Hoyle, Rupak Sarkar, Pranav Goel, and Philip Resnik. 2023. Natural Language Decompositions of Implicit Content Enable Better Text Representations. In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, pages 13188–13214, Singapore. Association for Computational Linguistics. https://aclanthology.org/2023.emnlp-main.815/

- Rupak Sarkar, Patrick Y. Wu, Kristina Miler, Alexander Miserlis Hoyle, Philip Resnik. 2025. PairScale: Analyzing Attitude Change with Pairwise Comparisons. Findings of the 2025 Annual Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics.`,
        transcript: ""
    },
    {
        id: 2,
        title: "Prediction All the Way Down",
        url: "https://youtu.be/LfhH-kFiNgM",
        date: "2025-03-29",
        location: "Invited talk, Human Sentence Processing Conference, University of Maryland",
        keywords: ["natural language processing", "predictive processing", "psycholinguistics and neurolinguistics", "computational social science", "political communication"],
        abstract: `Prediction plays an essential role in language processing. In psycholinguistics we tend to interpret that sentence pretty narrowly -- what word are we expecting next? In this talk, I argue that we should be interpreting it more broadly. What we think of as prediction has a role to play not only in basic research on language processing, but also in characterizing social phenomena at the level of individuals and communities. I'll argue for a general characterization of prediction, and discuss the way it applies not only to the usual questions we ask in sentence processing but also to societally relevant issues like political communication and mental health, a perspective that makes the things we think about in psycholinguistics more directly relevant as we seek to understand and affect what's happening in the world around us.`,
        transcript: ""
    },
    {
        id: 3,
        title: "What You Should Know About ChatGPT",
        url: "https://youtu.be/ncxPB8iCPP0?si=7ESHW2G2MKGbmOua",
        date: "2023-06-02",
        location: "UMD Alumni Association Board of Governors Meeting, University of Maryland",
        keywords: ["natural language processing", "large language models", "ai ethics"],
        abstract: `This talk provided a non-technical overview of ChatGPT for a general audience, including the basic ideas behind how it works, and discussion of fundamental issues including potential impacts and risks. Although large language model technology has evolved significantly since then, as of this writing (April 2025) the core take-aways have not changed.`,
        transcript: ""
    },
    {
        id: 4,
        title: "Mental Health and AI: From Language Analysis to Clinical Utility",
        url: "https://www.youtube.com/watch?v=nPE4-t8gMY0&t=272s",
        date: "2022-11-29",
        location: "Invited talk at Amazon AWS re:Invent 2022",
        keywords: ["natural language processing", "mental health", "suicide prevention"],
        abstract: `This talk was invited as part of the first-ever session during Amazon's annual AWS re:Invent conference to be devoted to presentation of research that was supported by the Amazon Research Awards program. It includes discussion of real-world needs for mental health technology, with a focus on natural language processing methods for classification and computer assisted content analysis as applied to suicidality`,
        transcript: ""
    },
    { 
        id: 5, 
        title: "TopicGPT: A Prompt-based Topic Modeling Framework", 
        url: "https://aclanthology.org/2024.naacl-long.164.mp4", 
        date: "2024", 
        location: "2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies", 
        keywords: ["natural language processing", "topic modeling", "large language models"], 
        abstract: "[I'm a co-author. Talk by lead author Chau Minh Pham.] Topic modeling is a well-established technique for exploring text corpora. Conventional topic models (e.g., LDA) represent topics as bags of words that often require \"reading the tea leaves\" to interpret; additionally, they offer users minimal control over the formatting and specificity of resulting topics. To tackle these issues, we introduce TopicGPT, a prompt-based framework that uses large language models (LLMs) to uncover latent topics in a text collection. TopicGPT produces topics that align better with human categorizations compared to competing methods: it achieves a harmonic mean purity of 0.74 against human-annotated Wikipedia topics compared to 0.64 for the strongest baseline. Its topics are also more interpretable, dispensing with ambiguous bags of words in favor of topics with natural language labels and associated free-form descriptions. Moreover, the framework is highly adaptable, allowing users to specify constraints and modify topics without the need for model retraining. By streamlining access to high-quality and interpretable topics, TopicGPT represents a compelling, human-centered approach to topic modeling.", 
        transcript: "" 
    },
    { 
        id: 6, 
        title: "Natural Language Decompositions of Implicit Content Enable Better Text Representations", 
        url: "https://aclanthology.org/2023.emnlp-main.815.mp4", 
        date: "2023", 
        location: "2023 Conference on Empirical Methods in Natural Language Processing", 
        keywords: ["natural language processing", "large language models", "computational social science", "political communication"], 
        abstract: "[I'm senior author. Talk by lead author Alexander Hoyle.] When people interpret text, they rely on inferences that go beyond the observed language itself. Inspired by this observation, we introduce a method for the analysis of text that takes implicitly communicated content explicitly into account. We use a large language model to produce sets of propositions that are inferentially related to the text that has been observed, then validate the plausibility of the generated content via human judgments. Incorporating these explicit representations of implicit content proves useful in multiple problem settings that involve the human interpretation of utterances: assessing the similarity of arguments, making sense of a body of opinion data, and modeling legislative behavior. Our results suggest that modeling the meanings behind observed language, rather than the literal text alone, is a valuable direction for NLP and particularly its applications to social science.", 
        transcript: "" 
    },
    { 
        id: 7, 
        title: "Are Neural Topic Models Broken?", 
        url: "https://aclanthology.org/2022.findings-emnlp.390.mp4", 
        date: "2022", 
        location: "Findings of the Association for Computational Linguistics: EMNLP 2022", 
        keywords: ["natural language processing", "topic modeling"], 
        abstract: "[I'm senior author. Talk by lead author Alexander Hoyle.] Recently, the relationship between automated and human evaluation of topic models has been called into question. Method developers have staked the efficacy of new topic model variants on automated measures, and their failure to approximate human preferences places these models on uncertain ground. Moreover, existing evaluation paradigms are often divorced from real-world use. Motivated by content analysis as a dominant real-world use case for topic modeling, we analyze two related aspects of topic models that affect their effectiveness and trustworthiness in practice for that purpose: the stability of their estimates and the extent to which the model's discovered categories align with human-determined categories in the data. We find that neural topic models fare worse in both respects compared to an established classical method. We take a step toward addressing both issues in tandem by demonstrating that a straightforward ensembling method can reliably outperform the members of the ensemble.", 
        transcript: "" 
    },
    { 
        id: 8, 
        title: "Syntopical Graphs for Computational Argumentation Tasks", 
        url: "https://aclanthology.org/2021.acl-long.126.mp4", 
        date: "2021", 
        location: "59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing", 
        keywords: ["natural language processing", "computational social science"], 
        abstract: "[I'm a co-author. Talk by lead author Joe Barrow.] Approaches to computational argumentation tasks such as stance detection and aspect detection have largely focused on the text of independent claims, losing out on potentially valuable context provided by the rest of the collection. We introduce a general approach to these tasks motivated by syntopical reading, a reading process that emphasizes comparing and contrasting viewpoints in order to improve topic understanding. To capture collection-level context, we introduce the syntopical graph, a data structure for linking claims within a collection. A syntopical graph is a typed multi-graph where nodes represent claims and edges represent different possible pairwise relationships, such as entailment, paraphrase, or support. Experiments applying syntopical graphs to the problems of detecting stance and aspects demonstrate state-of-the-art performance in each domain, significantly outperforming approaches that do not utilize collection-level information.", 
        transcript: "" 
    },
    { 
        id: 9, 
        title: "Using surprisal and fMRI to map the neural bases of broad and local contextual prediction during natural language comprehension", 
        url: "https://aclanthology.org/2021.findings-acl.332.mp4", 
        date: "2021", 
        location: "Findings of the Association for Computational Linguistics: ACL-IJCNLP 2021", 
        keywords: ["natural language processing", "psycholinguistics and neurolinguistics", "predictive processing"], 
        abstract: "[I'm co/senior author. Talk by Shohini Bhattasali.] Context guides comprehenders' expectations during language processing, and information theoretic surprisal is commonly used as an index of cognitive processing effort. However, prior work using surprisal has considered only within-sentence context, using n-grams, neural language models, or syntactic structure as conditioning context. In this paper, we extend the surprisal approach to use broader topical context, investigating the influence of local and topical context on processing via an analysis of fMRI time courses collected during naturalistic listening. Lexical surprisal calculated from ngram and LSTM language models is used to capture effects of local context; to capture the effects of broader context a new metric based on topic models, topical surprisal, is introduced. We identify distinct patterns of neural activation for lexical surprisal and topical surprisal.", 
        transcript: "" 
    },
    { 
        id: 10, 
        title: "Improving Neural Topic Models using Knowledge Distillation", 
        url: "https://slideslive.com/38939229", 
        date: "2020", 
        location: "2020 Conference on Empirical Methods in Natural Language Processing", 
        keywords: ["natural language processing", "topic modeling"], 
        abstract: "[I'm senior author. Talk by lead authors Alexander Hoyle and Pranav Goel.] Topic models are often used to identify human-interpretable topics to help make sense of large document collections. We use knowledge distillation to combine the best attributes of probabilistic topic models and pretrained transformers. Our modular method can be straightforwardly applied with any neural topic model to improve topic quality, which we demonstrate using two models having disparate architectures, obtaining state-of-the-art topic coherence. We show that our adaptable framework not only improves performance in the aggregate over all estimated topics, as is commonly reported, but also in head-to-head comparisons of aligned topics.", 
        transcript: "" 
    },
    { 
        id: 11, 
        title: "A Joint Model for Document Segmentation and Segment Labeling", 
        url: "http://slideslive.com/38929073", 
        date: "2020", 
        location: "58th Annual Meeting of the Association for Computational Linguistics", 
        keywords: ["natural language processing"], 
        abstract: "[I'm co-senior author. Talk by lead author Joe Barrow.] Text segmentation aims to uncover latent structure by dividing text from a document into coherent sections. Where previous work on text segmentation considers the tasks of document segmentation and segment labeling separately, we show that the tasks contain complementary information and are best addressed jointly. We introduce Segment Pooling LSTM (S-LSTM), which is capable of jointly segmenting a document and labeling segments. In support of joint training, we develop a method for teaching the model to recover from errors by aligning the predicted and ground truth segments. We show that S-LSTM reduces segmentation error by 30% on average, while also improving segment labeling.", 
        transcript: "" 
    },
    { 
        id: "12", 
        title: "A Prioritization Model for Suicidality Risk Assessment", 
        url: "http://slideslive.com/38929150", 
        date: "2020", 
        location: "58th Annual Meeting of the Association for Computational Linguistics", 
        keywords: ["natural language processing", "mental health", "suicide prevention"], 
        abstract: "[I'm co-senior author. Presentation by Han Chin Shing.] We reframe suicide risk assessment from social media as a ranking problem whose goal is maximizing detection of severely at-risk individuals given the time available. Building on measures developed for resource-bounded document retrieval, we introduce a well founded evaluation paradigm, and demonstrate using an expert-annotated test collection that meaningful improvements over plausible cascade model baselines can be achieved using an approach that jointly ranks individuals and their social media posts.", 
        transcript: "" 
    },
    {
        id: 17, 
        title: "State of Sentiment", 
        url: "https://vimeo.com/32506363",
        date: "2011-11-09",
        location: "Keynote talk at the Sentiment Analysis Symposium", 
        keywords: ["natural language processing", "entrepreneurship"], 
        abstract: "Perspectives on the state of sentiment analysis at a conference focused on that issue primarily from industry perspectives."
    },
    {
        id: 18, 
        title: "Careers in the Industry Panel", 
        url: "https://vimeo.com/277674368",
        date: "2018-06-29",
        location: "ACL conference", 
        keywords: ["career advice", "entrepreneurship", "natural language processing"], 
        abstract: "I moderated this panel, conducted as part of the 'industry' track at a top natural language processing conference.  It was a diverse and wide-ranging discussion that included perspectives from industry large and small, and from both junior and senior academics."
    },
    {
        id: 19, 
        title: "How can you contribute to the field of natural language processing?", 
        url: "https://www.youtube.com/watch?v=5bz7IVDQR6w",
        date: "2021-04-20",
        location: "Online course",
        keywords: ["career advice", "natural language processing"], 
        abstract: "Conversation with Jordan Boyd-Graber for our NLP class"
    },
    {
        id: 20, 
        title: "Where can (and should) you publish your natural language processing research? ", 
        url: "https://www.youtube.com/watch?v=35AO0dU3m40",
        date: "2021-04-21",
        location: "Online course",
        keywords: ["career advice", "natural language processing"], 
        abstract: "Conversation with Jordan Boyd-Graber for our NLP class"
    },
    {
        id: 21, 
        title: "What kind of a job can you get with a degree in Natural Language Processing?", 
        url: "https://www.youtube.com/watch?v=3e6TchIg55k",
        date: "2021-04-21",
        location: "Online course",
        keywords: ["career advice", "natural language processing"], 
        abstract: "Conversation with Jordan Boyd-Graber for our NLP class"
    },
    {
        id: 22, 
        title: "Moving from Individual Prediction to Population Priorities in Suicide Prevention", 
        url: "https://www.youtube.com/watch?v=RReb700UcLI",
        date: "2022-05-12",
        location: "National Academies of Science, Engineering and Medicine Workshop on Innovative Data Science Approaches to assess Suicide Risk in Individuals, Population, and Communities: Current Practices, Opportunities, and Risks", 
        keywords: ["natural language processing", "mental health", "suicide prevention"],
        abstract: "The majority of technological research on detection of suicidality focuses on individual-level predictive models. However, making a yes-or-no prediction about an individual's risk is only one piece of the puzzle.  Clinicians need to actually understand what's going on with their patients, and the mental health ecosystem needs to cope with an unyielding shortage of resources for assessment and intervention.  In this talk, I'll look at some ways that machine learning can help in tackling suicide prevention from these angles."
    },
    {
        id: 23, 
        title: "CHITA 2019 academic keynote", 
        url: "https://www.youtube.com/watch?v=fZ_Ofxe7HJA",
        date: "2019-12-20",
        location: "Keynote, Center for Health Information Decision Systems Conference",
        keywords: ["natural language processing", "mental health"],
        abstract: "The key take-aways from this talk: Mental health technology research matters. Unstructured language (both clinical records and patient-generated) matters. It *is* possible to do this kind of work ethically and securely, if the data are available; we desperately need to focus on making the data available. Enough progress has been made that it's time to start getting serious about real-world deployment and interventions."
    },
    {
        id: 24, 
        title: "SoDa Symposium, How Can Large Language Models Help Us Identify and Use Constructs that We Can Trust?", 
        url: "https://www.youtube.com/watch?v=95VPdpVoCn4",
        date: "2024-04-25",
        location: "UMD Social Data Science Center symposium", 
        keywords: ["natural language processing", "large language models", "computational social science", "survey research"],
        abstract: "This joint talk with Alexander Hoyle focuses on the fact that automated computational methods are typically not designed for use in social science, where there is a significant requirement for construct validity, i.e. clearly characterizing what is being measured and validating that your measurement method is actually measuring what you want it to. The talk briefly discusses TOPCAT, a curated topic modeling approach, as well as work on using LLMs for construct development. "
    },
    {
        id: 25, 
        title: "SoDa Symposium, Rehabilitation of open-ends: Creating a codebook for open-ends using machine learning techniques and human intervention that then can be used to drive action", 
        url: "https://www.youtube.com/watch?v=EnptYD9Z8BQ",
        date: "2022-12-13",
        location: "UMD Social Data Science Center symposium",
        keywords: ["natural language processing", "computational social science", "survey research",  "topic modeling"],
        abstract: "I sometimes describe open-ended questions/responses as the 'bastard stepchild' of survey research. Open ends can be extremely valuable, providing greater nuance, helping respondents feel listened to, and offering bottom-up insights, but survey researchers tend to avoid them because, quite frankly, language responses are an enormous pain to analyze. This joint talk with Carol Haney, Head of Research and Data Science at Qualtrics, looks at computational methods for making use of open-ends that combine the scalability provided by automation with the quality control and insight afforded by human engagement with the technological proces."
    },
    {
        id: 26, 
        title: "The Trigger SXSW: Philip Resnik, React Labs", 
        url: "https://www.youtube.com/watch?v=rtZmwzla964",
        date: "2014-03-09",
        location: "Brief IPG Media Lab interview at South by Southwest Interactive (SXSWi)", 
        keywords: ["entrepreneurship", "political communication", "computational social science", "natural language processing"],
        abstract: "SXSW interview with Philip Resnik, University of Maryland Professor and Founder of React Labs a real-time mobile polling platform."
    },
    {
        id: 27, 
        title: "React Labs App", 
        url: "https://www.youtube.com/watch?v=G1btlpH5FIM",
        date: "2014-05-23",
        location: "CTV News", 
        keywords: ["entrepreneurship", "political communication", "computational social science", "natural language processing"],
        abstract: "Local TV station interview: 'University of Maryland Professor Philip Resnik, creator of React Labs, a new platform for real-time polling, stops by to talk about the mobile app.'"
    },
    {
        id: 28, 
        title: "Listening to Voters in Real Time", 
        url: "https://www.youtube.com/watch?v=jgDahrS9e1o",
        date: "2012-10-04",
        location: "University of Maryland", 
        keywords: ["political communication", "computational social science", "natural language processing", "entrepreneurship", "survey research"],
        abstract: `The debate watch event at the University of Maryland on October 3, 2012 featured a new platform for real-time polling from React Labs. Developed by University of Maryland Professor Philip Resnik, React Labs runs on the most popular mobile devices (iPhone, Android, iPad, and on laptops running Chrome, Firefoxor Safari), and it will allow participants - including those at the Maryland event - to register their moment-by-moment reactions to what candidates are saying during the debate using button taps to indicate when they agree or disagree, and when they think candidates are spinning answers or dodging the question. It also supports pre- and post-debate surveys (e.g. demographics, partisanship, issue priorities) as well as questions during the event (e.g. Which candidate best addressed your concerns about healthcare?). 

"React Labs is important because, for the first time, we have a technology that brings together the immediacy of real-time reactions, the reach of smartphones, and the precision of traditional polls," says Professor Resnik. "I'd like to see it become the go-to tool for tapping into public opinions as important events are taking place. The students participating in React Labs: Educate may never be willing to answer survey questions on a landline phone -- if they even have a landline phone! -- but they're using their mobile devices every day, and they want their voices to be heard." 

The first debate featured more than 3700 participants in React Labs: Educate across the U.S. - from College Park to U.C. Davis - taking part in the polling. You can download a PowerPoint presentation about the latest findings from this poll on the React Labs:Educate website at http://reactlabseducate.wordpress.com

Public Policy Dean Don Kettl served as host for the evening.`
    },
    {
        id: 29, 
        title: "The Human Element in AI", 
        url: "https://www.youtube.com/watch?v=XL7ikwr-dKw",
        date: "2018-11-28",
        location: "Biznology Webinar",
        keywords: ["entrepreneurship", "natural language processing"], 
        abstract: `Discussion with Mike Moran. Description: "Right now AI is everywhere, with excitement about everything from self-driving cars to conversational home assistants to automating healthcare diagnoses. A great deal of that excitement comes from recent developments that allow machines to learn really effectively. 

Is machine learning all there is to AI, though?  Is there a role for human knowledge and insight in building smarter technology? In this free 30-minute Biznology® discussion, we’ll talk with AI and natural language processing expert Philip Resnik about how AI got to where it is now, and where the human element fits in.

Special presentation sponsored by Gerris Corp, Thematically, Converseon and SoloSegment."`
    },
    {
        id: 30, 
        title: "AI & Data Ethics", 
        url: "https://www.youtube.com/watch?v=Z0dGYfIVqIE",
        date: "2022-07-22",
        location: "Digital Mental Health Conference (DIMH)", 
        keywords: ["ai ethics", "mental health", "natural language processing"],
        abstract: "Panel on AI and ethics in the context of mental health."
    },
    {
        id: 32, 
        title: "Analyzing social media for suicide risk using natural language processing", 
        url: "https://www.youtube.com/watch?v=PPtdy8EZHR0",
        date: "2021-06-18",
        location: "Amazon AWS Machine Learning Summit", 
        keywords: ["natural language processing", "mental health", "suicide prevention"],
        abstract: "The problem of suicide already existed long prior to COVID-19 as a kind of international pandemic in its own right. The toll that mental illness takes worldwide is enormous, and in the U.S. in 2016 suicide became the second leading cause of death among those aged 10-34 and the fourth among those aged 35-54. Compounding these existing problems is an 'echo pandemic' in the wake of COVID-19, as people have struggled with isolation, stress, and sustained disruptions of day to day life. In this session, we will talk about opportunities and challenges in applying natural language processing and machine learning approaches to assess suicide risk and in computational research on mental health more generally. This will include advocating for a shift in emphasis from binary classification to prioritization under limited-resource constraints and a discussion of secure data enclaves as a practical way to make technological collaborations possible with sensitive data."
    },
    {
        id: 33, 
        title: "Prompt Engineering, Security in Generative AI, and the Future of AI Research", 
        url: "https://www.youtube.com/watch?v=FreXovgG-9A",
        date: "2024-09-24",
        location: "Vanishing Gradients podcast", 
        keywords: ["natural language processing", "large language models", "ai ethics"],
        abstract: `In the world of generative AI, prompt engineering is a powerful technique that complements retrieval-augmented generation (RAG) and fine-tuning. While much attention has been on fine-tuning and RAG, prompt engineering continues to be a highly effective way to guide model behavior and achieve optimal results without requiring massive model updates.

​Sander Schulhoff (University of Maryland, Learn Prompting), Denis Peskoff (Princeton University), and Philip Resnik (University of Maryland) recently led the creation of The Prompt Report—a comprehensive 76-page survey analyzing over 1,500 prompting papers. This groundbreaking work categorizes prompting techniques into seven distinct areas and introduces a novel benchmarking approach on MMLU. With over 40 steps documented by expert prompt engineers, the paper provides invaluable insights into the state and future of prompt engineering.

​Join Sander, Denis, Philip, and Hugo Bowne-Anderson (Vanishing Gradients) for a deep dive into prompt engineering, generative AI security, and the future directions of AI research.

​Topics Covered:

- The Evolution of Prompt Engineering: How prompt engineering has grown to complement fine-tuning and RAG techniques. We’ll explore its current state and where it fits in the broader generative AI landscape.
- Taxonomy of Prompting Techniques: A detailed breakdown of prompting methods, focusing on the six-part taxonomy, including chain-of-thought and self-criticism prompting, and how they influence AI model behavior.
- The Learn Prompting Paper: This comprehensive survey categorizes prompting techniques into seven key areas: ✏️ Text-based Prompting, 🌐 Multilingual Techniques, 🎨 Multimodal Techniques, 🤖 Agents, 📊 Evaluation, 🔒 Security, and ⚖️ Alignment. With 31 contributors and the assistance of generative AI systems, this paper presents the latest findings in prompting research and benchmarking.
- ​Applications Beyond Text: How prompting extends beyond text generation into text-to-image, text-to-music, and text-to-video applications, and how these techniques are reshaping multiple fields.
- Security in Generative AI: Exploring the challenges of prompt injections, hacking, and other security concerns in generative AI. We’ll discuss both technical vulnerabilities and broader implications for AI systems.
- ​Future Directions in AI: Speculating on the future of AI research, including how prompt engineering might intersect with robotics, augmented reality (AR), and virtual reality (VR) to expand the capabilities of AI in the real world.

​By the end of this session, you’ll gain practical insights on how to use prompt engineering techniques to enhance AI outputs, ensure better security, and anticipate future trends in the field.

00:00:00 Introduction and Guest Backgrounds
00:05:54 Defining Prompting and Its Importance
00:11:33 Taxonomy of Prompting Techniques
00:39:42 Challenges in Evaluating Prompting Techniques
00:42:57 Few-shot Learning and Its Impact
00:59:38 Practical Applications of Prompting
01:06:41 Self-Criticism and Multi-Agent Systems
01:25:29 Multimodal AI and Prompting
01:30:25 Case Study: Suicide Risk Detection
01:37:52 Prompting Techniques in the Case Study
01:41:37 Comparison with Traditional Machine Learning
01:49:26 Security Concerns in Generative AI
01:49:50 Hacker Prompt 2.0 and Community Involvement
01:52:09 Future of LLMs: Energy Consumption
01:54:22 Forecasting LLMs and Prompting in 5 Years
01:56:06 Positive Impacts and Closing Thoughts`
    },
    {
        id: 34, 
        title: "React Labs Reinvents Real Time Polling", 
        url: "https://www.youtube.com/watch?v=GYUFztfnT44",
        date: "2012-10-23",
        location: "University of Maryland news piece highlighting React Labs being used during an Obama/Romney presidential debate",
        keywords: ["political communication", "computational social science", "natural language processing", "entrepreneurship", "survey research"], 
        abstract: "'A new real-time polling Web app, React Labs, captures instantaneous reactions to political events and breaks it down by demographic, allowing its developer, University of Maryland Professor Philip Resnik, to collect the kind of data dinnertime pollsters never could. Evelyn Rabil Reports for UMDNewsdesk.' Using React Labs during this debate was part of a broader experiment with the technology, with political science expert Amber Boydstun, conducted across the country with thousands of participants."
    },
    {
        id: 35, 
        title: "Info Science Inventions: React Labs", 
        url: "https://www.youtube.com/watch?v=pfNgy06vRCY",
        date: "2013-04-16",
        location: "Maryland Technology Enterprise Institute (MTech)",
        keywords: ["political communication", "computational social science", "natural language processing", "entrepreneurship"], 
        abstract: "MTech piece on UMD entrepreneurial tech innovations begins with a segment about the React Labs platform for real-time response measurement."
    },
    {
        id: 36, 
        title: "Analyzing social media for suicide risk using natural language processing", 
        url: "https://www.youtube.com/watch?v=PPtdy8EZHR0",
        date: "2021-06-18",
        location: "Amazon AWS Machine Learning Summit", 
        keywords: ["natural language processing", "mental health", "suicide prevention"],
        abstract: "The problem of suicide already existed long prior to COVID-19 as a kind of international pandemic in its own right. The toll that mental illness takes worldwide is enormous, and in the U.S. in 2016 suicide became the second leading cause of death among those aged 10-34 and the fourth among those aged 35-54. Compounding these existing problems is an 'echo pandemic' in the wake of COVID-19, as people have struggled with isolation, stress, and sustained disruptions of day to day life. In this session, we will talk about opportunities and challenges in applying natural language processing and machine learning approaches to assess suicide risk and in computational research on mental health more generally. This will include advocating for a shift in emphasis from binary classification to prioritization under limited-resource constraints and a discussion of secure data enclaves as a practical way to make technological collaborations possible with sensitive data."
    },
    {
        id: 37, 
        title: "Getting Real(-time) with Live Polling", 
        url: "https://vimeo.com/68210812",
        date: "2013-05-08",
        location: "Sentiment Analysis Symposium", 
        keywords: ["political communication", "computational social science", "natural language processing", "entrepreneurship", "survey research"], 
        abstract: "Presentation about the React Labs platform for real-time response measurement."
    },
    {
        id: 38, 
        title: "The (In)ability to Triangulate in Data Driven Healthcare Research", 
        url: "https://vimeo.com/243917741",
        date: "2017-11-21",
        location: "National Academies of Sciences Engineering and Medicine panel on 'Cultural, Linguistic, and Behavioral Research and the Triangulation of Data'", 
        keywords: ["natural language processing", "mental health"],
        abstract: "Healthcare is a national security issue. The care of our veterans has a direct impact on ability to recruit -- Max Brooks of the Modern War Institute at West Point speaks of 'forgotten men, crippled by addiction and PTSD...  These there the men who taught my generation that 'Be All That You Can Be' could look a lot like being left vulnerable by the country you risked your life for.' About a third of young adults between the ages of 17 and 24 cannot qualify for military service because they are overweight or obese.  And a country struggling to meet its internal healthcare challenges is a country with less attention to spend on its relationships with the rest of the world. The ability to analyze large quantities of data is fostering dramatic progress in a multitude of research areas.  Healthcare research should be a prime candidate for big data analysis, with the potential for triangulating among the language of clinical narratives, structured data in medical records,  and behavioral data in social media. But research in this area is severely hampered by lack of researcher access to data they badly need.  In this presentation I will lay out the problem, talk about the kinds of research that should be possible, and discuss some potential solutions."
    },
    {
        id: 39, 
        title: "There and Back Again: Reflections for Students After 34 Years",
        url: "https://us06web.zoom.us/rec/play/vfzJ8UaW0Tvv97Vj0urlEZEPjrzWaRL3WsFjwaTUIDzZ3r2QK7JxxZIzaI-1en4T_QCaKVudPg5RyD14.8Siixjo3DQPQppQq",
        date: "2025-05-01",
        location: "Keynote talk, NAACL Student Research Workshop, Albuquerque NM", 
        keywords: ["career advice", "natural language processing"], 
        abstract: `Although it's a fact buried in the depths of history, as a grad student I led the creation of the ACL Student Sessions, which began as an experiment at ACL 1991 at Berkeley and evolved into today's Student Research Workshops at multiple *ACL conferences.  I've evolved too, since then, or at least I'd like to think so.  In this talk I'm going to offer some hopefully-useful reflections on the state of our field, especially for newly budding reseachers, and share some time-tested advice for school and beyond.
	
Up to ~17:30 - relevant personal background and a couple of top level lessons
17:30-28:00 - reflections on research, including e.g. the distinction between problems and tasks/benchmarks
28:00-43:00 - advice for students (and anyone)
43:00 - 1:00:02 - reflections on NLP, including my diagnosis of why the field has gone off the rails 
1:00:02-1:24:00 - Q&A`
    },
    {
        id: 40, 
        title: "Large Language Models Are Biased Because They Are Large Language Models",
	url: "https://www.youtube.com/watch?v=WLSuhe7LJOY",
        date: "2025-07-16",
        location: 'Computational Linguistics (<A HREF="https://doi.org/10.1162/coli_a_00558">https://doi.org/10.1162/coli_a_00558</A>); ACL 2025, Vienna', 
        keywords: ["natural language processing", "ai ethics"],
	abstract: `This position paper’s primary goal is to provoke thoughtful discussion about the relationship between bias and fundamental properties of large language models. I do this by seeking to convince the reader that harmful biases are an inevitable consequence arising from the design of any large language model as LLMs are currently formulated. To the extent that this is true, it suggests that the problem of harmful bias cannot be properly addressed without a serious reconsideration of AI driven by LLMs, going back to the foundational assumptions underlying their design.`
    },
    {
        id: 41, 
        title: "What Are Large Language Models Models Of?",
	url: "https://youtu.be/Gt7IAT9lgrQ",
        date: "2025-07-21",
        location: 'Dagstuhl Seminar 25301, Dagstuhl, Germany', 
        keywords: ["large language models", "psycholinguistics and neurolinguistics", "predictive processing"],
	abstract: 'Should we be thinking of LLMs as cognitive models for human language processing?  This talk was originally given at the July 2025 Dagstuhl Seminar on "Linguistics and Language Models: What Can They Learn from Each Other?". Its goal is to go beyond the "argument from amazingness" -- that LLMs are so good at human language that they must be doing something similar to what we do -- to a more careful and critical assessment of what it means to model human language processing, and why it might or might not make sense to view LLMs as models in that sense.'
    }
];


export default videoData;
