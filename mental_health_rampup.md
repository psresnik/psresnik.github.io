
# Ramp-up readings for work on NLP in mental health with a suicidality focus

## Overview

This page is intended as a reasonable and current (as of mid-2026) starting point for someone with computer science and basic machine learning background to get relevant background on NLP for mental health with a focus on suicide, one of my main research areas.

I created this annotated reading list by first prompting Claude Open 4.7 Deep Research then reviewing/editing the results. If I've unintentionally left in any errors (e.g. URLs that don't work) or if there are problems with any of these references, email me and let me know.

## Quick Start

A reasonably manageable set of readings to start with; see below for full references/URLs and brief descriptions.  Note that for any ramp-up in a new area, I recommend strongly *against* deep/close reading -- that way lies madness. The goal in getting started is not to deeply understand everything a paper is saying, it's to get the main ideas. Deeper reading comes when a specific research direction is established.

- Chancellor, S., & De Choudhury, M. (2020). Good starting point overview of NLP for mental health. As a 2020 paper this is not up to date with the revolution in LLM-based work but it's a good way to get up to speed on core issues.

- Coppersmith, G., Leary, R., Crutchley, P., & Fine, A. (2018). Seminal paper on NLP specifically related to for prediction/screening for suicide risk.

- Shing, H.-C., Nair, S., Zirikly, A., Friedenberg, M., Daumé III, H., & Resnik, P. (2018).  UMD Reddit Suicidality Dataset.

- Klonsky, E. D., Saffer, B. Y., & Bryan, C. J. (2018).  Brief but very useful overview of theoretical, psychology background related to suicide, focusing on ideation-to-action frameworks.

- Rogers, M. L., Galynker, I., Yaseen, Z., DeFazio, K., & Joiner, T. E. (2017).  Nice, brief overview of psychological/clinical approaches that look specifically at suicidal crisis as opposed to longer-term risk.

- Benton, A., Coppersmith, G., & Dredze, M. (2017).  A short must-read for ethical considerations in this space.


## Annotated Reading List: NLP for Mental Health / Suicidality

### I. Overview/Survey: NLP Applied to Mental Health

Chancellor, S., & De Choudhury, M. (2020). Methods in predictive techniques for mental health status on social media: A critical review. *npj Digital Medicine, 3*, 43. [https://doi.org/10.1038/s41746-020-0233-7](https://doi.org/10.1038/s41746-020-0233-7)

-  The single best starting-point NLP survey for a CS student. Covers the full pipeline of social media-based mental health prediction—datasets, feature extraction, ML methods, validation approaches, and limitations—with a critical meta-level lens. Accessible and rigorous. Encompasses depression, suicide, PTSD, and related conditions. 

Ophir, Y., Tikochinski, R., Brunstein Klomek, A., & Reichart, R. (2022). The Hitchhiker's Guide to Computational Linguistics in Suicide Prevention. *Clinical Psychological Science, 10*(2), 212–235. [https://doi.org/10.1177/21677026211022013](https://doi.org/10.1177/21677026211022013)

-  Excellent bridge piece written for a clinical psychology audience but assuming basic CS familiarity—ideal for orienting someone coming from NLP to the suicide-specific problem space. Reviews CL methods in suicide prevention, covers ethical and methodological issues, and argues for real-world deployment standards. 


### II. NLP for Suicide Risk

Coppersmith, G., Leary, R., Crutchley, P., & Fine, A. (2018). Natural language processing of social media as screening for suicide risk. *Biomedical Informatics Insights, 10*, 1178222618792860. [https://doi.org/10.1177/1178222618792860](https://doi.org/10.1177/1178222618792860)

-  A seminal paper using social media in the "clinical whitespace".  Demonstrates social media NLP for suicide risk screening and engages with safe messaging guidelines and responsible deployment. 

Shing, H.-C., Nair, S., Zirikly, A., Friedenberg, M., Daumé III, H., & Resnik, P. (2018). Expert, crowdsourced, and machine assessment of suicide risk via online postings. In *Proceedings of the Fifth Workshop on Computational Linguistics and Clinical Psychology*, pages 25–36. Association for Computational Linguistics. [https://aclanthology.org/W18-0603/](https://aclanthology.org/W18-0603/)

-  The foundational paper for the UMD Reddit Suicidality dataset — describes how the dataset was constructed, annotated by both mental health professionals and crowd workers, and the annotation schema (no/low/moderate/severe risk). Essential reading before engaging with any CLPsych shared task system paper.  Note that the methods/experimentation here can largely be ignored except as a bit of history; the real focus should be on the dataset. 

Zirikly, A., Resnik, P., Uzuner, Ö., & Hollingshead, K. (2019). CLPsych 2019 shared task: Predicting the degree of suicide risk in Reddit posts. In *Proceedings of the Sixth Workshop on Computational Linguistics and Clinical Psychology*, pages 1–11. Association for Computational Linguistics. [https://aclanthology.org/W19-3003/](https://aclanthology.org/W19-3003/)

-  The task paper that launched the most widely used benchmark in this area. Defines the four-way risk categorization task on the UMD Reddit dataset, describes the evaluation setup, and surveys participating systems. This is the immediate precursor paper to any project using the UMD data. 


### III. Ethics

Benton, A., Coppersmith, G., & Dredze, M. (2017). Ethical research protocols for social media health research. In *Proceedings of the First ACL Workshop on Ethics in Natural Language Processing*, pages 94–102. Association for Computational Linguistics. [https://aclanthology.org/W17-1612/](https://aclanthology.org/W17-1612/)

-  Short, practical, and still the most-cited reference for ethical practices in this specific domain. Covers IRB gaps, informed consent challenges, data privacy, safe messaging, and researcher safety for suicide and mental health NLP work. 

Chancellor, S., Birnbaum, M. L., Caine, E. D., Silenzio, V. M. B., & De Choudhury, M. (2019). A taxonomy of ethical tensions in inferring mental health states from social media. In *Proceedings of the ACM Conference on Fairness, Accountability, and Transparency (FAccT)*, pages 79–88. ACM. [https://doi.org/10.1145/3287560.3287587](https://doi.org/10.1145/3287560.3287587)

-  Broader and more systematic than Benton et al.—develops a formal taxonomy of ethical concerns (validity, consent, dual use, etc.) specific to mental health inference from social media. Nicely pairs with Benton et al. to give a more complete ethical grounding.


### IV. Suicide Theory for a Computationally-Oriented Newcomer

#### IVa. Ideation-to-Action Theories

Klonsky, E. D., Saffer, B. Y., & Bryan, C. J. (2018). Ideation-to-action theories of suicide: A conceptual and empirical update. *Current Opinion in Psychology, 22*, 38–43. [https://doi.org/10.1016/j.copsyc.2017.07.020](https://doi.org/10.1016/j.copsyc.2017.07.020)

-  At ~5 pages, this is the most efficient on-ramp to the ideation-to-action framework. Covers IPTS (Joiner), IMV (O'Connor), 3ST (Klonsky & May), and FVT (Rudd) comparatively, with empirical summary.

Van Orden, K. A., Witte, T. K., Cukrowicz, K. C., Braithwaite, S. R., Selby, E. A., & Joiner, T. E. (2010). The interpersonal theory of suicide. *Psychological Review, 117*(2), 575–600. [https://doi.org/10.1037/a0018697](https://doi.org/10.1037/a0018697)

-  The definitive statement of the widely referenced interpersonal theory of suicide — thwarted belongingness, perceived burdensomeness, and acquired capability.  This is most-cited theoretical framework in the NLP suicidality literature.  Long (~26 pp.) but authoritative.

O'Connor, R. C., & Kirtley, O. J. (2018). The integrated motivational–volitional model of suicidal behaviour. *Philosophical Transactions of the Royal Society B, 373*(1754), 20170268. [https://doi.org/10.1098/rstb.2017.0268](https://doi.org/10.1098/rstb.2017.0268)

-  Updated exposition of the IMV model. Central role of defeat and entrapment (also key in the SCS framework), with a structured three-phase architecture. The model's emphasis on volitional moderators is particularly relevant for NLP work trying to differentiate ideation from action.

Klonsky, E. D., & May, A. M. (2015). The Three-Step Theory (3ST): A new theory of suicide rooted in the "ideation-to-action" framework. *International Journal of Cognitive Therapy, 8*(2), 114–129. [https://doi.org/10.1521/ijct.2015.8.2.114](https://doi.org/10.1521/ijct.2015.8.2.114)

-  The 3ST paper itself — parsimonious four-factor model (pain, hopelessness, connectedness, capability). More actionable than IPTS for task operationalization, and increasingly used in NLP feature engineering. 


#### IVb. Crisis-Focused Constructs (SCS / ASAD / Suicidal Narrative)

Rogers, M. L., Galynker, I., Yaseen, Z., DeFazio, K., & Joiner, T. E. (2017). An overview and comparison of two proposed suicide-specific diagnoses: Acute suicidal affective disturbance and suicide crisis syndrome. Psychiatric Annals, 47(8), 416-420. [https://linkloom.link/OX1DnxuZOL](https://linkloom.link/OX1DnxuZOL)

- Good, very brief overview of SCS and ASAD, which focus on short-term (crisis) risk.

Cohen, Lisa Janet, Bernard Gorman, Jessica Briggs, Min Eun Jeon, Tal Ginsburg, and Igor Galynker. "The suicidal narrative and its relationship to the suicide crisis syndrome and recent suicidal behavior." Suicide and Life‐Threatening Behavior 49, no. 2 (2019): 413-422.
[https://linkloom.link/UOjVRmQjsT](https://linkloom.link/UOjVRmQjsT)

-  Introduces the suicidal narrative construct — a measurable configuration of IPT-derived interpersonal themes and goal-disengagement cognitions that predicts near-term risk above and beyond ideation alone. Directly links the narrative-level constructs (burdensomeness, thwarted belonging, goal disengagement) to Suicide Crisis Syndrome and to short-term suicidal behavior.

Galynker, I., Cohen, A., & Yaseen, Z. S. (2022). The narrative-crisis model of suicide and its prediction of near-term suicidal behavior. *Suicide and Life-Threatening Behavior, 52*(2), 284–297. [https://doi.org/10.1111/sltb.12816](https://doi.org/10.1111/sltb.12816)

-  Tests the full four-stage Narrative Crisis Model empirically — chronic risk → suicidal narrative → SCS → near-term behavior. Establishes the sequential structure and predictive pathway. This is the framework paper that positions SCS and the suicidal narrative within a broader longitudinal model that is highly relevant to NLP timeline tasks (like CLPsych 2025). 


====
